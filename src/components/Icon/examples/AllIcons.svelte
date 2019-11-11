<script>
  import Icon from '@sveltekit/ui/Icon';
  import Card from '@sveltekit/ui/Card';
  import * as All from '../_iconData';
</script>

<style>
  .container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .option {
    flex-grow: 1;
    text-align: center;
    margin: 0 20px 20px 0;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .icon {
    padding: 20px;
    height: 100px;
    width: 100%;
    margin: 0 0 20px;
  }

  .icon p {
    margin: 0;

  }

  @media (min-width: 890px) {
    .option {
      flex-grow: 0;
      width: 150px;
    }
  }
</style>

<div class="container">
  {#each Object.keys(All) as iconKey}
    <div class="option">
      <Card>
        <div class="icon">
          <Icon iconData={All[iconKey]} />
          <p>{iconKey}</p>
        </div>
      </Card>
    </div>
  {/each}
</div>
