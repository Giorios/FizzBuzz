function fizzbuzz(n) {
	// Write your code here
for (var a = 1; a <= n; a++) {
	if (n / 3 == a){
		var mult = true
	}
};

for (var b = 1; b < a; b++){

	if (n / 5 == b){
		console.log("Buzz")
	var mult = false
	};

	if (mult) {
		console.log("Fizz")
	}
	else if (n / 3 == a && n / 5 == b){
		console.log("FizzBuzz")
	}
	else  {
		console.log(a)
	};
};
	

	
};

	// Leave the console.log below at the bottom of the function
	console.log("--------");


fizzbuzz(16);
fizzbuzz(25);


// Instructions  
// FizzBuzz

// Write a `fizzbuzz()` function that takes in a number, `n`, and prints out the numbers from 1 to `n`. 

// For **multiples of three**, replace the number with the word `"Fizz"`, and for the **multiples of five**, replace the number with the word `"Buzz"`. 

// For numbers that are **multiples of both three and five**, use `"FizzBuzz"` (capitalization matters).

// For example, `fizzbuzz(16)` should print:
// `1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16`


// *You don't need to have them separated by commas; you can have each number (or word) get printed on it's own line*