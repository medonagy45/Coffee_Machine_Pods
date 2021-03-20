const pods = require("../model/pods");
function index(req, res) {
  let SKU = pods.getPods(req.query);
  res.status(200).json({ pods: SKU });
}
module.exports = {
  index,
};
