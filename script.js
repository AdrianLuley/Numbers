var ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];
var tens = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var ul = document.getElementById("numbers");

function toScreen(text) {
    var newElement = document.createElement("li");
    newElement.textContent = text;
    numbers.appendChild(newElement);

}

for (i = 1; i <= 1000; i++) {
    if (i < 20) {
        toScreen(ones[i]);
    } else {
        var digits = String(i);
        if (i < 100) {
            var ten = digits[0];
            var one = digits[1];
        
            var text = tens[ten] + " " + ones[one];
            toScreen(text);
        }else if (i < 1000){
            var hundred = digits[0];
            var ten = digits[1];
            var one = digits[2];
            
            var text = ones[hundred] + " Hundred " + tens[ten] + " " + ones[one];
            toScreen(text);
        } else {
            toScreen("One Thousand");
        }
     
    }
  
}


