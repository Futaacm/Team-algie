var fs = require('fs');
var word = fs.readFileSync("Problem set 2.txt");
var arr = word.toString().split("\n");
for(i = 0; i<10; i++){
    newarr = arr[i].toString().split('');
    nxtarr = newarr[i+1];
    for(j = 0; j<newarr.length; i++){
        nxtarr.forEach(function(element) {
            
        };
    }

}

