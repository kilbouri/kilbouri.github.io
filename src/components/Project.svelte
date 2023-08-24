<script lang="ts">
  export let name: string;
  export let description: string = "";
  export let url: string;
</script>

<div>
  <a href={url} target="_blank">
    <span class="font-medium">
      {name}
    </span>
    <span>: {description}</span>
  </a>
</div>
