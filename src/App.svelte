<script lang="ts" context="module">
  import "./app.css";
</script>

<script lang="ts">
  import StickyNav from "./components/StickyNav.svelte";
  import NavItem from "./components/NavItem.svelte";
  import SectionHeader from "./components/SectionHeader.svelte";
  import ThemeProvider from "./components/ThemeProvider.svelte";
  import ScrollSection from "./components/ScrollSection.svelte";
  import ScrollSpy from "./components/ScrollSpy.svelte";

  import { activeId } from "./lib/store";
  import ToolCard from "./components/ToolCard.svelte";
  import { allTools } from "./lib/stuffIUse";
</script>

<svelte:head>
  <title>Isaac Kilbourne</title>
</svelte:head>

<ThemeProvider />
<ScrollSpy />

<StickyNav>
  <div class="w-full grid grid-cols-[auto,1fr,auto] max-w-6xl px-2 mx-auto">
    <!-- Logo -->
    <ul class="flex flex-row justify-start gap-10">
      <img src="https://placehold.co/48" alt="Placeholder" />
    </ul>

    <!-- Internal links -->
    <ul class="flex flex-row justify-center gap-10">
      <NavItem current={$activeId === ""} href="#">Home</NavItem>
      <NavItem current={$activeId === "skills"} href="#skills">Skills</NavItem>
      <NavItem current={$activeId === "projects"} href="#projects">
        Projects
      </NavItem>
    </ul>

    <!-- External links -->
    <ul class="flex flex-row justify-end gap-10">
      <NavItem href="https://github.com/kilbouri">GitHub</NavItem>
      <NavItem href="https://linkedin.com/in/kilbouri">LinkedIn</NavItem>
    </ul>
  </div>

  <svelte:fragment slot="end" />
</StickyNav>

<!-- negative margin here is used to adjust for the sticky header -->
<main class="relative max-w-6xl px-2 mx-auto -mt-16">
  <ScrollSection id="">
    <div
      class="flex flex-col justify-center max-w-3xl min-h-screen align-center"
    >
      <div class="flex items-center mb-6 text-zinc-500 dark:text-zinc-400">
        <span class="inline-block w-6 border-b-2 border-current me-4" />
        <span class="text-sm font-bold uppercase">Hello</span>
      </div>

      <h1 class="mb-4 text-5xl font-extrabold text-zinc-600 dark:text-zinc-300">
        I'm <span class="text-accent-600">Isaac</span> Kilbourne
      </h1>

      <p class="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        I am a <span class="font-medium">full-stack developer</span> located in Ontario,
        Canada. I specialize in creating unplanned bonus features, though on rare
        occasion I succeed in finding the right answer in finite time.
      </p>
    </div>
  </ScrollSection>

  <ScrollSection id="skills">
    <SectionHeader>Stuff I Use</SectionHeader>

    <!-- TODO: implement a "show all" and push highlights to the front so we don't take up too much space for those who don't care -->
    <div
      class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {#each allTools.sort( (a, b) => a.name.localeCompare(b.name) ) as { name, iconName, variant }}
        <ToolCard toolName={name} {iconName} {variant} />
      {/each}
    </div>
  </ScrollSection>

  <ScrollSection id="projects">
    <SectionHeader>Projects</SectionHeader>
  </ScrollSection>
</main>

<style lang="postcss">
  :global([id]) {
    scroll-margin-top: 5em;
  }
</style>
