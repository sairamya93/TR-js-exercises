import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("throws an error when no input given", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("Input array is required");
  });

  test("throws an error when input is not array", () => {
    expect(() => {
      sumMultiples("10");
    }).toThrow("Input should be an array");
  });
  test("returns the sum of the numbers that are multiples of 3 or 5 ", () => {
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
  });

  test("returns 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([2, 4, 8, 7])).toBe(0);
  });

  test("returns the sum if there are only multiples of 3", () => {
    expect(sumMultiples([9, 21, 22, 23, 28])).toBe(30);
  });

  test("returns the sum if there are only multiples of 5", () => {
    expect(sumMultiples([65, 2, 4, 7, 5])).toBe(70);
  });

  test("checking if it returns the sum for decimal multiples of 3 or 5 ", () => {
    expect(sumMultiples([1.5, 9.3, 5.0, 4.5, 25.0, 24])).toBe(54);
    expect(sumMultiples([0.9])).toBe(0);
  });
  test("checking if it returns the sum for negative multiples of 3 or 5 ", () => {
    expect(sumMultiples([-9, -5, -6, -11, -8, 50])).toBe(30);
    expect(sumMultiples([-10])).toBe(-10);
  });
});

describe("isValidDNA", () => {
  test("throws an error when no input given", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });
  test("throws an error when input is not string", () => {
    expect(() => {
      isValidDNA(123);
    }).toThrow("Input should be a string");
  });
  test("returns true for a valid DNA string either uppercase or lowercase", () => {
    expect(isValidDNA("GGGCCTTAAA")).toBe(true);
    expect(isValidDNA("ACG")).toBe(true);
    expect(isValidDNA("cgtaaaaa")).toBe(true);
  });

  test("returns false for a string with other alphabets", () => {
    expect(isValidDNA("YRQWUI")).toBe(false);
    expect(isValidDNA("GHJyur")).toBe(false);
  });
  test("returns false for a string with valid characters with numbers and special characters", () => {
    expect(isValidDNA("1234CGTAngd")).toBe(false);
    expect(isValidDNA("CGta&$345")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("throws an error when no input given", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });

  test("throws an error when input is not string", () => {
    expect(() => {
      getComplementaryDNA(22);
    }).toThrow("Input should be a string");
  });

  test("returns the correct complementary DNA string", () => {
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("GGGG")).toBe("CCCC");
    expect(getComplementaryDNA("cgtaaa")).toBe("GCATTT");
  });

  test("returns a string mentioning to input only DNA characters when given invalid characters", () => {
    expect(getComplementaryDNA("CGTEQA")).toBe(
      "Input string should contain only DNA characters A,C,T,G"
    );
    expect(getComplementaryDNA("wq")).toBe(
      "Input string should contain only DNA characters A,C,T,G"
    );
  });
});

describe("isItPrime", () => {
  test("throws an error when no input given", () => {
    expect(() => {
      isItPrime();
    }).toThrow("Number is required");
  });

  test("throws an error when input is not integer", () => {
    expect(() => {
      isItPrime("22");
    }).toThrow("Input should be a number");
  });
  test("throws an error when input is a negative number", () => {
    expect(() => {
      isItPrime(-5);
    }).toThrow("Input should be a positive number");
  });

  test("throws an error when input is a decimal number", () => {
    expect(() => {
      isItPrime(6.3);
    }).toThrow("Input should be a integer");
  });
  test("returns true when the number is prime", () => {
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(19)).toBe(true);
  });
  test("returns false when the number is not prime", () => {
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(4)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("throws an error when no number is given", () => {
    expect(() => {
      createMatrix();
    }).toThrow("n is required");
  });

  test("throws an error when no fill is given", () => {
    expect(() => {
      createMatrix(3);
    }).toThrow("fill is required");
  });

  test("throws an error when no is a decimal number", () => {
    expect(() => {
      createMatrix(3.2, "foo");
    }).toThrow("Input should be a integer");
  });

  test("returns the correct matrix for a string fill", () => {
    expect(createMatrix(3, "hi")).toEqual([
      ["hi", "hi", "hi"],
      ["hi", "hi", "hi"],
      ["hi", "hi", "hi"],
    ]);
  });

  test("returns the correct matrix for a number fill", () => {
    expect(createMatrix(4, 4)).toEqual([
      [4, 4, 4, 4],
      [4, 4, 4, 4],
      [4, 4, 4, 4],
      [4, 4, 4, 4],
    ]);
  });

  test("returns null matrix for a 0 number", () => {
    expect(createMatrix(0, "hi")).toEqual([]);
  });

  test("returns null matrix for a negative number", () => {
    expect(createMatrix(-3, 2)).toEqual([]);
  });
});

describe("areWeCovered", () => {
  test("throws an error when no array is given", () => {
    expect(() => {
      areWeCovered();
    }).toThrow("staff is required");
  });

  test("throws an error when no day is given", () => {
    expect(() => {
      areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Julie", rota: ["Friday", "Sunday", "Saturday", "Wednesday"] },
        {
          name: "Tim",
          rota: ["Friday", "Monday", "Tuesday", "Wednesday", "Sunday"],
        },
      ]);
    }).toThrow("day is required");
  });

  test("returns true when the given day has minimum 3 staff", () => {
    expect(
      areWeCovered(
        [
          { name: "Sam", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Peter",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Julie",
            rota: ["Friday", "Sunday", "Saturday", "Wednesday"],
          },
          {
            name: "Tim",
            rota: ["Friday", "Monday", "Tuesday", "Wednesday", "Sunday"],
          },
        ],
        "Sunday"
      )
    ).toBe(true);
  });

  test("returns false when the given day has less than 3 staff ", () => {
    expect(
      areWeCovered(
        [
          { name: "Sam", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Peter",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
        ],
        "saturday"
      )
    ).toBe(false);
  });

  test("returns true when the given day has 4 staff ", () => {
    expect(
      areWeCovered(
        [
          { name: "Sam", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Peter",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Julie",
            rota: ["Friday", "Sunday", "Saturday", "Wednesday", "Tuesday"],
          },
          {
            name: "Tim",
            rota: ["Friday", "Monday", "Tuesday", "Wednesday", "Sunday"],
          },
        ],
        "tuesday"
      )
    ).toBe(true);
  });
});
