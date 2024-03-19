//Define a class named WordKit
class WordKit {
      //Method to reverse a given string
      reverse(str){
            let revStr = "";
            let chr;

            //Iterate through each character in the string
            for(let i = 0; i < str.length; i++){
                  chr = str.charAt(i);
                  // Add the character to the beginning of the reversed string
                  revStr = chr + revStr;
            }

            //Return the reversed string
            return revStr;
      }

      //Method to check if a string is a palindrome
      isPalindrome(str){
            //Compare the original string with its reversed version
            if (str === this.reverse(str)){
                  return true; // The string is a palindrome
            } else {
                  return false; // The string is not a palindrome
            }
      }

      //Method to make a string a palindrome by appending its reversed version
      makePalindrome(str){
            //Reverse the string
            let newStr = this.reverse(str);

            //Append the reversed string to the original string
            return str + newStr;
      }
}
