import { persisted } from "svelte-local-storage-store";
import { mediaQuery } from "./stores/mediaQueryStore";
import { derived, writable } from "svelte/store";

// Current scrollable id for scrollspy
const activeId = writable("");

// Current site theme
type Theme = "light" | "dark";
const systemTheme = mediaQuery("(prefers-color-scheme: dark)");
const userTheme = persisted<Theme | "system">("theme", "system");
const theme = derived([systemTheme, userTheme], ([sys, user]): Theme => {
  if (user === "system") {
    return sys ? "dark" : "light";
  }

  return user;
});

export { activeId, theme };
