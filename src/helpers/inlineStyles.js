const inlineStyles = (...args) => {
  const declarations = {};
  let styles = '';
  for (const item of args) {
    if (item && typeof item === 'object') {
      for (const [key, value] of Object.entries(item)) {
        const typeOfValue = typeof value;
        if (typeOfValue === 'string' || typeOfValue === 'number') {
          declarations[key] = value;
        }
      }
    }
  }

  for (const [key, value] of Object.entries(declarations)) {
    styles += `${key}:${value};`;
  }

  return styles;
};

export default inlineStyles;
