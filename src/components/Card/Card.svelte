<script>
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  import classnames from 'classnames';

  export let isClickable = false;
  export let isClickDisabled = false;
  export let level = 0;

  let ClassNames;
  $: {
    ClassNames = classnames({
      isClickable: !isClickDisabled && isClickable,
      [`level-${level}`]: level
    });
  }

  function onClick() {
    if (isClickable && !isClickDisabled) {
      dispatch('click');
    }
  }

  onMount(() => {
    isClickable = !!arguments[0].$$.callbacks.click;
  });
</script>


<style>
  .card {
    border-radius: 4px;
    background-color: var(--white);
    box-shadow: 0 1px 2px 0 rgba(44, 62, 80, 0.12);
  }

  .isClickable {
    cursor: pointer;
    position: relative;
    transition: all 0.15s;
  }

  .isClickable:hover {
    box-shadow: 2px 2px 4px 1px rgba(44, 62, 80, 0.08);
    transform: translateY(-2px) translateZ(0);
  }

  .isClickable:active {
    box-shadow: none;
    transform: translateY(0) translateZ(0);
  }

  .level-2 {
    box-shadow: 0 2px 3px 0 rgba(44, 62, 80, 0.24);
  }

  .level-3 {
    box-shadow: 1px 5px 6px 0 rgba(44, 62, 80, 0.24);
  }
</style>


<div class="card { ClassNames }" on:click="{onClick}">
  <slot></slot>
</div>
