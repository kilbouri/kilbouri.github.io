<script lang="ts" context="module">
  import { isDarkPreferred, theme } from "./stores/Theme";

  export const toggleTheme = () => {
    theme.update((prev) => (isDarkPreferred(prev) ? "light" : "dark"));
  };
</script>

<div class:dark={isDarkPreferred($theme)}>
  <slot />
</div>
