<script>
  import Avatar, { options } from '@sveltekit/ui/Avatar';
  import Icon from '@sveltekit/ui/Icon';
  import { PLANE } from '../../Icon/_iconData';

  let componentProps = {
    iconData: PLANE
  }
</script>

<Avatar Component="{Icon}" {componentProps}></Avatar>
