<script>
  import Tag from 'sveltekit/Tag';
  import { options } from 'sveltekit/Tag';

    import { HEART } from '../../Icon/_iconData';


  export let iconData = HEART;
  export let iconPosition = options.iconPosition.LEFT;
  export let tabLabel = 'Example label';
</script>

<Tag { iconData } { iconPosition }>{ tabLabel }</Tag>
