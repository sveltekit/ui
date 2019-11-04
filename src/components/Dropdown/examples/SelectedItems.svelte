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

  export let selectedItem = [];
  let isMulti = true;
</script>

<Dropdown {items} {isMulti} bind:selectedItem>
  <Button iconData={MORE} />

</Dropdown>

<p>selectedItem:</p>
<ul>
  {#each selectedItem as item}
    <li>{item.label}</li>
  {/each}
</ul>
