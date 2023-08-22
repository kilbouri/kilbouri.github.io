import { writable } from "svelte/store";

const activeId = writable<string>("");

export { activeId };
