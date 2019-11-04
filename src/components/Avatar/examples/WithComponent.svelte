<script>
  import Avatar, { options } from 'sveltekit/Avatar';
  import Icon from 'sveltekit/Icon';
  import { PLANE } from '../../Icon/_iconData';

  let componentProps = {
    iconData: PLANE
  }
</script>

<Avatar Component="{Icon}" {componentProps}></Avatar>
