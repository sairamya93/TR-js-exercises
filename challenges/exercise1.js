export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city.toUpperCase() === "MANCHESTER";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  //Loop through the array to update count when 'sheep' is encountered and return the final count
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() === "SHEEP") count += 1;
  }
  return count;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return (
    person.address["postCode"].startsWith("M") &&
    person.address["city"].toUpperCase() === "MANCHESTER"
  );
}
