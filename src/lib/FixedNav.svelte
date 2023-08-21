<nav
  class="absolute top-0 grid w-full gap-10 py-6 mt-8 grid-cols-[auto,1fr,auto]"
>
  <ul class="flex flex-row justify-start gap-10">
    <slot name="start" />
  </ul>

  <ul class="flex flex-row justify-center gap-10">
    <slot />
  </ul>
  <ul class="flex flex-row justify-end gap-10">
    <slot name="end" />
  </ul>
</nav>
