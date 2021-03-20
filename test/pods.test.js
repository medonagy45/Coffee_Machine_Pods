var { expect } = require("chai");
var chai = require("chai"),
  chaiHttp = require("chai-http");
var configuredApp = require("../app.config");
const { coffee_flavor, pack_size, product_type } = require("../src/model/pods");

describe("Testing Pods", function () {
  chai.use(chaiHttp);
  var requester = chai.request(configuredApp).keepOpen();
  var url = "/pods/";
  it("All large pods", function (done) {
    var propertiesObject = { product_type: product_type.COFFEE_POD_LARGE };
    requester
      .get(url)
      .query(propertiesObject)
      .send()
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.pods).to.deep.equal([
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
      });
  });
  it("All espresso vanilla pods", function (done) {
    var propertiesObject = {
      coffee_flavor: coffee_flavor.COFFEE_FLAVOR_VANILLA,
      product_type: product_type.ESPRESSO_POD,
    };
    requester
      .get(url)
      .query(propertiesObject)
      .send()
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        expect(res.body.pods).to.deep.equal(["EP003", "EP005", "EP007"]);
        done();
      });
  });
  it("All small pods", function (done) {
    var propertiesObject = {
      product_type: product_type.COFFEE_POD_SMALL,
    };
    requester
      .get(url)
      .query(propertiesObject)
      .send()
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        expect(res.body.pods).to.deep.equal([
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
      });
  });
  it("All 7 pods", function (done) {
    var propertiesObject = {
      pack_size: pack_size.seven_dozen,
    };
    requester
      .get(url)
      .query(propertiesObject)
      .send()
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        expect(res.body.pods).to.deep.equal(["EP007", "EP017"]);

        done();
      });
  });
  after(() => {
    requester.close();
  });
});
