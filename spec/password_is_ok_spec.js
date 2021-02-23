const { passwordIsOk } = require("../src/password_checker.js");

describe("password", function () {
  it("should exist", function (){
    expect(passwordIsOk("12345b789")).toBeTrue()
    expect(passwordIsOk()).toBeFalse()
    expect(passwordIsOk("")).toBeFalse() 
  })
  it("should be longer than 8 characters", function () {
    expect(passwordIsOk("Na3tryeuhgf")).toBeTrue();
    expect(passwordIsOk("pap")).toBeFalse()
  })
  it("should meet any other 2 condition", function () {
    expect(passwordIsOk("Na3tryeuhgf")).toBeTrue();
    expect(passwordIsOk("papaaaaaaaa")).toBeFalse()
  })
  
  
});
