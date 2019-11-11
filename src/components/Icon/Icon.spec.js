import { test } from 'tape-modern';

import Icon from './Icon.svelte';
import {HEART} from '../Icon/_iconData';

const testTarget = document.getElementById('testTemplate');
const componentName = Icon.name;

test(`${componentName}: renders correctly`, async (t) => {
  const icon = new Icon({
    target: testTarget,
    props: {
      iconData: HEART
    }
  });


  t.ok(testTarget.querySelector('path').getAttribute('d').trim() === HEART.data);

  icon.$destroy();
});
