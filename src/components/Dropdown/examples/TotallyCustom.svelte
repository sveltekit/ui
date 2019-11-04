<script>
  import Button from 'sveltekit/Button';
  import Dropdown from 'sveltekit/Dropdown';
  import CustomDropdown from './_CustomDropdown.svelte';

  export let isActive = undefined;

  function handleSelect(event) {
    // handle event
  }
</script>

<Dropdown MenuComponent="{CustomDropdown}" on:select="{handleSelect}">
  <Button>
    Fully custom menu
  </Button>
</Dropdown>
