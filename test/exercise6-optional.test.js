import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
} from "../challenges/exercise6-optional";

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
    const start = 1;
    const end = 5;
    const step = 1;
    //Act
    const expectedResult = createRange(start, end, step);
    //Assert
    expect(expectedResult).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("returns the numbers array with the start and end value, step value as 2", () => {
    //Arrange
    const start = 5;
    const end = 19;
    const step = 2;
    //Act
    const expectedResult = createRange(start, end, step);
    //Assert
    expect(expectedResult).toStrictEqual([5, 7, 9, 11, 13, 15, 17, 19]);
  });

  test("returns the numbers array with the start and end value, step value as default", () => {
    //Arrange
    const start = 10;
    const end = 15;

    //Act
    const expectedResult = createRange(start, end);
    //Assert
    expect(expectedResult).toStrictEqual([10, 11, 12, 13, 14, 15]);
  });
});

describe("getScreenTimeAlertList",() => {
  //Arrange
  const userScreenTimeUsage= [
     {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
                     { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                     { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                     { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                     { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                    ]
       },
       {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
                     { date: "2019-05-04", usage: { mapMyRun: 54, whatsApp: 36, facebook: 20, safari: 10} },
                     { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                     { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    ]
       },
     ]
  test("returns the users with screentime more than 100 minutes",() => {
   //Act
   const actualResult=getScreentimeAlertList(userScreenTimeUsage,"2019-05-04")   
   //Assert
   expect(actualResult).toEqual(['beth_1234','sam_j_1989'])
  }); 

  test("returns no users when there is no data for the given date",() => {
    //Act
    const actualResult=getScreentimeAlertList(userScreenTimeUsage,"2019-07-04")   
    //Assert
    expect(actualResult).toEqual([])
   });  

   test("returns no users when the usage is less than 100 for the given date",() => {
    //Act
    const actualResult=getScreentimeAlertList(userScreenTimeUsage,"2019-06-14")   
    //Assert
    expect(actualResult).toEqual([])
   });  
  
});
