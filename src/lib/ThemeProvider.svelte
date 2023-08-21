<script lang="ts">
  import { theme } from "./stores/Theme";
  $: dark = $theme === "dark";
</script>

<!-- The dark class will tell Tailwind to use dark:-prefixed classes -->
<div class:dark>
  <slot />
</div>
