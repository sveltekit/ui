import { test } from 'tape-modern';
import Avatar from './Avatar.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Avatar.name;

test(`${componentName}: with no data creates default elements`, async (t) => {
  const avatar = new Avatar({
    target: testTarget,
    props: {}
  });

  t.ok(testTarget.querySelector('.avatar'));

  avatar.$destroy();
});

test(`${componentName}: prop 'alt' should render`, async (t) => {
  const avatar = new Avatar({
    target: testTarget,
    props: {
      alt: 'RB'
    }
  });

  t.ok(testTarget.querySelector('.avatar .alt').innerHTML === 'RB');

  avatar.$destroy();
});

test(`${componentName}: prop 'size' should change component's size`, async (t) => {
  const avatar = new Avatar({
    target: testTarget,
    props: {
      size: 'medium'
    }
  });

  t.ok(testTarget.querySelector('.avatar').offsetWidth === 64);

  avatar.$destroy();
});

test(`${componentName}: prop 'bgColour' should change component's background colour`, async (t) => {
  const avatar = new Avatar({
    target: testTarget,
    props: {
      bgColour: 'yellow'
    }
  });

  t.ok(testTarget.querySelector('.avatar').style['background-color'] === 'yellow');

  avatar.$destroy();
});


test(`${componentName}: prop 'textColour' should change component's text colour`, async (t) => {
  const avatar = new Avatar({
    target: testTarget,
    props: {
      alt: 'RB',
      textColour: 'yellow'
    }
  });

  t.ok(testTarget.querySelector('.avatar').style['color'] === 'yellow');

  avatar.$destroy();
});


test(`${componentName}: prop 'src' should change component's avatar image`, async (t) => {
  const avatar = new Avatar({
    target: testTarget,
    props: {
      alt: 'RB',
      src: '/avatar_example.gif'
    }
  });

  t.ok(testTarget.querySelector('.avatar').style['background-image'] === `url("/avatar_example.gif")`);

  avatar.$destroy();
});


test(`${componentName}: props 'Component' and 'componentProps' should override default component`, async (t) => {
  const childComponentAlt = 'xxx';

  const avatar = new Avatar({
    target: testTarget,
    props: {
      Component: Avatar,
      componentProps: {
        alt: childComponentAlt
      }
    }
  });

  t.ok(testTarget.querySelector('.avatar .avatar .alt').textContent === childComponentAlt);

  avatar.$destroy();
});
