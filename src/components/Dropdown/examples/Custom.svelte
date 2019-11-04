<script>
  import Button from 'sveltekit/Button';
  import Dropdown from 'sveltekit/Dropdown';
  import CustomList from './_CustomList.svelte';

  export let isActive = undefined;

  function handleSelect(event) {
    // handle event
  }
</script>

<Dropdown MenuComponent="{CustomList}" on:select="{handleSelect}">
  <Button>
    Custom menu with components
  </Button>
</Dropdown>
