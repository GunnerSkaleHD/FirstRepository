export function duplicateEncode(word: string) {
  word = word.toLowerCase();
  const wordList: string[] = word.split("");
  let finalWord: string[] = [];
  for (let targetChar of wordList) {
    let count: number = 0;
    let i = 0;
    while (i < word.length) {
      if (word[i] === targetChar) {
        count++;
      }
      i++;
    }
    if (count > 1) {
      finalWord.push(")");
    } else if (count === 1) {
      finalWord.push("(");
      count = 0;
    }
  }
  return finalWord.join("");
}

console.log(duplicateEncode("RedBull"));
