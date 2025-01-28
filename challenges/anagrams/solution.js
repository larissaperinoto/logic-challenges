const input = ["cat", "dog", "god", "tca", "atc", "odg"];

function formatWord(word) {
  if (!word) return "";

  return word.split("").sort().join("");
}

function identifyAnagram(input) {
  const result = new Array();

  for (let i = 0; i < input.length; i++) {
    const anagrams = new Set();

    let word = formatWord(input[i]);

    for (let j = 0; j < input.length; j++) {
      const word_2 = formatWord(input[j]);

      if (!(word === word_2) || i === j) continue;

      anagrams.add(i + 1);
      anagrams.add(j + 1);
    }

    result.push([...anagrams].sort());
  }
  return Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
}

const solution = identifyAnagram(input);

console.log(solution);
