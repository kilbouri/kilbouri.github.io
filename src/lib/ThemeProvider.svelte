<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { theme } from "./stores/Theme";
  $: dark = $theme === "dark";

  let themeUnsub: ReturnType<typeof theme.subscribe>;
  onMount(() => {
    const html = document.querySelector("html");
    themeUnsub = theme.subscribe((theme) =>
      html.classList.toggle("dark", theme === "dark")
    );
  });

  onDestroy(() => {
    themeUnsub();
  });
</script>

<slot />
