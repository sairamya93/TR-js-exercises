export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.filter(no => no < 1)
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	return names.filter(n => n.startsWith(char))
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	return words.filter(word => word.startsWith('to '))

}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.filter(num => Number.isInteger(num))
}

/*export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	let cities=[]
	for(let i=0;i<users.length;i++)
	{
		cities.push(users[i])
	}

}*/

export function getCities(users) {
	if (!users) throw new Error('users is required');
  
	let cities = [];
  
	for (let i = 0; i < users.length; i++) {
	  // Access the city name from each user object
	  const userCity = users[i].data.city.displayName;
  
	  // Check if the user has a city, and if so, add it to the array
	  if (userCity) {
		cities.push(userCity);
	  }
	}
  
	return cities;
  }
  
/*
export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	
	return nums.forEach(element => { Math.sqrt(element).toFixed(2)
		
	});
	// you are using forEach without creating a new array to store the square roots. 
	//Instead, you should use map to create a new array with the transformed values. 
	//Additionally, you need to use parseFloat to convert the string returned by toFixed back to a floating-point number
}
*/

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
  
	// Use map to create a new array with square roots
	const squareRoots = nums.map(element => parseFloat(Math.sqrt(element).toFixed(2)));
  
	return squareRoots;
  }
  

/*export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	let strSentences=[]
	for(let i=0;i<sentences.length;i++)
	{
		if(sentences[i].includes(str))
		{
			strSentences.push(sentences[i])
		}
	}
	//2 issues
	// Case Insensitivitynothandled
	//can be simplified with Filter
	return strSentences
}
*/
export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
  
	const lowercaseStr = str.toLowerCase();
  
	return sentences.filter(sentence => sentence.toLowerCase().includes(lowercaseStr));
  }
  

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	
	let newArray=[]
	for(let i=0;i<triangles.length;i++)
	{
		newArray.push(Math.max(...triangles[i]))
	}
	return newArray;
}


