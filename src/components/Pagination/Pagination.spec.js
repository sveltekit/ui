import { test } from 'tape-modern';
import { wait } from 'helpers';
import Pagination from './Pagination.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Pagination.name;

const total = 100;
const pageSize = 10;
const current = 1;

test(`${componentName}: displays correct summary`, async (t) => {
  const pagination = new Pagination({
    target: testTarget,
    props: {
      current,
      pageSize,
      total
    }
  });

  const summaryLabel = testTarget.querySelector('.summary').textContent;
  t.equal(summaryLabel, `1 - 10 of 100`);
  
  pagination.$destroy();
});

test(`${componentName}: summary updates on page navigation`, async (t) => {
  const pagination = new Pagination({
    target: testTarget,
    props: {
      current,
      pageSize,
      total
    }
  });

  const nextButton = testTarget.querySelector('.navigation .arrow:nth-child(2) button');
  nextButton.click();

  await wait(0);

  const summaryLabel = testTarget.querySelector('.summary').textContent;
  t.equal(summaryLabel, '11 - 20 of 100');

  pagination.$destroy();
});

test(`${componentName}: next button is disabled on last page`, async (t) => {
  const pagination = new Pagination({
    target: testTarget,
    props: {
      current,
      pageSize,
      total
    }
  });

  pagination.$set({current: 10});

  await wait(0);

  const nextButton = testTarget.querySelector('.navigation .arrow:nth-child(2) button');
  t.ok(nextButton.disabled === true);
  
  pagination.$destroy();
});

test(`${componentName}: does not display summary`, async (t) => {
  const pagination = new Pagination({
    target: testTarget,
    props: {
      current,
      pageSize,
      total,
      showSummary: false
    }
  });

  t.ok(testTarget.querySelector('.summary') === null);
  
  pagination.$destroy();
});

test(`${componentName}: does not display pages`, async (t) => {
  const pagination = new Pagination({
    target: testTarget,
    props: {
      current,
      pageSize,
      total,
      showPages: false
    }
  });

  t.ok(testTarget.querySelector('.pages') === null);
  
  pagination.$destroy();
});

test(`${componentName}: does not display navigation`, async (t) => {
  const pagination = new Pagination({
    target: testTarget,
    props: {
      current,
      pageSize,
      total,
      canNavigate: false
    }
  });

  t.ok(testTarget.querySelector('.navigation') === null);
  
  pagination.$destroy();
});

test(`${componentName}: button type is updated`, async (t) => {
  const pagination = new Pagination({
    target: testTarget,
    props: {
      current,
      pageSize,
      total,
      buttonType: 'primary'
    }
  });

  t.ok(testTarget.querySelector('.button').classList.contains('type-primary'), `buttons have class 'type-primary'`);
  
  pagination.$destroy();
});

test(`${componentName}: active page button is selected`, async (t) => {
  const pagination = new Pagination({
    target: testTarget,
    props: {
      current,
      pageSize,
      total,
      buttonType: 'primary'
    }
  });

  const page3Button = testTarget.querySelector('.pages .page:nth-child(3) button');
  page3Button.click();

  await wait(0);

  t.ok(page3Button.classList.contains('isSelected'));
  
  pagination.$destroy();
});
