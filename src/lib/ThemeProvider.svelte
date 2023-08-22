<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "./stores/Theme";

  onMount(() => {
    const html = document.querySelector("html");
    const unsubFromThemeStore = theme.subscribe((theme) =>
      html.classList.toggle("dark", theme === "dark")
    );

    return () => unsubFromThemeStore();
  });
</script>

<slot />
