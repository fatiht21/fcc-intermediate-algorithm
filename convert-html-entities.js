/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
Passed:convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") should return the string Schindler&apos;s List.
convertHTML("<>") should return the string &lt;&gt;.
convertHTML("abc") should return the string abc.
*/
//s1
function convertHTML(str) {
  let htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((x) => htmlEntities[x] || x)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));

//s2
function convertHTML(str) {
  const newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) {
    switch (newStr[i]) {
      case "&":
        newStr[i] = "&amp;";
        break;
      case "<":
        newStr[i] = "&lt;";
        break;
      case ">":
        newStr[i] = "&gt;";
        break;
      case '"':
        newStr[i] = "&quot;";
        break;
      case "'":
        newStr[i] = "&apos;";
        break;
    }
  }

  return newStr.join("");
}

console.log(convertHTML("Schindler's List"));
