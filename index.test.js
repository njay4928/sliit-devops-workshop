const request = require("supertest");
const app = require("./index");

describe("POST /add", () => {
  it("should add two numbers correctly", async () => {
    const res = await request(app).post("/add").send({ a: 5, b: 7 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(12);
  });

  it("should return 400 if inputs are not numbers", async () => {
    const res = await request(app).post("/add").send({ a: "foo", b: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Inputs must be numbers");
  });
});
