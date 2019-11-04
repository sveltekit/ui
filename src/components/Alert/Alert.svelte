<script>
  import classnames from 'classnames';
  import Icon from 'sveltekit/Icon';
  import { ALERT } from '../Icon/_iconData';
  import options from './options';

  export let type = options.type.WARNING;
  export let iconData = ALERT;

  $: ClassNames = classnames(`type-${type}`);
</script>

<style>
  .alert {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    font-weight: bold;
  }

  .type-warning {
    background: var(--secondary_1);
    color: #fff;
  }

  .type-information {
    background: var(--yellow);
    color: var(--brown);
  }

  .icon {
    min-width: 20px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .content {
    flex-grow: 1;
    position: relative;
  }
</style>

<div class="alert {ClassNames}">

  <div class="icon">
    <Icon {iconData} />
  </div>

  <div class="content">
    <slot>Alert slot fallback</slot>
  </div>
</div>
