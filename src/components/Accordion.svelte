<script lang="ts">
  import OpenIconicIcon from "./OpenIconicIcon.svelte";

  let isOpen: boolean = false;
  let contentContainer: HTMLDivElement;

  const animateHeight = (from: string, to: string) => {
    contentContainer.style.height = from;

    requestAnimationFrame(() => {
      // we have to wait for one repaint before we can set the height to the desired "to"
      // height. Otherwise we just **T E L E P O R T**
      requestAnimationFrame(() => {
        contentContainer.style.height = to;
      });
    });
  };

  const expand = () => {
    isOpen = true;

    // clear height constraint and fetch natural size
    contentContainer.style.height = "";
    const naturalHeight = window.getComputedStyle(contentContainer).height;

    animateHeight("0px", naturalHeight);

    // self-unregistering handler to remove height on completion (and thus allow normal resize behaviour)
    const transitionEndHandler = () => {
      contentContainer.style.height = "";
      contentContainer.removeEventListener(
        "transitionend",
        transitionEndHandler
      );
    };

    contentContainer.addEventListener("transitionend", transitionEndHandler);
  };

  const collapse = () => {
    isOpen = false;

    contentContainer.style.height = "";
    const naturalHeight = window.getComputedStyle(contentContainer).height;

    animateHeight(naturalHeight, "0px");
  };

  const toggle = () => {
    if (!isOpen) {
      expand();
    } else {
      collapse();
    }
  };
</script>

<div class="py-5">
  <button
    class="grid grid-cols-[1fr_auto] w-full justify-items-start items-center text-lg text-zinc-600 dark:text-zinc-300 font-medium"
    on:click={toggle}
  >
    <summary class="list-none">
      <slot name="label" />
    </summary>

    <span class:rotate-180={isOpen} class="transition ease-linear">
      <OpenIconicIcon name="chevron-bottom" />
    </span>
  </button>
  <div
    bind:this={contentContainer}
    class="overflow-hidden transition-all ease-linear"
    style="height: 0px"
  >
    <div class="mt-3 text-zinc-600 dark:text-zinc-400">
      <slot />
    </div>
  </div>
</div>
