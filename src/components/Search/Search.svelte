<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  import _debounce from 'lodash/debounce';
  import Icon from '../Icon/Icon.svelte';
  import {CLOSE, SEARCH} from '../Icon/_iconData';

  import TextInput from '../TextInput/TextInput.svelte';

  export let placeholder = '';
  export let value = undefined;
  export let debounce = false;

  const debounced = _debounce((targetValue) => {
    value = targetValue;
  }, 300);

  function onInput(event) {
    const targetValue = event.detail.target.value;
    if (debounce) debounced(targetValue);
    else value = targetValue;
  }

  function onClearIconClick() {
    if (debounce) debounced.cancel();
    value = '';
    dispatch('clear');
  }

</script>

<style>
  .container {
    position: relative;
  }

  .container :global(input) {
    border-width: 0;
    padding-right: 35px;
  }

  .prepend {
    width: 24px;
    height: 24px;
  }

  .clearIcon {
    position: absolute;
    margin: 11px 0;
    top: 0;
    right: 10px;
    width: 20px;
    height: 20px;
    color: var(--neutral_4);
  }
</style>

<div class="container">
  <TextInput {placeholder} {value} on:input={onInput}>
    <div class="prepend" slot="prepend">
      <Icon iconData="{SEARCH}" />
    </div>
  </TextInput>

  { #if value}
  <div class="clearIcon" on:click="{onClearIconClick}">
    <Icon iconData={CLOSE}></Icon>
  </div>
  { /if }
</div>
