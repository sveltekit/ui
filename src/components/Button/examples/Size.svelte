<script>
  import Button, { options } from 'sveltekit/Button';
</script>

<div class="row">
  {#each Object.entries(options.size) as [sizeKey, sizeValue]}
    <span>
      <Button size="{sizeValue}">{sizeKey}</Button>
    </span>
  {/each}
</div>
  