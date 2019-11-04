<script>
  import TextInput from 'sveltekit/TextInput';
  let value = '';
</script>

<TextInput bind:value></TextInput>
<p>Value: {value}</p>
