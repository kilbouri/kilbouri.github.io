<script lang="ts" context="module">
  import "./app.css";
</script>

<script lang="ts">
  import StickyNav from "./components/StickyNav.svelte";
  import NavItem from "./components/NavItem.svelte";
  import SectionHeader from "./components/SectionHeader.svelte";
  import ThemeProvider from "./components/ThemeProvider.svelte";
  import ScrollableSection from "./components/ScrollableSection.svelte";
  import ScrollSpy from "./components/ScrollSpy.svelte";
  import { activeId } from "./lib/stores/ActiveId";

  const samePageLinks: [string, string][] = [
    ["", "Home"],
    ["about", "About"],
    ["projects", "Projects"],
  ];
</script>

<svelte:head>
  <title>Isaac Kilbourne</title>
</svelte:head>

<ThemeProvider />

<StickyNav>
  <div class="w-full grid grid-cols-[auto,1fr,auto] max-w-6xl px-2 mx-auto">
    <ul class="flex flex-row justify-start gap-10">
      <!-- Start slot -->
      <img src="https://placehold.co/48" alt="Placeholder" />
    </ul>

    <ul class="flex flex-row justify-center gap-10">
      {#each samePageLinks as [id, title]}
        <NavItem current={$activeId === id} href={"#" + id}>
          {title}
        </NavItem>
      {/each}
    </ul>
    <ul class="flex flex-row justify-end gap-10">
      <!-- End slot -->

      <NavItem href="https://github.com/kilbouri">GitHub</NavItem>
      <NavItem href="https://linkedin.com/in/kilbouri">LinkedIn</NavItem>
    </ul>
  </div>

  <svelte:fragment slot="end" />
</StickyNav>

<!-- negative margin here is used to adjust for the sticky header -->
<ScrollSpy>
  <div class="relative max-w-3xl px-2 mx-auto -mt-16">
    <main>
      <ScrollableSection id="">
        <div class="flex flex-col justify-center min-h-screen align-center">
          <div
            class="flex items-center gap-4 mb-6 text-zinc-500 dark:text-zinc-400"
          >
            <span class="inline-block w-6 border-b-2 border-current" />
            <span class="text-sm font-bold uppercase">Hello</span>
          </div>

          <h1
            class="mb-4 text-5xl font-extrabold text-zinc-600 dark:text-zinc-300"
          >
            I'm <span class="text-accent-600">Isaac</span> Kilbourne
          </h1>

          <p class="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I am a <span class="font-medium">full-stack developer</span> located
            in Ontario, Canada. I specialize in creating unplanned bonus features,
            though on occasion I succeed in finding the right answer in finite time.
          </p>
        </div>
      </ScrollableSection>

      <ScrollableSection id="about">
        <div class="min-h-screen mt-8">
          <SectionHeader>About Me</SectionHeader>
        </div>
      </ScrollableSection>

      <ScrollableSection id="projects">
        <div class="min-h-screen mt-8">
          <SectionHeader>Projects</SectionHeader>
        </div>
      </ScrollableSection>
    </main>
  </div>
</ScrollSpy>

<style lang="postcss">
  :global([id]) {
    scroll-margin-top: 8em;
  }
</style>
