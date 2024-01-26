export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	
	for(let i=0;i<nums.length;i++)
	{   
		if(nums[i]===n && (i+1)!==nums.length)
		     return nums[i+1]	
	}
	return null
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');

	let cntObj={1:0,0:0}
	for(let i=0;i<str.length;i++)
	{
	  if(Number(str[i])===1)
	    cntObj[1]=cntObj[1]+1
	  else
	    cntObj[0]=cntObj[0]+1
	}
	return cntObj
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	
	return Number(String(n).split('').reverse().join(''))
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	
	let sum=0
	for(let i=0;i<arrs.length;i++)
	{
	 sum += arrs[i].reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	  }, 0); 
	}
	return sum
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	if (arr.length<2)
	return arr
    const newArray=[arr[arr.length-1]]
	for (const number of arr.slice(1,arr.length-1)) {
		newArray.push(number);
	  }
	newArray.push(arr[0]);
	return newArray
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	
	for (const key in haystack)
	{
		if(typeof haystack[key]==='string')
		{
			if(haystack[key].toLowerCase().includes(searchTerm.toLowerCase()))
			  return true
		}		
	}
	return false

};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	
	const newStrArr=str.replace(/[^a-zA-Z0-9]/g,' ').toLowerCase().split(' ').filter(element => element !== ''); //To replace all the special characters in the string to an empty string
    const wordFreq={}

	for(let i=0;i<newStrArr.length;i++)
	{
		if(newStrArr[i] in wordFreq)
		wordFreq[newStrArr[i]]+=1
	    else
		wordFreq[newStrArr[i]]=1

	}
	return wordFreq
};
