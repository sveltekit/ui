<script>
  import { components, activeComponent } from 'stores';

  let showNavMobile = false;

  function toggleNav() {
    showNavMobile = !showNavMobile;
  }
</script>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #fff;
    padding: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
  }

  .hamburger {
    width: 25px;
    left: 20px;
    position: fixed;
  }

  .branding {
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    padding: 0;
  }

  .branding img {
    margin: 0 5px 0 0;
    width: 40px;
  }

  .branding h1 {
    font-size: 16px;
    line-height: 15px;
    margin: 0;
  }

  .branding h2 {
    font-size: 14px;
    line-height: 13px;
    margin: 0;
    font-weight: normal;
  }

  ul {
    position: fixed;
    display: none;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    background: #fff;
    overflow: auto;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
    height: 45px;
    line-height: 45px;
    padding: 0 20px;
    border-radius: 4px;
    display: block;
    font-size: 16px;
    font-weight: 500;
  }

  .active a {
    background: #ebf4ff;
  }

  .showNavMobile {
    display: block;
  }

  .social {
    display: none;
  }

  @media (min-width: 890px) {
    .container {
      height: 90px;
    }

    .hamburger {
      display: none;
    }

    .branding {
      justify-content: flex-start;
      padding: 0 0 0 20px;
      width: 250px;
      height: 100px;
      margin-left: 0px;
    }

    .branding img {
      width: 70px;
      margin: 0 10px 0 0;
    }

    .branding h1 {
      font-size: 19px;
      line-height: 22px;
    }

    .branding h2 {
      font-size: 16px;
    }

    ul {
      top: 90px;
      display: block;
      width: 250px;
      border-right: 1px solid rgba(0, 0, 0, 0.12);
    }

    .social {
      position: absolute;
      top: 25px;
      right: 20px;
      display: block;
    }

    .social a {
      width: 40px;
      display: block;
      padding: 0;
    }
  }
</style>

<div class="container">
  {#if !showNavMobile}
    <img
      class="hamburger"
      src="/menu-icon.svg"
      alt="menu icon"
      on:click={toggleNav} />
  {:else}
    <img
      class="hamburger"
      src="/close-icon.svg"
      alt="close icon"
      on:click={toggleNav} />
  {/if}

  <a href="/#" class="branding">
    <img src="/sveltekit-logo.svg" alt="Sveltekit Logo" />
    <div>
      <h1>Sveltekit</h1>
      <h2>UI library</h2>
    </div>
  </a>

  <div class="social">
    <a href="https://github.com/sveltekit/ui" target="_blank">
      <img src="/github-logo.svg" alt="GitHub logo" />
    </a>
  </div>

  <ul class:showNavMobile on:click={toggleNav}>
    <li class={$activeComponent ? '' : 'active'}>
      <a href="/#">Home</a>
    </li>
    {#each Object.keys($components) as key, item}
      <li class={key === $activeComponent ? 'active' : ''}>
        <a href="#{key}">
          {$components[key].name.replace(/([a-z])([A-Z])/g, '$1 $2')}
        </a>
      </li>
    {/each}
  </ul>
</div>
