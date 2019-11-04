<script>
  import Button, { options } from 'sveltekit/Button';
  import { ADD } from '../../Icon/_iconData';
</script>


{#each Object.entries(options.size) as [sizeKey, sizeValue]}
<div class="row">
  <span class="col">
    <Button size="{sizeValue}">{sizeKey}</Button>
  </span>
  <span>
    <Button iconData="{ADD}" iconPosition="{options.iconPosition.LEFT}" size="{sizeValue}">
      {sizeKey}
    </Button>
  </span>
  <span>
    <Button iconData="{ADD}" iconPosition="{options.iconPosition.RIGHT}" size="{sizeValue}">
      {sizeKey}
    </Button>
  </span>
  <span>
    <Button iconData="{ADD}" size="{sizeValue}"></Button>
  </span>
</div>
{/each}
