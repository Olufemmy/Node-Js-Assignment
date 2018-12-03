const request = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("Blog test", function() {
  it("Should output numbers correctely", function(done) {
    assert.equal(1 + 1, 2);
    done();
  });
  it("should add two strings correctly", function(done) {
    assert.equal("dayo" + "femi", "dayofemi");
    done();
  });
  it("should create a post", function(done) {
    let blog = {
      title: "class awesome",
      author: "temi",
      content: "pay attention to details"
    };
    request(app)
      .post("/blog/create")
      .send(blog)
      .set("Accept", "application/json")
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        assert.equal(res.body.ops[0]._id.length, 24);
        done();
      });
  });
});