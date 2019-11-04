<script>
  import CodeBlock from './CodeBlock.svelte';
  import { components, activeComponent } from 'stores';

  export let src;
  export let componentName;
  export let exampleName;
  let elem = undefined;
  let props = undefined;
  let source = undefined;

  $: {
    if ($activeComponent) {
      init()
    }
  }

  async function init() {
    source = await require(`!!raw-loader!../components/${componentName}/examples/${exampleName}.svelte`).default;

    props = {};

    if (elem && elem.$$ && elem.$$.props && props) {
      elem.$$.props.forEach(prop => {
        props[prop] = elem[prop];
      })
    }
  }
</script>

<style>
  h2 {
    font-size: 18px;
    margin: 0 0 20px;
  }

  .component,
  .source {
    margin: 0 0 20px;
  }

  .source {
    background: #1E1E1E;
    white-space: pre;
    padding: 20px;
    color: #fff;
    border-radius: 5px;
    line-height: 22px;
    overflow-x: auto;
  }
</style>


<h2>{exampleName.split(/(?=[A-Z])/).join(" ")} Example</h2>

<div class="component">
  <svelte:component this={src} bind:this="{elem}" {...props}></svelte:component>
</div>

{#if source}
<div class="source">
    <CodeBlock code="{source}"></CodeBlock>
</div>
{/if}
