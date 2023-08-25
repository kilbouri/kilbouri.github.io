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
  import OpenIconicIcon from "./components/OpenIconicIcon.svelte";
  import Accordion from "./components/Accordion.svelte";

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

    <div class="min-h-screen">
      <div class="grid divide-y divide-neutral-500">
        <Accordion>
          <svelte:fragment slot="label">
            What is a SAAS platform?
          </svelte:fragment>

          A SAAS platform offers Software as a Service. This makes software
          development easier (so they claim!). Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quidem, cumque. A aliquam excepturi
          optio deserunt commodi corporis quibusdam natus aut numquam quo odit
          quidem, veniam, incidunt distinctio aspernatur cumque dolorum?
        </Accordion>
        <Accordion>
          <svelte:fragment slot="label">
            What is a SAAS platform?
          </svelte:fragment>

          A SAAS platform offers Software as a Service. This makes software
          development easier (so they claim!). Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quidem, cumque. A aliquam excepturi
          optio deserunt commodi corporis quibusdam natus aut numquam quo odit
          quidem, veniam, incidunt distinctio aspernatur cumque dolorum?
        </Accordion>
        <Accordion>
          <svelte:fragment slot="label">
            What is a SAAS platform?
          </svelte:fragment>

          A SAAS platform offers Software as a Service. This makes software
          development easier (so they claim!). Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quidem, cumque. A aliquam excepturi
          optio deserunt commodi corporis quibusdam natus aut numquam quo odit
          quidem, veniam, incidunt distinctio aspernatur cumque dolorum?
        </Accordion>
        <Accordion>
          <svelte:fragment slot="label">
            What is a SAAS platform?
          </svelte:fragment>

          A SAAS platform offers Software as a Service. This makes software
          development easier (so they claim!). Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quidem, cumque. A aliquam excepturi
          optio deserunt commodi corporis quibusdam natus aut numquam quo odit
          quidem, veniam, incidunt distinctio aspernatur cumque dolorum?
        </Accordion>
      </div>
    </div>
  </main>
</div>

<style lang="postcss">
  :global([id]) {
    scroll-margin-top: 5em;
  }
</style>
