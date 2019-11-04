import { test } from "tape-modern";
import { wait, simulateClick } from "helpers";

import Notification from "./Notification.svelte";
import notification from "./notification";
import options from "./options";

const componentName = Notification.name;
let title = 'Test title';
let text = 'Test text';
let isTimedAction = false;

test(`${componentName}: opens correctly`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      isTimedAction,
      actions: {}
    })
    .then(() => {})
    .catch(() => {})
    .finally(() => {
      key = null;
    });

    t.ok(document.querySelector('.notification'));

    notification.cancel(key);
});

test(`${componentName}: closes correctly`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      isTimedAction,
      actions: {}
    })
    .then(() => {
    })
    .catch(() => {
    })
    .finally(() => {
      key = null;      
    });

    t.ok(document.querySelector('.notification'));

    notification.cancel(key);

    await wait(800);

    t.ok(!document.querySelector('.notification'));
});

test(`${componentName}: isClosable shows close button and closes correctly when clicked`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      isTimedAction,
      isClosable: true,
    })
    .then(() => {
    })
    .catch(() => {
    })
    .finally(() => {
      key = null;    
    });

    t.ok(document.querySelector('.closer'));
    await wait(0);
    document.querySelector('.closer button').click();
    await wait(0);
    t.ok(key === null);
});

test(`${componentName}: isDark sets dark theme`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      isTimedAction,
      isDark: true,
    })
    .then(() => {
    })
    .catch(() => {
    })
    .finally(() => {
      key = null;    
    });

    t.ok(document.querySelector('.isDark'));
});

test(`${componentName}: isLoading displays loading indicator`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      isLoading: true,
      isTimedAction
    })
    .then(() => {
    })
    .catch(() => {
    })
    .finally(() => {
      key = null;    
    });

    t.ok(document.querySelector('.isLoading'));

    notification.cancel(key);
});

test(`${componentName}: if isTimedAction isTimedAction.cancel fires after time and removeDelay sets remove delay time`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      removeDelay: 0,
      isTimedAction: true,
    })
    .then(() => {
    })
    .catch(() => {
    })
    .finally(() => {
      key = null;
    });

    await wait(700);
    t.ok(key === null);
});

test(`${componentName}: button added for each action method in actions prop`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      actions: {
        foo: () => {},
        bar: () => {},
      },
    })

    t.ok(document.querySelectorAll('.actions button').length === 2);
    await wait(0);
    notification.cancel(key);
});

test(`${componentName}: title and text props display on notification`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      isTimedAction: true
    })

    t.ok(document.querySelector('.title').innerHTML === title);
    t.ok(document.querySelector('.text').innerHTML === text);
    notification.cancel(key);
});

test(`${componentName}: placement prop correctly positions notification`, async t => {
  let key = notification.generateKey();

  notification
    .open({
      title,
      text,
      key,
      placement: options.placement.TOP_LEFT
    })

    t.ok(document.querySelector('.placement-topLeft'));
    notification.cancel(key);
});
