import { persisted } from "svelte-local-storage-store";
import { derived, readable } from "svelte/store";

type Theme = "light" | "dark";

const colorSchemeQuery = "(prefers-color-scheme: dark)";
const currentSystemPreference = window.matchMedia(colorSchemeQuery).matches
  ? "dark"
  : "light";

// this store tracks the user's theme preference
const userPrefStore = persisted<Theme | "system">("theme", "system");

// this store tracks the current system theme
const sysPrefStore = readable<Theme>(currentSystemPreference, (set) => {
  const systemChangeHandler = (e: MediaQueryListEventMap["change"]) => {
    set(e.matches ? "dark" : "light");
  };

  const mediaQuery = window.matchMedia(colorSchemeQuery);
  mediaQuery.addEventListener("change", systemChangeHandler);

  return () => {
    mediaQuery.removeEventListener("change", systemChangeHandler);
  };
});

// Creates a derived store whose value is:
// - user preference if user preference !== "system"
// - system preference if user preference === "system"
const createThemeStore = () => {
  const { subscribe } = derived(
    [userPrefStore, sysPrefStore],
    ([$user, $system]) => {
      if ($user === "system") {
        return $system;
      }

      return $user;
    }
  );

  return {
    subscribe,
    setTheme: (newTheme: Theme) => userPrefStore.set(newTheme),
    clear: () => userPrefStore.set("system"),
  };
};

const themeStore = createThemeStore();
export { themeStore as theme, type Theme };
