export const groupUtils = (data, selected) => {
  let selectedGroup = selected.charAt(0) - 1;
  const shallowArry = JSON.parse(JSON.stringify(data))
  shallowArry[selectedGroup].forEach(curr => {
    console.log(curr, 'curr')
    if (curr.id !== selected) {
      curr.disabled = true;
    } else {
      if (selectedGroup < shallowArry.length - 1) {
        shallowArry[selectedGroup + 1].forEach(next => {
          if (!curr.rule.includes(parseInt(next.id))) {
            next.disabled = false;
          }
        });
      }
    }
  });
  return shallowArry;
}
