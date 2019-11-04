import Notification from './Notification.svelte';

let active = [];

function open(options) {
  const target = document.createElement('div');
  const props = options;
  props.targetElem = target;

  const notification = new Notification({
    target,
    props
  });

  document.body.appendChild(target);

  const onRemove = notification.$on('remove', () => {
    onRemove();
    remove(notification);
  });

  const onDestroyListener = notification.$on('exit', () => {
    onDestroyListener();
    destroy(notification);
  });
  

  active.forEach((activeNotification) => {
    if (!activeNotification.isExiting) {
      activeNotification.remove();
    }
  });

  active = active.concat(notification);
  return notification.promise;
}

function complete(key, value) {
  const activeNotification = key && active.find((notification) => {
    return notification.key === key;
  });

  activeNotification && activeNotification.complete(value);
}

function cancel(key, value) {
  const activeNotification = key && active.find((notification) => {
    return notification.key === key;
  });

  activeNotification && activeNotification.cancel(value);
}

function destroy(notification) {
  const { targetElem } = notification;

  notification.$destroy();
  document.body.removeChild(targetElem);
}

function remove(notification) {
  active = active.filter((activeNotification) => {
    return activeNotification !== notification;
  });
}

function generateKey() {
  return `notification${Date.now()}`;
}

export default {
  open,
  complete,
  cancel,
  generateKey
}
