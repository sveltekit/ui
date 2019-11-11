<script>
  import Button from '@sveltekit/ui/Button';
  import Dropdown from '@sveltekit/ui/Dropdown';
  import {MORE} from '../../Icon/_iconData';

  export let items = [{
    label: 'Menu Item 1',
    id: 1
  },
  {
    label: 'Menu Item 2',
    id: 2
  },
  {
    label: 'Menu Item 3',
    id: 3
  }];

  export let isActive = undefined;
</script>

<Dropdown { items } bind:isActive>
  <Button iconData={MORE}></Button>
</Dropdown>
