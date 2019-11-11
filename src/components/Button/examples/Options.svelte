<script>
  import Button, { options } from '@sveltekit/ui/Button';
</script>

<div class="row">
  {#each Object.entries(options.type) as [typeKey, typeValue]}
    <div class="col">
        <Button type="{typeValue}">{typeKey}</Button>
        <Button type="{typeValue}" isOutlined>{typeKey}</Button>
        <Button type="{typeValue}" isSelected>{typeKey}</Button>
        <Button type="{typeValue}" isDisabled>{typeKey}</Button>
        <Button type="{typeValue}" isActive>{typeKey}</Button>
    </div>
  {/each}
</div>
