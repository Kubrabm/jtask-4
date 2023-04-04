
function duplicateCount(string) {
  let element = {}
  for(let i = 0; i < string.length; i++) {
      const char = string[i]
      if(char in element) {
        element[char] +=1
      } else {
        element[char] = 1
      }
  }
  return element
}

const string = prompt('Enter a string: ');
const value = duplicateCount(string);
console.log(duplicateCount(string));

