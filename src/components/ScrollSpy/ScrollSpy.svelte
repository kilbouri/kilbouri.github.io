<script lang="ts">
  import { onMount } from "svelte";
  import { activeId } from "../../lib/stores/ActiveId";

  let container: HTMLDivElement;
  let observer: IntersectionObserver;

  let sectionIds: string[] = [];
  let visible: string[] = [];

  const observerConfig: IntersectionObserverInit = {
    // places the detection point at the very center of the screen
    rootMargin: "-50% 0% 0% 0%",
  };

  onMount(() => {
    // this will be document-ordered: https://stackoverflow.com/a/8203782
    const query = document.querySelectorAll(".scrollable");
    const sectionElements: HTMLElement[] = [].slice.call(query);

    sectionIds = sectionElements.map((s) => s.id);
    observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          // section on screen, add it to visible

          if (sectionIds.indexOf(target.id) < sectionIds.indexOf(visible[0])) {
            // this id comes before the first previously visible section
            visible.unshift(target.id);
          } else {
            // this id comes after the first previously visible section
            visible.push(target.id);
          }
        } else {
          // section has gone off-screen, remove it from visible if needed
          const index = visible.indexOf(target.id);
          if (index >= 0) {
            visible.splice(index, 1);
          }
        }
      });

      // update the current section to the (potentially new) first visible section
      activeId.set(visible[0]);
    }, observerConfig);

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  });
</script>

<div bind:this={container}>
  <slot />
</div>
