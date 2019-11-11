<script>
  import Alert, { options } from '@sveltekit/ui/Alert';
  import { INFORMATION } from '../../Icon/_iconData';
</script>

<div class="row">
  <Alert>
    Warning! VERY LONG MESSAGE VERY LONG MESSAGE VERY LONG MESSAGE VERY LONG
    MESSAGE VERY LONG MESSAGE VERY LONG MESSAGE VERY LONG MESSAGE VERY LONG
    MESSAGE.
  </Alert>
</div>

<div class="row">
  <Alert
    type={options.type.INFORMATION}
    iconData={INFORMATION}>
    Information! VERY LONG MESSAGE VERY LONG MESSAGE VERY LONG MESSAGE VERY LONG
    MESSAGE VERY LONG MESSAGE VERY LONG MESSAGE VERY LONG MESSAGE VERY LONG
    MESSAGE.
  </Alert>
</div>
