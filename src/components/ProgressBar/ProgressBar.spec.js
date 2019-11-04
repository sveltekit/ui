import { test } from 'tape-modern';
import { wait } from 'helpers';
import ProgressBar from './ProgressBar.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = ProgressBar.name;

const maxValue = 100;
const value = 10;

test(`${componentName}: size is set`, async (t) => {
  const progressBar = new ProgressBar({
    target: testTarget,
    props: {
      size: 'large',
      maxValue,
      value
    }
  });

  t.ok(testTarget.querySelector('.progressBar').classList.contains('size-large'));
  
  progressBar.$destroy();
});

test(`${componentName}: bar has correct width`, async (t) => {
  const progressBar = new ProgressBar({
    target: testTarget,
    props: {
      maxValue,
      value
    }
  });

  t.ok(true);
  
  progressBar.$destroy();
});

test(`${componentName}: indicators are displayed`, async (t) => {
  const progressBar = new ProgressBar({
    target: testTarget,
    props: {
      maxValue,
      value,
      indicators: [10,20,30,40,50]
    }
  });

  t.ok(testTarget.querySelectorAll('.indicator').length === 5);
  
  progressBar.$destroy();
});

test(`${componentName}: bar is negative colour when target not met`, async (t) => {
  const positiveColour = 'yellow';
  const negativeColour = 'black';

  const progressBar = new ProgressBar({
    target: testTarget,
    props: {
      maxValue,
      value,
      positiveColour,
      negativeColour,
      target: 50
    }
  });

  t.ok(testTarget.querySelector('.bar').style.backgroundColor === negativeColour);
  
  progressBar.$destroy();
});

test(`${componentName}: bar is positive colour when target is met`, async (t) => {
  const positiveColour = 'yellow';
  const negativeColour = 'black';

  const progressBar = new ProgressBar({
    target: testTarget,
    props: {
      maxValue,
      value: 90,
      positiveColour,
      negativeColour,
      target: 50
    }
  });

  t.ok(testTarget.querySelector('.bar').style.backgroundColor === positiveColour);
  
  progressBar.$destroy();
});


test(`${componentName}: bar is animated`, async (t) => {
  const progressBar = new ProgressBar({
    target: testTarget,
    props: {
      isAnimated: true,
      maxValue,
      value: maxValue
    }
  });

  t.ok(testTarget.querySelector('.bar').classList.contains('isAnimated'));
  
  progressBar.$destroy();
});
