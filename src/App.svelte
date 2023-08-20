<script lang="ts" context="module">
  import "./app.css";
</script>

<script>
  import ThemeProvider from "./lib/ThemeProvider.svelte";
</script>

<ThemeProvider>
  <div id="page-bg-container" class="min-h-screen bg-gray-200">
    <main class="max-w-3xl mx-auto text-black">
      <div class="flex flex-col justify-center h-screen align-center">
        <div class="flex items-center gap-4 mb-6 text-zinc-500">
          <span class="inline-block w-6 border-b-2 border-current" />
          <span class="text-sm font-bold">HELLO</span>
        </div>

        <h1 class="mb-4 text-5xl font-extrabold text-zinc-700">
          I'm <span class="text-emerald-600">Isaac</span> Kilbourne
        </h1>

        <p class="text-lg leading-relaxed text-zinc-600">
          I am a <span class="font-medium">full-stack developer</span> located in
          Ontario, Canada. I specialize in creating unplanned bonus features, though
          on occasion I succeed in finding the right answer in finite time.
        </p>
      </div>
    </main>
  </div>
</ThemeProvider>
