import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe("calculator", () => {
  it("should initialise with a calculated value of 0", () => {
    const calculator = new Calculator();
    expect(calculator.value).to.equal(0);
  });

  it("should return a result of 5 when performing an addition of 5 immediately after creation", () => {
    const calculator = new Calculator();
    expect(calculator.add(5)).to.equal(5);
  });
});
