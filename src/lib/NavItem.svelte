<script lang="ts">
  export let href: string;

  export let current: boolean = false;

  // we supply the base URI so that we can handle relative paths gracefully.
  $: sameSite = new URL(href, document.baseURI).host === location.host;
  $: target = sameSite ? undefined : "_blank";
</script>

<li>
  <a
    class="text-xs font-medium uppercase"
    class:text-zinc-600={!current}
    class:text-emerald-600={current}
    {href}
    {target}
  >
    <slot />
  </a>
</li>
