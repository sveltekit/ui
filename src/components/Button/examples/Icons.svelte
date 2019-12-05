<script>
  import Button, { options } from '@sveltekit/ui/Button';
  import SvgIcon from 'svelte-loader!@fortawesome/fontawesome-free/svgs/solid/plus.svg';
  import SvelteIconsIcon from 'svelte-icons/md/MdAdd.svelte';
  import { Add as SvelteKitIcon } from '@sveltekit/ui/Icons';
</script>


{#each Object.entries(options.size) as [sizeKey, sizeValue]}
<div class="row">
  <span class="col">
    <Button size="{sizeValue}">{sizeKey}</Button>
  </span>
  <span>
    <Button Icon="{ SvelteKitIcon }" iconPosition="{options.iconPosition.LEFT}" size="{sizeValue}">
      {sizeKey}
    </Button>
  </span>
  <span>
    <Button Icon="{ SvelteKitIcon }" iconPosition="{options.iconPosition.RIGHT}" size="{sizeValue}">
      {sizeKey}
    </Button>
  </span>
  <span>
    <Button Icon="{ SvelteKitIcon }" size="{sizeValue}"></Button>
  </span>
</div>
{/each}

<h3>Different Icon Sets</h3>

<div class="row">
  <span>
    <Button Icon="{ SvgIcon }" iconPosition="{options.iconPosition.LEFT}">SVG Icon from Font Awesome</Button>
    <Button Icon="{ SvelteIconsIcon }" iconPosition="{options.iconPosition.LEFT}">Svelte Icon from Svelte Icons</Button>
    <Button Icon="{ SvelteKitIcon }" iconPosition="{options.iconPosition.LEFT}">Svelte Icon from SvelteKit</Button>
  </span>
</div>
