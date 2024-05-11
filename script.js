function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i = 0; i < str.length; i++) {
        let found = false;
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str.charAt(i) === str.charAt(j)) {
                found = true;
                break;
            }
        }
        if (!found) {
            return str.charAt(i);
        }
    }
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
  