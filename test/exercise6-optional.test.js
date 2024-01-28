import { sumDigits } from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("throws an error when no input given", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("returns the sum of the numbers ", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(5)).toBe(5);
  });
});
