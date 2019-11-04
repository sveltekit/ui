<script>
  import randomColor from 'randomcolor';

  import Icon from 'sveltekit/Icon';
  import Card from 'sveltekit/Card';
  import Button from 'sveltekit/Button';
  
  import {HEART} from '../../Icon/_iconData';

  let color = 'red';

  function handleColour() {
    color = randomColor();
  }
</script>

<style>
  .container {
    width: 140px;
    height: 140px;
    padding: 20px;
    transition: all .3s;
    margin: 0 0 20px;
  }

  .pulse {
    animation: beat .25s infinite alternate;
    transform-origin: center;
  }

  @keyframes beat {
    to {
      transform: scale(1.2);
    }
  }

  .colourButton {
    padding: 20px 0 0;
  }
</style>

<div class="container pulse" style="color:{color};">
  <Icon iconData="{HEART}"></Icon>
</div>

<div class="colourButton">
  <Button on:click="{handleColour}">Change colour</Button>
</div>
