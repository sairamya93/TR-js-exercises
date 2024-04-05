import { sumDigits } from "../challenges/exercise6-optional";
import { createRange } from "../challenges/exercise6-optional";

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

describe("createRange", () => {
  test("throws an error when start or end value is not given", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");
  });

  test("returns the numbers array with the start and end value step value as 1", () => {
   //Arrange
    const start=1
    const end=5
    const step=1
   //Act
   const expectedResult=createRange(start,end,step)
   //Assert
    expect(expectedResult).toStrictEqual([1,2,3,4,5])
  })

  test("returns the numbers array with the start and end value, step value as 2", () => {
    //Arrange
     const start=5
     const end=19
     const step=2
    //Act
    const expectedResult=createRange(start,end,step)
    //Assert
     expect(expectedResult).toStrictEqual([5,7,9,11,13,15,17,19])
   })

   test("returns the numbers array with the start and end value, step value as default", () => {
    //Arrange
     const start=10
     const end=15
     
    //Act
    const expectedResult=createRange(start,end)
    //Assert
     expect(expectedResult).toStrictEqual([10,11,12,13,14,15])
   })
});
