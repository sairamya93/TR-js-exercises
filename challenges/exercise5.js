/* 
⚠️
⚠️ See exercise5.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("Input array is required");
  if (!Array.isArray(arr)) throw new Error("Input should be an array");

  //Using reduce to check if each number in the array is divisible by 3 or 5 and return the aggregated value to the function.
  return arr.reduce((sum, num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      return sum + num;
    } else {
      return sum;
    }
  }, 0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("Input should be a string");

  //Using regular expression to check and return true if the string contains only the characters C, G, T or A else false
  return /^[CGTA]+$/.test(str.toUpperCase());
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("Input should be a string");

  //Checking for every character in the array and adding the complementary character to an array and return the value in string format.
  const complementaryDNA = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i].toUpperCase()) {
      case "A":
        complementaryDNA.push("T");
        break;
      case "C":
        complementaryDNA.push("G");
        break;
      case "G":
        complementaryDNA.push("C");
        break;
      case "T":
        complementaryDNA.push("A");
        break;
      default:
        return "Input string should contain only DNA characters A,C,T,G";
    }
  }
  return complementaryDNA.join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("Number is required");
  if (typeof n !== "number") throw new Error("Input should be a number");
  if (n < 1) throw new Error("Input should be a positive number");
  if (!Number.isInteger(n)) throw new Error("Input should be a integer");

  //Checking if the no is divisible by every number from 2 to half the number
  for (let i = 2; i <= Math.round(n / 2); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (!Number.isInteger(n)) throw new Error("Input should be a integer");

  //Having a main array to track the number of arrays and sub array to fill the array with the given value
  const mainArray = [];
  let j = 0;
  while (j < n) {
    let subArray = [];
    for (let i = 0; i < n; i++) {
      subArray.push(fill);
    }
    mainArray.push(subArray);
    j++;
  }
  return mainArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  //Using map to check the lowercase day in each array object rota with the given day and increment the days if found
  let cntDays = 0;
  for (let i = 0; i < staff.length; i++) {
    if (
      staff[i].rota
        .map((item) => item.toLowerCase())
        .includes(day.toLowerCase())
    )
      cntDays++;
  }
  return cntDays >= 3;
};
