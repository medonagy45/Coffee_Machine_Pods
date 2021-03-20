var expect = require("chai").expect;
var request = require("request");
const {
  model,
  product_type,
  water_line_compatible,
} = require("../src/model/machines");

describe("Testing Pods", function () {
  var url = "http://localhost:3000/machines/";
  it("All large machines", function (done) {
    var propertiesObject = { product_type: product_type.COFFEE_MACHINE_LARGE };
    request(
      { url: url, qs: propertiesObject },
      function (error, response, body) {
        let items = JSON.parse(body);

        expect(response.statusCode).to.equal(200);
        console.log(items.machines);
        expect(items.machines).to.deep.equal(["CM101", "CM102", "CM103"]);
        done();
      }
    );
  });
  it("All ESPRESSO machines", function (done) {
    var propertiesObject = { product_type: product_type.ESPRESSO_MACHINE };
    request(
      { url: url, qs: propertiesObject },
      function (error, response, body) {
        let items = JSON.parse(body);

        expect(response.statusCode).to.equal(200);
        console.log(items.machines);
        expect(items.machines).to.deep.equal(["EM001", "EM002", "EM003"]);
        done();
      }
    );
  });
  it("All water_line_compatible machines", function (done) {
    var propertiesObject = { water_line_compatible: water_line_compatible };
    request(
      { url: url, qs: propertiesObject },
      function (error, response, body) {
        let items = JSON.parse(body);

        expect(response.statusCode).to.equal(200);
        console.log(items.machines);
        expect(items.machines).to.deep.equal([
          "CM003",
          "CM102",
          "CM103",
          "EM003",
        ]);
        done();
      }
    );
  });
});
