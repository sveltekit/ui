import * as All from './_iconData';

const icons = {}; 

Object.keys(All).forEach(key => {
  icons[key] = key;
});

export default { 
  icons
};
