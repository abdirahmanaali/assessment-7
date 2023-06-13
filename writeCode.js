// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
console.log("part 1");

// For example:
function addToZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let n = 0; n < nums.length; n++) {
      if (nums[i] + nums[n] === 0) {
        return console.log(true);
      }
    }
  }
  return console.log(false);
}

addToZero([1, 2, 3, -2]);
// -> True

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
console.log("part 2");

// For example:
function hasUniqueChars(word) {
  for (let i = 0; i < word.length; i++) {
    for (let w = i + 1; w < word.length; w++) {
      if (word[i] === word[w]) {
        return console.log(false);
      }
    }
  }
  return console.log(true);
}

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
console.log("part 3");
// Write a function to check a sentence to see if it is a pangram or not.
function isPangram(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercaseWord = word.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    if (!lowercaseWord.includes(letter)) {
      return console.log(false);
    }
  }

  return console.log(true);
}

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

console.log("part 4");
// For example:
function findLongestWord(words) {
  for (let word = 0; word < words.length; word++) {
    for (let i = word; i < words.length; i++) {
      if (words[word] < words[i]) {
        return words[word];
      }
    }
  }
}
console.log(findLongestWord(["hi", "hello", "Pokemon Ruby"]));
// -> 5
