export const radioUtils = (menus, rules) => {
  let data = [];
  for (let i = 0; i < menus.length; i++) {
    data.push([]);
    if (i === 0) {
      menus[i].forEach(o =>
        data[i].push({
          id: o.id,
          disabled: false,
          rule: rules[o.id] || []
        })
      );
    } else {
      menus[i].forEach(o =>
        data[i].push({
          id: o.id,
          disabled: true,
          rule: rules[o.id] || []
        })
      );
    }
  }
  return data;
}