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
  import Project from "./components/Project.svelte";
  import ToolCard from "./components/ToolCard.svelte";

  import { activeId } from "./lib/store";
  import { allTools } from "./lib/tools";
  import { getGithubRepositories } from "./lib/githubRepos";

  const fetchProjects = getGithubRepositories("kilbouri");
</script>

<svelte:head>
  <title>Isaac Kilbourne</title>
</svelte:head>

<ThemeProvider />
<ScrollSpy />

<StickyNav>
  <div class="mx-4 md:mx-8 lg:mx-16">
    <div class="w-full grid grid-cols-[auto,1fr,auto] max-w-6xl px-2 mx-auto">
      <!-- Logo -->
      <ul class="flex flex-row justify-start gap-10">
        <img src="https://placehold.co/48" alt="Placeholder" />
      </ul>

      <!-- Internal links -->
      <ul class="flex flex-row justify-center gap-10">
        <NavItem current={$activeId === ""} href="#">Home</NavItem>
        <NavItem current={$activeId === "skills"} href="#skills">Skills</NavItem
        >
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
  </div>
</StickyNav>

<!-- negative margin here is used to adjust for the sticky header -->
<div class="mx-4 md:mx-8 lg:mx-16">
  <main class="relative max-w-6xl px-2 mx-auto -mt-16">
    <ScrollSection id="">
      <div
        class="flex flex-col justify-center max-w-3xl min-h-screen align-center"
      >
        <div class="flex items-center mb-6 text-zinc-500 dark:text-zinc-400">
          <span class="inline-block w-6 border-b-2 border-current me-4" />
          <span class="text-sm font-bold uppercase">Hello</span>
        </div>

        <h1
          class="mb-4 text-5xl font-extrabold text-zinc-600 dark:text-zinc-300"
        >
          I'm <span class="text-accent-600">Isaac</span> Kilbourne
        </h1>

        <p class="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          I am a <span class="font-medium">full-stack developer</span> located in
          Ontario, Canada. I specialize in creating unplanned bonus features, though
          on rare occasion I succeed in finding the right answer in finite time.
        </p>
      </div>
    </ScrollSection>

    <ScrollSection id="skills">
      <SectionHeader>Stuff I Use</SectionHeader>

      <!-- TODO: redesign this to look more like this: 
           https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F5542520%2Fscreenshots%2F14329285%2Fmedia%2Fc69320779b1398227f26bc6cc3971471.png%3Fcompress%3D1%26resize%3D400x300%26vertical%3Dtop&f=1&nofb=1&ipt=bd7eedc497f5ec2788e22df33d61228d5de2b7422a40b75d4f0e5f28578ace72&ipo=images
      -->
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

      {#await fetchProjects}
        <div
          class="w-16 h-16 border-4 rounded-full border-x-zinc-500 animate-spin"
        />
        <!-- Spinner -->
      {:then projects}
        {#each projects as project}
          <Project {...project} />
        {/each}
      {:catch error}
        <span class="font-medium text-red-400">{error}</span>
      {/await}
    </ScrollSection>
  </main>
</div>

<style lang="postcss">
  :global([id]) {
    scroll-margin-top: 5em;
  }
</style>
