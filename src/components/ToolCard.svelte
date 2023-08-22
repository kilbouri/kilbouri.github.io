<script lang="ts">
  export let toolName: string;
  export let iconName: string;
  export let variant: string = "original";

  const rootUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
  $: toolIconUrl = `${rootUrl}/${iconName}/${iconName}-${variant}.svg`;
</script>

<div
  class="flex items-center w-full px-4 py-2 overflow-hidden duration-150 bg-white rounded-lg shadow hover:scale-105"
>
  <img alt={toolName} class="w-12" src={toolIconUrl} />
  <span class="ml-4 truncate text-md">{toolName}</span>
</div>
