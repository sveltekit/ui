<script>
  import Button from 'sveltekit/Button';
  import Form from 'sveltekit/Form';
  import TextInput from 'sveltekit/TextInput';

  function onSubmit(event) {
    console.log('event :', event);
  }
</script>

<style>
  .input {
    margin: 0 0 10px;
  }
</style>

<Form on:submit={onSubmit}>
  <div class="input">
    <TextInput type="text" placeholder="Name" />
  </div>

  <Button htmlType="submit">Submit</Button>
</Form>
