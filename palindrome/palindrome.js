function palindrome(str) {
    var lowRegStr = str.toLowerCase();
    var noPunct = lowRegStr.replace(/[\W_]/g, '');
    var reverseStr = noPunct.split('').reverse().join(''); 
    return reverseStr === noPunct;
  }  
  
  palindrome("eye");