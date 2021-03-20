module.exports.getData = (data, filter) => {
  if (!filter) return Object.keys(data);
  let filteredData = [];
  for (let i = 0; i < data.length; i++) {
    let machine = data[i];
    let matched = true;
    for (key in filter) {
      if (String(machine[key]) != filter[key]) {
        matched = false;
        break;
      }
    }
    if (matched) filteredData.push(machine.SKU);
  }
  return filteredData;
};
