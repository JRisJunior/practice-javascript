// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

function selectEvenItems(strings) {
  var result = [];
  var i = 0;
  strings.forEach(function(string) {
    if (i % 2 === 0) {
      result.push(string);
    }
    i++;
  });
  console.log(result);
}
// selectEvenItems(["a", "b", "c", "d", "e", "f"]);

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])

// Math.max() can be used for this in short form...somehow
var numbers = [5, 4, 8, 1, 2];
function returnMax(numbers) {
  var currentMax = numbers[0];
  numbers.forEach(function(number) {
    if (number > currentMax) {
      currentMax = number;
    }
  });
  console.log(currentMax);
}
// returnMax(numbers);

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)

function makeFactorial(number) {
  var result = 1;
  for (let currentNumber = number; currentNumber > 0; currentNumber - 1) {
    result = result * currentNumber;
  }
  console.log(result);
}
makeFactorial(5);