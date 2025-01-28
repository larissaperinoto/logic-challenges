const input = [1, 7, 30, 2, 94, 128, 49, -5];

function findLargestNumber(input) {
  const sortedInput = input.sort((a, b) => b - a);
  return sortedInput[0];
}

const solution = findLargestNumber(input);

console.log(solution);
