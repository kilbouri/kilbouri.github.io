<script lang="ts">
  export let href: string;

  export let current: boolean = false;

  // we supply the base URI so that we can handle relative paths gracefully.
  $: sameSite = new URL(href, document.baseURI).host === location.host;
  $: target = sameSite ? undefined : "_blank";
</script>

<li class="py-6">
  <a
    class="p-2 text-sm font-medium uppercase
           text-zinc-600 hover:text-zinc-900
           dark:text-zinc-300 dark:hover:text-zinc-100
           data-[current='true']:!text-emerald-600
           data-[current='true']:hover:!text-emerald-800 data-[current='true']:hover:dark:!text-emerald-400"
    data-current={current}
    {href}
    {target}
  >
    <slot />
  </a>
</li>
