const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// The type of array that was or the results were: Results for the extraLargeArray
// The time for it run was about 777.6 ms 
//append was 2.4738ms
//Results Results for the extraLargeArray
//insert 776.467958 ms
//append 2.473875 ms
//Results for the extraLargeArray
// insert 776.467958 ms
// append 2.473875 ms
//Results for the extraLargeArray
// insert 776.467958 ms
// append 2.473875 ms
//Results for the extraLargeArray
// insert 776.467958 ms
// append 2.473875 ms
// 2 Unique Characters
Input : abcd10jk
Output : true

Input : hutg9mnd!nk9
Output : false

// C++ program to illustrate string
// with unique characters using
// brute force technique
#include <bits/stdc++.h>
using namespace std;

bool uniqueCharacters(string str)
{

	// If at any time we encounter 2
	// same characters, return false
	for (int i = 0; i < str.length() - 1; i++) {
		for (int j = i + 1; j < str.length(); j++) {
			if (str[i] == str[j]) {
				return false;
			}
		}
	}

	// If no duplicate characters encountered,
	// return true
	return true;
}

// driver code
int main()
{
	string str = "GeeksforGeeks";

	if (uniqueCharacters(str)) {
		cout << "The String " << str
			<< " has all unique characters\n";
	}
	else {
		cout << "The String " << str
			<< " has duplicate characters\n";
	}
	return 0;
}
// This code is contributed by Divyam Madaan


// Pangrams

/// Java Program to illustrate Pangram
class GFG {

	// Returns true if the string
	// is pangram else false
	public static boolean checkPangram(String str)
	{
		// Create a hash table to mark the
		// characters present in the string
		// By default all the elements of
		// mark would be false.
		boolean[] mark = new boolean[26];

		// For indexing in mark[]
		int index = 0;

		// Traverse all characters
		for (int i = 0; i < str.length(); i++) {
			// If uppercase character, subtract 'A'
			// to find index.
			if ('A' <= str.charAt(i) && str.charAt(i) <= 'Z')
				index = str.charAt(i) - 'A';

			// If lowercase character, subtract 'a'
			// to find index.
			else if ('a' <= str.charAt(i) && str.charAt(i) <= 'z')

				index = str.charAt(i) - 'a';

			// If this character is other than english
			// lowercase and uppercase characters.
			else
				continue;
			mark[index] = true;
		}

		// Return false if any character is unmarked
		for (int i = 0; i <= 25; i++)
			if (mark[i] == false)
				return (false);

		// If all characters were present
		return (true);
	}

	// Driver Code
	public static void main(String[] args)
	{
		String str = "The quick brown fox jumps over the lazy dog";

		if (checkPangram(str) == true)
			System.out.print(str + " is a pangram.");
		else
			System.out.print(str + " is not a pangram.");
	}
}



// The longest word 
// Pneumonoultramicroscopicsilicovolcanoconiosis
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));