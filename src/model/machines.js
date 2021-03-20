const utils = require("./utils");
const product_type = {
  COFFEE_MACHINE_LARGE: "COFFEE_MACHINE_LARGE",
  COFFEE_MACHINE_SMALL: "COFFEE_MACHINE_SMALL",
  ESPRESSO_MACHINE: "ESPRESSO_MACHINE",
};
const model = {
  base_model: "base_model",
  premium_model: "premium_model",
  deluxe_model: "deluxe_model",
};
const water_line_compatible = true;
let data = [
  {
    SKU: "CM001",
    product_type: product_type.COFFEE_MACHINE_SMALL,
    model: model.base_model,
  },
  {
    SKU: "CM002",
    product_type: product_type.COFFEE_MACHINE_SMALL,
    model: model.premium_model,
  },
  {
    SKU: "CM003",
    product_type: product_type.COFFEE_MACHINE_SMALL,
    model: model.deluxe_model,
    water_line_compatible: true,
  },
  {
    SKU: "CM101",
    product_type: product_type.COFFEE_MACHINE_LARGE,
    model: model.base_model,
  },
  {
    SKU: "CM102",
    product_type: product_type.COFFEE_MACHINE_LARGE,
    model: model.premium_model,
    water_line_compatible: true,
  },
  {
    SKU: "CM103",
    product_type: product_type.COFFEE_MACHINE_LARGE,
    model: model.deluxe_model,
    water_line_compatible: true,
  },
  {
    SKU: "EM001",
    product_type: product_type.ESPRESSO_MACHINE,
    model: model.base_model,
  },

  {
    SKU: "EM002",
    product_type: product_type.ESPRESSO_MACHINE,
    model: model.premium_model,
  },

  {
    SKU: "EM003",
    product_type: product_type.ESPRESSO_MACHINE,
    model: model.deluxe_model,
    water_line_compatible: true,
  },
];
getData = (filter) => {
  return utils.getData(data, filter);
};
module.exports = {
  getMachines: getData,
  product_type: product_type,
  model: model,
  water_line_compatible: water_line_compatible,
};
