/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.
fearNotLetter("abcdefghjklmno") should return the string i.
fearNotLetter("stvwx") should return the string u.
fearNotLetter("bcdf") should return the string e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let start = alphabet.indexOf(str[0]);

  for (let i = start; i < start + str.length; i++) {
    if (!str.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
}

console.log(fearNotLetter("abce"));
