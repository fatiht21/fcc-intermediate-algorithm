/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
*/
//s1
function destroyer(arr) {
  const args = [...arguments].slice(1);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (args.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//s2
function destroyer(arr) {
  const args = [...arguments].slice(1);
  return arr.filter((x) => !args.includes(x));
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
