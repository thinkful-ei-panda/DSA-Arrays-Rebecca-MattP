/**
 * replace spaces with %20
 *
 */
/**
 *
 * @param {string} string - URL with possible spaces
 */
const URLify = (string) => {
	let url = '';
	for (let i = 0; i < string.length; i++) {
		string[i] === ' ' ? (url += '%20') : (url += string[i]);
	}
	return url;
};
console.log(`URLifying a string`);
console.log(`-`.repeat(50));
console.log(URLify('tauhida parveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));

/**
 * Filtering an array
 * Write an algorithm to remove all numbers less than 5 from the array.
 */
/**
 *
 * @param {array} array - an array of numbers
 * @param {number} num - number used to filter array
 */
const filtering = (array, num) => {
	const result = [];
	let count = 0;
	while (count < array.length) {
		if (array[count] >= num) {
			result.push(array[count]);
			count++;
		} else {
			count++;
		}
	}
	return result;
};
console.log(` `);
console.log(`Filtering an array`);
console.log(`-`.repeat(50));
console.log(filtering([1, 5, 7, 1, 3, 4, 2, 70, 10], 5));

/**
 *
 * @param {array} arr - array of numbers
 */
const maxSum = (arr) => {
	let a = 0,
		b = 0;
	let count = 0;

	while (count < arr.length) {
		if (arr[count] > arr[count + 1]) {
			a = arr[count] > a ? arr[count] : a;
			b = arr[count + 1] > b ? arr[count + 1] : b;
			count += 2;
		} else if (arr[count] < arr[count + 1]) {
			a = arr[count] > a ? arr[count] : a;
			b = arr[count + 1] > b ? arr[count + 1] : b;
			count += 2;
		} else if (!arr[count + 1]) {
			a = arr[count] > a ? arr[count] : a;
			break;
		}
	}
	return a + b;
};
console.log(` `);
console.log(`Max Sum`);
console.log(`-`.repeat(50));
console.log(maxSum([4, 1, -3, 5, -2, 6, 8]));

/**
 * Two arrays that have been sorted. Merge 2 arrays into a single array, which sould be sorted
 * Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
 * Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
 * @param {array} arr1 - array of numbers
 * @param {array} arr2 - ^^
 */
const mergeArr = (arr1, arr2) => {
	let result = [];
	let i = 0, // arr1 index
		j = 0, // arr2 index
		k = 0; // current item

	while (k < arr1.length + arr2.length) {
		// if current element of first array is smaller than the current of second array, store first array element otherwise do the same in second arr
		let arr1Empty = i >= arr1.length;
		let arr2Empty = j >= arr2.length;
		// if array 1 is not empty and either array 2 is empty or current item in array 1 is less than the current item in arra 2
		if (!arr1Empty && (arr2Empty || arr1[i] < arr2[j])) {
			result[k] = arr1[i];
			i++;
		} else {
			result[k] = arr2[j];
			j++;
		}
		k++;
	}
	return result;
};
const array1 = [1, 3, 6, 8, 11];
const array2 = [2, 3, 5, 8, 9, 10];
console.log(` `);
console.log(`Merge Two sorted Arrays into one sorted array`);
console.log(`-`.repeat(50));
console.log(mergeArr(array1, array2));
/**
 *
 * @param {string} string - string to remove characters from
 * @param {string} limiter - limimter character(s)
 */
const rmvChars = (string, limiter) => {
	let result = '';
	for (let i = 0; i < string.length; i++) {
		if (!limiter.includes(string[i])) {
			result += string[i];
		}
	}
	return result;
};
console.log(` `);
console.log(`Remove characters`);
console.log(`-`.repeat(50));
console.log(rmvChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
/**
 * Given an array of numbers - output an array where every index is the product of all numbers in the original array, expect for the index
 * Input:[1, 3, 9, 4]
 * Output:[108, 36, 12, 27]
 */
/**
 *
 * @param {array} arr - an array of numbers
 */
const products = (arr) => {
	let result = [];
	let current = 0;

	while (current < arr.length) {
		let product = 1;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== arr[current]) product *= arr[i];
		}
		result.push(product);
		current++;
	}
	return result;
};
console.log(` `);
console.log(`Product an array`);
console.log(`-`.repeat(50));
console.log(products([1, 3, 9, 4]));

/**
 * 2D Array
 * Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
 * Input:
    [
     x 
  y [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
  
  ];
    Output:
    [[0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,1,0],
    [0,0,0,0,0],
    [0,0,1,1,0]
  
  ];
 */

const twoDArray = (arr) => {
	let result = [...arr];
	let changeCoor = [];
	for (let y = 0; y < arr.length; y++) {
		for (let x = 0; x < arr[y].length; x++) {
			if (arr[y][x] === 0) {
				changeCoor.push({ x, y });
			}
		}
	}

	changeCoor.forEach(({ x, y }) => {
		arr.forEach((row) => (row[x] = 0));
		arr[y].forEach((_, i) => (arr[y][i] = 0));
	});

	return result;
};
const twoDimArr = [
	[1, 0, 1, 1, 0],
	[0, 1, 1, 1, 0],
	[1, 1, 1, 1, 1],
	[1, 0, 1, 1, 1],
	[1, 1, 1, 1, 1],
];
console.log(` `);
console.log(`2D Array`);
console.log(`-`.repeat(50));
console.log(twoDArray(twoDimArr));
/**
 * String Rotation -
 * Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
 * @param {string} str
 * @param {string} rotate
 */
const rotateString = (str, rotate) => {
	let temp = str + str;
	let rotated = '';

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < str.length; j++) {
			rotated += temp[i + j];
		}
		rotated += ' ';
	}
	return rotated.includes(rotate);
};
console.log(` `);
console.log(`Rotate String`);
console.log(`-`.repeat(50));
console.log(rotateString('amazon', 'azonma'));
console.log(rotateString('amazon', 'azonam'));
