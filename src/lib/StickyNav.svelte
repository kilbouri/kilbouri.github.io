<script lang="ts">
  import { onMount } from "svelte";

  let navElement: HTMLElement;
  let pinned: boolean = false;

  // navElement is undefined until after mount completes
  onMount(() => {
    const observer = new IntersectionObserver(
      ([e]) => (pinned = e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(navElement);
  });
</script>

<nav
  class="sticky -top-[1px] bg-zinc-200 z-30 dark:bg-zinc-900"
  class:shadow-md={pinned}
  class:dark:shadow-lg={pinned}
  bind:this={navElement}
>
  <slot />
</nav>
