const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord } = require("./formatting");


    test("getLastElement returns the last element of an array", () => {
      input = [1, 2, 3, 4, 5];
      expect(getLastElement(input)).toBe(5);
    });
  
    test("isPalindrome returns true for palindromic words", () => {
      expect(isPalindrome("Anna")).toBe(true);
      expect(isPalindrome("hello")).toBe(false);
    });
  
    test("capitalizeWords capitalizes the first letter of each word in a sentence", () => {
      const input = "hello world";
      const result = capitalizeWords(input);
      expect(result).toBe("Hello World");
    });
  
    test("lengthOfLongestWord returns the length of the longest word in a sentence", () => {
      const input = "Monkeys on a Tree";
      const result = lengthOfLongestWord(input);
      expect(result).toBe(7); 
    });
