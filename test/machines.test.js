var expect = require("chai").expect;
var chai = require("chai"),
  chaiHttp = require("chai-http");
const {
  model,
  product_type,
  water_line_compatible,
} = require("../src/model/machines");
var configuredApp = require("../app.config");

describe("Testing Pods", function () {
  chai.use(chaiHttp);
  var requester = chai.request(configuredApp).keepOpen();
  var url = "/machines/";
  it("All large machines", function (done) {
    var propertiesObject = { product_type: product_type.COFFEE_MACHINE_LARGE };
    requester
      .get(url)
      .query(propertiesObject)
      .send()
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.machines).to.deep.equal(["CM101", "CM102", "CM103"]);
        done();
      });
  });

  it("All ESPRESSO machines", function (done) {
    var propertiesObject = { product_type: product_type.ESPRESSO_MACHINE };
    requester
      .get(url)
      .query(propertiesObject)
      .send()
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.machines).to.deep.equal(["EM001", "EM002", "EM003"]);
        done();
      });
  });

  it("All water_line_compatible machines", function (done) {
    var propertiesObject = { water_line_compatible: water_line_compatible };
    requester
      .get(url)
      .query(propertiesObject)
      .send()
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.machines).to.deep.equal([
          "CM003",
          "CM102",
          "CM103",
          "EM003",
        ]);
        requester.close();
        done();
      });
  });
});
