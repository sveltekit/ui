<script>
  export let props = undefined;
</script>

<style>
  table {
    width: 100%;
    font-size: 14px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #d8dbdf;
  }

  th {
    border: 1px solid #d8dbdf;
    padding: 16px 24px;
    text-align: left;
    white-space: nowrap;
    font-weight: 500;
    background: rgba(0, 0, 0, .02);
  }

  td {
    border: 1px solid #d8dbdf;
    padding: 16px 24px;
    text-align: left;
    vertical-align: top;
  }

  input {
    padding: 5px;
    width: 100%;
  }
</style>

{#if props && Object.keys(props).length > 0}
<table>
    <thead>
        <th>Property</th>
        <th>Value</th>
    </thead>
    <tbody>
        {#each Object.keys(props) as prop}
            <tr>
                <td>{prop}</td>
                {#if typeof props[prop] === 'string'}
                    <td><input bind:value="{props[prop]}"></td>
                {:else}
                    <td></td>
                {/if}
            </tr>
        {/each}
    </tbody>
</table>
{/if}
