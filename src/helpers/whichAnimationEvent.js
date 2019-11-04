export default function whichAnimationEvent(){
  const el = document.createElement('fakeelement');

  const animations = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  };

  for(const a in animations){
    if(el.style[a] !== undefined){
      return animations[a];
    }
  }
};
