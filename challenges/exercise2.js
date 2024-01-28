export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let sqArray = nums.map(function (n) {
    return n * n;
  });
  return sqArray;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let newStr = "";
  for (let i = 1; i < words.length; i++) {
    newStr +=
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words[0].toLowerCase() + newStr;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let cnt = 0;
  for (let i = 0; i < people.length; i++) {
    cnt += people[i].subjects.length;
  }
  return cnt;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient.toLowerCase())) return true;
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  //Loop through the 1st array and put the items that are common onto a new array.
  //Using set to remove the duplicate values and then sort the array
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]))      
      newArr.push(arr1[i]);    
  }  
  newArr = [...new Set(newArr)];
  return newArr.sort((a, b) => a - b);
}
