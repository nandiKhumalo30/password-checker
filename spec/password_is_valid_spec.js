const { passwordIsValid } = require("../src/password_checker");

describe("password", function () {
  it("should exist", function () {
    expect(function () {
      passwordIsValid("");
    }).toThrow(new Error("password should exist"));
  });

  it("should be longer than 8 characters", function () {
    expect(function () {
      passwordIsValid("Nandi23!");
    }).toThrow(new Error("password should be longer than 8 characters"));
  });

  it("should have atleast one lowercase letter ", function () {
    expect(function () {
      passwordIsValid("NANDIKHUMALO30!");
    }).toThrow(new Error("password should have atleast one lowercase letter"));
  });

  it("should have atleast one uppercase letter ", function () {
    expect(function () {
      passwordIsValid("nandikhumalo30!");
    }).toThrow(new Error("password should have atleast one uppercase letter"));
  });

  it("should have atleast one digit", function () {
    expect(function () {
      passwordIsValid("NandikHumalo!");
    }).toThrow(new Error("password should have atleast one digit"));
  });

  it("should have atleast one special character", function () {
    expect(function () {
      passwordIsValid("NandiKhumalo30");
    }).toThrow(new Error("password should have atleast one special character"));
  });
});
