<script>
  import { onMount } from 'svelte';
  import Avatar, { options } from 'sveltekit/Avatar';
  import Tooltip from 'sveltekit/Tooltip';

  import CodeBlock from './CodeBlock.svelte';
  import ThemingSample from './ThemingSample.svelte';

  let source = undefined;
  let theming = undefined;

  onMount(async () => {
    source = await require(`!!raw-loader!./GettingStarted.svelte`).default;
    theming = await require(`!!raw-loader!./ThemingSample.svelte`).default;
  });
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

  code {
    background: #1e1e1e;
    padding: 20px;
    border-radius: 5px;
    color: #fff;
    margin: 0 0 20px;
    width: 300px;
    display: block;
  }

  .header {
    padding: 40px 0;
  }

  h1 {
    font-size: 25px;
    font-weight: 500;
    line-height: 35px;
    margin: 0 0 20px;
  }

  .builtBy {
    list-style: none;
    margin: 0 0 40px 0;
    display: flex;
    padding: 0;
  }

  .builtBy li {
    margin: 0 10px 0 0;
  }

  .content {
    margin: 0 0 40px;
  }

  .source {
    background: #1e1e1e;
    white-space: pre;
    padding: 20px;
    color: #fff;
    border-radius: 5px;
    line-height: 22px;
    overflow-x: auto;
    margin: 0 0 10px;
  }

  @media (min-width: 890px) {
    h1 {
      font-size: 40px;
      line-height: 55px;
      margin: 0 0 30px;
    }
  }
</style>

<div class="container">
  <div class="header">
    <h1>Powerful, reliable &amp; fully featured Svelte UI library</h1>
  </div>

  <div class="content">
    <h2>Getting started</h2>

    <code>$ npm i sveltekit</code>

    <p>Import a component and it's options (if needed)</p>

    {#if source}
      <div class="source">
        <CodeBlock code={source} />
      </div>
    {/if}

    <p>
      Navigate the site to see full examples, demos, code samples, api and event
      details for each component.
    </p>
  </div>

  <div class="content">
    <h2>Theming</h2>

    <p>
      We're rolling out CSS variables for each component, they allow you to
      override the default theme. If a CSS variable you need is missing feel
      free to help out and raise a PR.
    </p>

    {#if theming}
      <div class="source">
        <CodeBlock code={theming} />
      </div>
    {/if}

    <ThemingSample />
  </div>

  <div class="content">
    <h2>About Sveltekit</h2>
    <p>
      Started in 2018, Sveltekit has been used in multiple enterprise
      applications. The project was open-sourced in November 2019.
    </p>
    <p>It's still actively worked on, it's main contributors are:</p>
    <ul class="builtBy">
      <li>
        <a href="https://github.com/heardy" target="_blank">
          <Tooltip title="heardy">
            <Avatar
              alt="KH"
              size={options.size.MEDIUM}
              src="https://avatars3.githubusercontent.com/u/678392?s=460&v=4" />
          </Tooltip>
        </a>

      </li>
      <li>
        <a href="https://github.com/rob-balfre" target="_blank">
          <Tooltip title="rob-balfre">
            <Avatar
              alt="RB"
              size={options.size.MEDIUM}
              src="https://avatars1.githubusercontent.com/u/2623102?s=460&v=4" />
          </Tooltip>
        </a>
      </li>
      <li>
        <a href="https://github.com/subpx" target="_blank">
          <Tooltip title="subpx">
            <Avatar
              alt="TH"
              size={options.size.MEDIUM}
              src="https://avatars0.githubusercontent.com/u/10818227?s=460&v=4" />
          </Tooltip>
        </a>
      </li>
      <li>
        <a href="https://github.com/gokhantank" target="_blank">
          <Tooltip title="gokhantank">
            <Avatar
              alt="GK"
              size={options.size.MEDIUM}
              src="https://avatars3.githubusercontent.com/u/957766?s=460&v=4" />
          </Tooltip>
        </a>
      </li>
    </ul>
  </div>
</div>
