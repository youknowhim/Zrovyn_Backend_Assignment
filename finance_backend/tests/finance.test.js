const request = require("supertest");
const app = require("../app");

let token = "";

describe("Finance API", () => {

  beforeAll(async () => {

    // create user FIRST
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test",
        email: `test@test${Date.now()}.com`,
        password: "123456",
        role: "admin"
      });

    // then login
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: `test@test${Date.now()}.com`,
        password: "123456"
      });

    console.log("LOGIN RESPONSE:", res.body);

    token = res.body.token;
  });

  it("should create a record", async () => {
    const res = await request(app)
      .post("/api/finance")
      .set("Authorization", `Bearer ${token}`)
      .send({
        amount: 1000,
        type: "income",
        category: "salary",
        note: "test",
        date: "2026-04-06"
      });

    expect(res.statusCode).toBe(200);
  });

  it("should get records", async () => {
    const res = await request(app)
      .get("/api/finance")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

});