<nav
  class="absolute top-0 grid w-full gap-4 py-6 mt-8 grid-cols-[auto,1fr,auto]"
>
  <ul class="flex flex-row justify-start gap-4">
    <slot name="start" />
  </ul>

  <ul class="flex flex-row justify-center gap-4 align-center">
    <slot />
  </ul>
  <ul class="flex flex-row justify-end align-bottom">
    <slot name="end" />
  </ul>
</nav>
