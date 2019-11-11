<script>
  import Tag from '@sveltekit/ui/Tag';
  import { options } from '@sveltekit/ui/Tag';

    import { HEART } from '../../Icon/_iconData';


  export let iconData = HEART;
  export let iconPosition = options.iconPosition.LEFT;
  export let tabLabel = 'Example label';
</script>

<Tag { iconData } { iconPosition }>{ tabLabel }</Tag>
