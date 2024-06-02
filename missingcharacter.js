
function findMissingChars(str) {
    const presentChars = new Set();
 
   
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char >= 'a' && char <= 'z') {
            presentChars.add(char);
        }
    }
 
  
    let missingChars = '';
    for (let c = 'a'; c <= 'z'; c = String.fromCharCode(c.charCodeAt(0) + 1)) {
        if (!presentChars.has(c)) {
            missingChars += c;
        }
    }
 
 
    if (missingChars.length === 0) {
        console.log('A string é um pangrama.');
    } else {
        console.log(missingChars);
    }
}
 

const str = "The quick brown fox jumps over the dog";
findMissingChars(str);

