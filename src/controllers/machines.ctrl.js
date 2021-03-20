const machines = require("../model/machines");
function index(req, res) {
  let SKU = machines.getMachines(req.query);
  res.status(200).json({ machines: SKU });
}

module.exports = {
  index,
};
