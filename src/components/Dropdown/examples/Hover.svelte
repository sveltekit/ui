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

  let isHoverable = true;
</script>

<Dropdown { items } { isHoverable }>
  <Button iconData={MORE}></Button>
</Dropdown>
