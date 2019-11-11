<script>
  import Alert, { options } from '@sveltekit/ui/Alert';
  import { INFORMATION } from '../../Icon/_iconData';


  export let warning = 'Warning! Hot food! 🔥🔥🔥🔥';
  export let information = 'Information!';
</script>

<div class="row">
  <Alert>{warning}</Alert>
</div>

<div class="row">
  <Alert
    type={options.type.INFORMATION}
    iconData={INFORMATION}>
    {information}
  </Alert>
</div>
