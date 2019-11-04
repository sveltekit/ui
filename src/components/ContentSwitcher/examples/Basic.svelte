<script>
  import ContentSwitcher from 'sveltekit/ContentSwitcher';
  import Icon from 'sveltekit/Icon';
  import {CAR, HOTEL, PLANE} from '../../Icon/_iconData';

  const ItemIconComponent = Icon;

  const items = [
    {
      label: 'Car',
      itemIconProps: {
        iconData: CAR
      }
    },
    {
      label: 'Hotel',
      itemIconProps: {
        iconData: HOTEL
      }
    },
    {
      label: 'Flight',
      itemIconProps: {
        iconData: PLANE
      }
    }
  ]
</script>

<ContentSwitcher {items} {ItemIconComponent}></ContentSwitcher>
