import { persisted } from "svelte-local-storage-store";

type Theme = "light" | "dark" | "system";

const store = persisted<Theme>("theme", "system");

const isDarkPreferred = (theme: Theme) => {
  if (theme === "system") {
    // determine if system theme prefers dark or not
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return theme === "dark";
};

export { store as theme, isDarkPreferred, type Theme };
