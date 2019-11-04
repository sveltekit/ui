import { test, done } from 'tape-modern';
import Alert from './Alert.svelte';
import Basic from './examples/Basic.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Alert.name;

test(`${componentName}: with no data creates default elements`, async (t) => {
  const avatar = new Alert({
    target: testTarget,
    props: {}
  });

  t.ok(testTarget.querySelector('.alert'));

  avatar.$destroy();
});


test(`${componentName}: should render slot content`, async (t) => {
  const avatar = new Basic({
    target: testTarget,
    props: {
      warning: 'He is on f 🔥 i 🔥 r 🔥 e 🔥 !',
      information: 'This is some information!!'
    }
  });
  
  t.equal(testTarget.querySelectorAll('.alert .content')[0].textContent, avatar.warning);
  t.equal(testTarget.querySelectorAll('.alert .content')[1].textContent, avatar.information);

  avatar.$destroy();
});
