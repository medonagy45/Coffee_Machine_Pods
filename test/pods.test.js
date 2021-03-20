const expect = require("chai").expect;
const e = require("express");
const request = require("request");
const { coffee_flavor, pack_size, product_type } = require("../src/model/pods");

describe("Testing Pods", function () {
  var url = "http://localhost:3000/pods/";
  it("All large pods", function (done) {
    var propertiesObject = { product_type: product_type.COFFEE_POD_LARGE };
    request(
      { url: url, qs: propertiesObject },
      function (error, response, body) {
        let items = JSON.parse(body);

        expect(response.statusCode).to.equal(200);
        console.log(items.pods);
        expect(items.pods).to.deep.equal([
          "CP101",
          "CP103",
          "CP111",
          "CP113",
          "CP121",
          "CP123",
          "CP131",
          "CP133",
          "CP141",
          "CP143",
        ]);
        done();
      }
    );
  });
  it("All espresso vanilla pods", function (done) {
    var propertiesObject = {
      coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
      product_type: product_type.ESPRESSO_POD,
    };
    request(
      { url: url, qs: propertiesObject },
      function (error, response, body) {
        let items = JSON.parse(body);

        expect(response.statusCode).to.equal(200);
        console.log(items.pods);
        expect(items.pods).to.deep.equal(["EP003", "EP005", "EP007"]);
        done();
      }
    );
  });
  it("All small pods", function (done) {
    var propertiesObject = {
      product_type: product_type.COFFEE_POD_SMALL,
    };
    request(
      { url: url, qs: propertiesObject },
      function (error, response, body) {
        let items = JSON.parse(body);

        expect(response.statusCode).to.equal(200);
        console.log(items.pods);
        expect(items.pods).to.deep.equal([
          "CP001",
          "CP003",
          "CP011",
          "CP013",
          "CP021",
          "CP023",
          "CP031",
          "CP033",
          "CP041",
          "CP043",
        ]);
        done();
      }
    );
  });
  it("All 7 pods", function (done) {
    var propertiesObject = {
      pack_size: pack_size.seven_dozen,
    };
    request(
      { url: url, qs: propertiesObject },
      function (error, response, body) {
        let items = JSON.parse(body);

        expect(response.statusCode).to.equal(200);
        console.log(items.pods);
        expect(items.pods).to.deep.equal(["EP007", "EP017"]);
        done();
      }
    );
  });
});
