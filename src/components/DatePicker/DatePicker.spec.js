import { test } from 'tape-modern';
import dayjs from 'dayjs';
import { wait, simulateClick } from 'helpers';

import DatePicker from './DatePicker.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = DatePicker.name;

test(`${componentName}: renders correctly`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget
  });

  await wait(0);

  t.ok(testTarget.querySelector('.datePicker'));

  datePicker.$destroy();
});

test(`${componentName}: prop 'hasIcon' show/hides calendar icon`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      hasIcon: true
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.datePicker .icon'));

  datePicker.$destroy();
});

test(`${componentName}: prop 'hasIcon' show/hides calendar icon`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      hasIcon: true
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.datePicker .icon'));

  datePicker.$destroy();
});

test(`${componentName}: prop 'canNavigate' show/hides calendar inline controls`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      canNavigate: true
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.navigation_prev'));
  t.ok(testTarget.querySelector('.navigation_next'));

  datePicker.$destroy();
});

test(`${componentName}: prop 'isInline' show calendar inline (in situ)`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      isInline: true
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.isInline'));
  t.ok(testTarget.querySelector('.flatpickr-calendar'));

  datePicker.$destroy();
});

test(`${componentName}: prop 'date' controls calendar date`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      date: '11/03/2020'
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.userInput').value === '11/03/2020');

  datePicker.$destroy();
});

test(`${componentName}: prop 'minDate' sets calendar minimun date`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      isInline: true,
      date: '7/9/2019',
      minDate: '7/9/2019'
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.flatpickr-day.disabled').getAttribute('aria-label') === 'September 1, 2019');

  datePicker.$destroy();
});

test(`${componentName}: prop 'maxDate' sets calendar maximun date`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      date: '1/9/2019',
      maxDate: '7/9/2019',
    }
  });

  await wait(0);

  testTarget.querySelector('.flatpickr-input.form-control.input').focus();
  const days = document.querySelector('.dayContainer');
  t.ok(days.querySelector('.flatpickr-day:nth-child(7)').getAttribute('aria-label') === 'September 7, 2019');

  datePicker.$destroy();
});

test(`${componentName}: prop 'placeholder' sets input placeholder text`, async (t) => {
  let placeholder = 'Handy little placeholder';

  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      placeholder
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.userInput').getAttribute('placeholder') === placeholder);

  datePicker.$destroy();
});

test(`${componentName}: prop 'altFormat' sets alternative date format on input field`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      date: '01/01/2021',
      altFormat: 'Z',
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.userInput.form-control').value === '2020-12-31T13:00:00.000Z');

  datePicker.$destroy();
});

test(`${componentName}: prop 'dateFormat' sets alternative date format`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      date: '2020-12-31T13:00:00.000Z',
      dateFormat: 'Z',
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.userInput.form-control').value === 'January 1, 2021');

  datePicker.$destroy();
});

test(`${componentName}: prop 'isRange' and 'toDate' activate date range options`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      isRange: true,
      date: '1/1/2021',
      toDate: '2/1/2021'
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.userInput.form-control').value === `January 1, 2021  -  January 2, 2021`);

  datePicker.$destroy();
});

test(`${componentName}: prop 'hasDropdown' controls if calendar appears on focus`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      hasDropdown: false,
    }
  });

  await wait(0);

  testTarget.querySelector('.flatpickr-input.form-control.input').focus();
  t.ok(!document.querySelector('.flatpickr-calendar.open'));

  datePicker.$destroy();
});

test(`${componentName}: prop 'position' controls where calendar drop down appears`, async (t) => {
  testTarget.setAttribute("style", "margin-top: 500px;");

  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      position: 'above',
    }
  });

  await wait(0);

  testTarget.querySelector('.flatpickr-input.form-control.input').focus();

  await wait(0);

  t.ok(document.querySelector('.flatpickr-calendar.open').style['top'] === '189px');

  testTarget.setAttribute("style", "");
  datePicker.$destroy();
});

test(`${componentName}: prop 'defaultToday' sets todays date as selected value on init`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      defaultToday: true,
    }
  });

  await wait(0);

  const val = testTarget.querySelector('.flatpickr-input.form-control.input').value;
  const today = new dayjs().format('MMMM D, YYYY');

  t.ok(val === today);

  datePicker.$destroy();
});

test(`${componentName}: prop 'isDisabled' sets input as disabled`, async (t) => {
  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      isDisabled: true,
    }
  });

  await wait(0);

  t.ok(testTarget.querySelector('.flatpickr-input.form-control.input').disabled);

  datePicker.$destroy();
});


test(`${componentName}: when prop 'hasDropdown' is true and input blur event fires then input value reverts to prev date (must click enter to change date)`, async (t) => {
  const today = new dayjs().format('MMMM D, YYYY');

  const datePicker = new DatePicker({
    target: testTarget,
    props: {
      date: new Date,
      hasDropdown: false,
    }
  });

  await wait(0);

  testTarget.querySelector('.flatpickr-input.form-control.input').focus();
  testTarget.querySelector('.flatpickr-input.form-control.input').value = 'xxx';  
  testTarget.querySelector('.flatpickr-input.form-control.input').blur();

  t.ok(testTarget.querySelector('.flatpickr-input.form-control.input').value === today);

  datePicker.$destroy();
});

