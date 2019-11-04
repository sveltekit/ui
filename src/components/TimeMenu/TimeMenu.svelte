<script>
  import { createEventDispatcher } from 'svelte';
  import Icon from 'sveltekit/Icon';
  import { CLOCK } from '../Icon/_iconData';
  import Dropdown, { options as dropdownOptions } from 'sveltekit/Dropdown';
  import Tabs from 'sveltekit/Tabs';
  import Menu from './_Menu.svelte';

  export let selectedItem;
  export let placeholder = 'Please select...';
  export let placement = dropdownOptions.placement.BOTTOM_LEFT;
</script>

<style>
  .toggle {
    border: 1px solid var(--neutral_1);
    border-radius: 4px;
    color: var(--neutral_7);
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    padding: 11px 16px;
    outline: none;
    width: 100%;
  }

  .toggle:hover {
    border-color: var(--neutral_3);
  }

  .toggle:isdisabled {
    background-color: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.07);
    color: #b2b8bf;
  }

  .toggle:focus {
    border-color: var(--blue_5);
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
</style>

<Dropdown MenuComponent={Menu} {placement} isBlock bind:selectedItem>
  <div class="toggle" tabindex="0">
    <span class="icon">
      <Icon iconData={CLOCK} />
    </span>
    <span class="value">{selectedItem || placeholder}</span>
  </div>
</Dropdown>
