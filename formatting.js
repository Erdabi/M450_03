//a.	getLastElement: Gibt das letzte Element eines Arrays zurück.
//b.	isPalindrome: Prüft, ob das gegebene Wort ein Palindrom ist.
//c.	capitalizeWords: Wandelt die ersten Buchstaben eines jeden Wortes in einem String in Großbuchstaben um.
//d.	lengthOfLongestWord: Gibt die Länge des längsten Wortes in einem Satz zurück.

function getLastElement(array) {
    let lastElement = array[array.lenght -1]
    return lastElement
}

function isPalindrome(word) {
    const cleanedWord = word.toUpperCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}
console.log(isPalindrome("Anna"))

function capitalizeWords(string) {
    words = string.split(' ');
    caps = words.map(word => { 
       return word.charAt(0).toUpperCase() + word.slice(1);
     })
     return caps.join(' ');
}
console.log(capitalizeWords("granatapfel nein"))

function lengthOfLongestWord(string) {
    words = string.split(' ');
    sortedWords = words.sort((a, b) => b.length - a.lenght);
    longestWordLength = sortedWords[0].length;
    return longestWordLength

}
console.log(lengthOfLongestWord("kbjblb"))

module.exports = { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord }