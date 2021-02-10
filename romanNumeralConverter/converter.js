function convertToRoman(num) {
    var decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    var romanizedNum = "";
    for (var index = 0; index < decimalNum.length; index++) {
        while (decimalNum[index] <= num) {
            romanizedNum += romanNum[index];
            num -= decimalNum[index];
        }
    }
    return romanizedNum;
   };
   
   convertToRoman(36);