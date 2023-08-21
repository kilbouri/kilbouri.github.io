<script lang="ts" context="module">
  import "./app.css";
</script>

<script>
  import FixedNav from "./lib/FixedNav.svelte";
  import NavItem from "./lib/NavItem.svelte";
  import ThemeProvider from "./lib/ThemeProvider.svelte";
</script>

<svelte:head>
  <title>Isaac Kilbourne</title>
</svelte:head>

<ThemeProvider>
  <div id="page-bg-container" class="min-h-screen bg-gray-200">
    <div id="page-width-limit" class="relative max-w-3xl px-2 mx-auto">
      <FixedNav>
        <NavItem current href="#">Home</NavItem>
        <NavItem href="./about">About</NavItem>
        <NavItem href="./projects">Projects</NavItem>
        <NavItem href="./blog">Blog</NavItem>

        <svelte:fragment slot="end">
          <NavItem href="https://github.com/kilbouri">GitHub</NavItem>
          <NavItem href="https://linkedin.com/in/kilbouri">LinkedIn</NavItem>
        </svelte:fragment>
      </FixedNav>

      <main class="flex flex-col justify-center h-screen align-center">
        <div class="flex items-center gap-4 mb-6 text-zinc-500">
          <span class="inline-block w-6 border-b-2 border-current" />
          <span class="text-sm font-bold">HELLO</span>
        </div>

        <h1 class="mb-4 text-5xl font-extrabold text-zinc-600">
          I'm <span class="text-emerald-600">Isaac</span> Kilbourne
        </h1>

        <p class="text-lg leading-relaxed text-zinc-600">
          I am a <span class="font-medium">full-stack developer</span> located in
          Ontario, Canada. I specialize in creating unplanned bonus features, though
          on occasion I succeed in finding the right answer in finite time.
        </p>
      </main>
    </div>
  </div>
</ThemeProvider>
