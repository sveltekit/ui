<script>
  export let iconData = undefined;
</script>

<style>
  .icon {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
  }
</style>

{ #if iconData }
<svg class="icon" width="100%" height="100%" viewBox="{ iconData.viewBox }" focusable="false" role="presentation">
  { #if iconData.type === 'path' }
  <path fill="currentColor" d="{ iconData.data }"></path>
  { /if }
  { #if iconData.type === 'polygon' }
  <polygon fill="currentColor" points="{ iconData.data }"></polygon>
  { /if }
</svg>
{ /if }
