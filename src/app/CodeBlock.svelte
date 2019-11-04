<script>
  import Prism from 'prismjs';
  
  export let code = undefined;
  export let lang = 'html';

  let fileExtension = 'svelte';
  $: highlighted = Prism.highlight(
    code,
    Prism.languages[lang],
    fileExtension
  );
</script>

<code>
  {@html highlighted}
</code>
