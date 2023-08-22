import { readable } from "svelte/store";

/**
 * A read-only Svelte Store which contains the result of a media query.
 * The result is specifically whether or not the query matches.
 * If the result of the query changes, the store will automatically update.
 *
 * @param mediaQuery the media query to derive the store value from.
 * @returns A readable Svelte store watching the result of the media query.
 */
const createMediaQueryStore = (mediaQuery: string) => {
  const initialValue = window.matchMedia(mediaQuery).matches;

  return readable<boolean>(initialValue, (set) => {
    const handler = (e: MediaQueryListEventMap["change"]) => set(e.matches);
    const query = window.matchMedia(mediaQuery);

    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  });
};

export { createMediaQueryStore as mediaQuery };
