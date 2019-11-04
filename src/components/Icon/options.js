import { ALL } from './_iconData';

const icons = {}; 

Object.keys(ALL).forEach(key => {
  icons[key] = key;
});

export default { 
  icons
};
