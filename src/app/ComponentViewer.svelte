<script>
  import { components, activeComponent } from 'stores';
  import Example from './Example.svelte';

  let testOutput;
  let elem = undefined;
  let api = {};

  $: name =
    $activeComponent.charAt(0).toUpperCase() + $activeComponent.slice(1);
  $: displayName = $activeComponent.replace(/([a-z])([A-Z])/g, '$1 $2');
  $: examples = $components[$activeComponent].examples;
  $: options = $components[$activeComponent].options;
  $: _activeComponent = $components[$activeComponent]
    ? $components[$activeComponent]
    : $components[$activeComponent.spilt['_'][0]];
  $: src = _activeComponent.src;

  $: {
    if (elem && api) {
      elem.$$.props.forEach(prop => {
        if (!api[prop]) {
          api[prop] = {};
        }

        api[prop].default = elem[prop] ? JSON.stringify(elem[prop]) : '-';

        if (!api[prop].description) {
          api[prop].description = '';
        }

        if (!api[prop].type) {
          api[prop].type =
            typeof elem[prop] !== 'undefined' ? typeof elem[prop] : '-';
        }
      });
    }
  }
</script>

<style>
  .container {
    width: 100%;
    padding: 0 20px;
    max-width: 950px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  table {
    width: 100%;
    font-size: 14px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #d8dbdf;
    margin: 0 0 40px;
  }

  th {
    border: 1px solid #d8dbdf;
    padding: 16px 24px;
    text-align: left;
    white-space: nowrap;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.02);
  }

  td {
    border: 1px solid #d8dbdf;
    padding: 16px 24px;
    text-align: left;
    vertical-align: top;
  }

  h1 {
    font-size: 28px;
    margin: 0 0 20px;
  }

  h2 {
    font-size: 18px;
    margin: 0 0 10px;
  }

  .example {
    margin: 0 0 30px;
  }

  .hidden {
    display: none;
  }

  code {
    background: #ebedef;
    border: 1px solid #c5cacf;
    border-radius: 3px;
    margin: 0 0 4px;
    display: inline-block;
    padding: 3px 5px;
    font-weight: bold;
  }

  .table {
    width: 100%;
    overflow: auto;
  }

</style>

<div class="container">
  {#if src}
    <div class="component">
      <h1>{displayName}</h1>

      {#each examples as example}
        <div class="example">
          <Example
            src={example}
            componentName={name}
            exampleName={example.name.split('_')[0]} />
        </div>
      {/each}
    </div>
  {/if}

  {#if elem && api && elem.$$.props.length > 0}
    <h2>API</h2>
    <div class="table">
      <table>
        <thead>
          <th>Property</th>
          <th>Type</th>
          <th>Default</th>
        </thead>
        <tbody>
          {#each elem.$$.props as prop}
            {#if api[prop]}
              <tr>
                <td>{prop}</td>
                <td>{api[prop].type}</td>
                {#if api[prop].type === 'function'}
                  <td>{JSON.stringify(api[prop].default)}</td>
                {:else}
                  <td>{api[prop] ? api[prop].default : '-'}</td>
                {/if}
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  {/if}

  {#if options}
    <h2>Options</h2>
    <table>
      <thead>
        <th>Key</th>
        <th>Constants</th>
      </thead>
      <tbody>
        {#each Object.keys(options) as option}
          <tr>
            <td>{option}</td>
            <td>
              {#each Object.keys(options[option]) as key}
                <code>{key}</code>
                &nbsp;
              {/each}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}

  {#if _activeComponent}
    <div class="hidden">
      <svelte:component this={_activeComponent.src} bind:this={elem} />
    </div>
  {/if}
</div>
