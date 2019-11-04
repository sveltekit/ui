<script>
  import { onMount } from 'svelte';
  import Nav from './Nav.svelte';
  import Home from './Home.svelte';
  import ComponentViewer from './ComponentViewer.svelte';
  import { components, activeComponent } from 'stores';
  import cssVars from 'css-vars-ponyfill';

  cssVars();

  let content = undefined;
  onMount(() => {
    $activeComponent = location.hash.substr(1);

    window.addEventListener(
      'hashchange',
      e => {
        $activeComponent = location.hash.substr(1);
        content.scrollIntoView();
        content.scrollTo(0, 0);
      },
      false
    );
  });
</script>

<style>
  .nav {
    z-index: 10;
    position: relative;
  }

  .content {
    position: fixed;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 0;
    padding: 20px 0 0 0;
    overflow: auto;
  }

  @media (min-width: 890px) {
    .nav {
      top: 0;
      width: 250px;
      height: 100vh;
      position: fixed;
      z-index: 10;
      padding: 0;
    }

    .content {
      left: 250px;
      top: 90px;
      padding: 20px 0;
      overflow-y: scroll;
    }
  }
</style>

<div class="container">
  <div class="nav">
    <Nav />
  </div>

  <div class="content" bind:this={content}>
    {#if $activeComponent.length > 0}
      <ComponentViewer />
      {:else}
      <Home />
    {/if}
  </div>
</div>
