<script>
  import Button from 'sveltekit/Button';
  import Dropdown from 'sveltekit/Dropdown';
  import { MORE } from '../../Icon/_iconData';

  export let items = [
    {
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
    }
  ];

  let isMulti = true;
  let isSearchable = true;
</script>

<Dropdown {items} {isMulti} {isSearchable}>
  <Button iconData={MORE} />
</Dropdown>
