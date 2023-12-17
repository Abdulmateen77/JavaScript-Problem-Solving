class WordKit {
      reverse(str){
            let revStr = "";
            let chr;

            for(let i =0; i < str.length; i++ ){
                  chr = str.charAt(i);
                  revStr = chr + revStr;
            }

            return revStr;
      }
      isPalindrome(str){
            if (str === this.reverse(str)){
                  return true;
            }else{
                  return false;
            }
      }
      makePalindrome(str){
            let newStr = this.reverse(str)

            return str + newStr;

      }
}
