var fs = require('fs');
var word = fs.readFileSync("Problem set 2.txt");
word = word.toString().replace(/\r?\n|\r/g, " ");
var arr = word.toString().split(" ");
for(i = 1; i<arr.length; i++){
    newarr = arr[i].toString().split('');
    nxtarr = arr[i+1].toString().split('');
    var x = newarr.join("");
       newarr.forEach(function(element) {
            var inarr = nxtarr.filter(function(word){
                return word == element;
            });
    var y = inarr.join("");
    if(x == y){
        console.log("Match found");
    }else{
        console.log("No match found");
    }
            
        });


}

