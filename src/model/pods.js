const product_type = {
  COFFEE_POD_LARGE: "COFFEE_POD_LARGE",
  COFFEE_POD_SMALL: "COFFEE_POD_SMALL",
  ESPRESSO_POD: "ESPRESSO_POD",
};
const coffee_flavor = {
  COFFEE_FLAVOR_VANILLA: "COFFEE_FLAVOR_VANILLA",
  COFFEE_FLAVOR_CARAMEL: "COFFEE_FLAVOR_CARAMEL",
  COFFEE_FLAVOR_PSL: "COFFEE_FLAVOR_PSL",
  COFFEE_FLAVOR_MOCHA: "COFFEE_FLAVOR_MOCHA",
  COFFEE_FLAVOR_HAZELNUT: "COFFEE_FLAVOR_HAZELNUT",
};
const pack_size = {
  one_dozen: "one_dozen",
  three_dozen: "three_dozen",
  five_dozen: "five_dozen",
  seven_dozen: "seven_dozen",
};
data = [
  {
    SKU: "CP001",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
  },
  {
    SKU: "CP003",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
  },
  {
    SKU: "CP011",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_CARAMEL,
  },
  {
    SKU: "CP013",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_CARAMEL,
  },
  {
    SKU: "CP021",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_PSL,
  },
  {
    SKU: "CP023",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_PSL,
  },
  {
    SKU: "CP031",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_MOCHA,
  },
  {
    SKU: "CP033",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_MOCHA,
  },
  {
    SKU: "CP041",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_HAZELNUT,
  },
  {
    SKU: "CP043",
    product_type: product_type.COFFEE_POD_SMALL,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_HAZELNUT,
  },
  {
    SKU: "CP101",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
  },
  {
    SKU: "CP103",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
  },
  {
    SKU: "CP111",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_CARAMEL,
  },
  {
    SKU: "CP113",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_CARAMEL,
  },
  {
    SKU: "CP121",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_PSL,
  },
  {
    SKU: "CP123",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_PSL,
  },
  {
    SKU: "CP131",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_MOCHA,
  },
  {
    SKU: "CP133",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_MOCHA,
  },
  {
    SKU: "CP141",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.one_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_HAZELNUT,
  },
  {
    SKU: "CP143",
    product_type: product_type.COFFEE_POD_LARGE,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_HAZELNUT,
  },
  {
    SKU: "EP003",
    product_type: product_type.ESPRESSO_POD,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
  },
  {
    SKU: "EP005",
    product_type: product_type.ESPRESSO_POD,
    pack_size: pack_size.five_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
  },
  {
    SKU: "EP007",
    product_type: product_type.ESPRESSO_POD,
    pack_size: pack_size.seven_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
  },
  {
    SKU: "EP013",
    product_type: product_type.ESPRESSO_POD,
    pack_size: pack_size.three_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_CARAMEL,
  },
  {
    SKU: "EP015",
    product_type: product_type.ESPRESSO_POD,
    pack_size: pack_size.five_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_CARAMEL,
  },
  {
    SKU: "EP017",
    product_type: product_type.ESPRESSO_POD,
    pack_size: pack_size.seven_dozen,
    coffee_flavor: coffee_flavor.COFFEE_FLAVOR_CARAMEL,
  },
];
getData = (filter) => {
  if (!filter) return Object.keys(data);
  let filteredData = [];
  for (let i = 0; i < data.length; i++) {
    let machine = data[i];
    let matched = true;
    for (key in filter) {
      if (machine[key] != filter[key]) {
        matched = false;
        break;
      }
    }
    if (matched) filteredData.push(machine.SKU);
  }
  return filteredData;
};
module.exports = {
  getPods: getData,
  product_type: product_type,
  coffee_flavor: coffee_flavor,
  pack_size: pack_size,
};
