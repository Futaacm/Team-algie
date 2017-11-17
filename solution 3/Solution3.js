//Load the file module
var fs = require('fs');
//read file synchronously, So word is defined and reasy to work with
var word = fs.readFileSync("Problem set 3.txt");
//Change word to string and convert to an array
var arr = word.toString().split("\n");
var results
for(var i=1; i<6; i++){
newarr = arr[i].toString().split('');
newarr.sort();
var max=0,result,freq = 0;
for(var j = 0; j<newarr.length; j++){
    //var max =0,result,frequency = 0;
    if(newarr[j]==newarr[j+1]){
        frequency++;
    }
    else{
        frequency = 0;
    }
    if(frequency > max){
        result = newarr[j];
        max = frequency;
        
    }
    results = result;
    
}
console.log(result);
fs.writeFileSync('output.txt', result );
fs.appendFile('output.txt', result +'\n', function(err){
    if(err) console.log(err)
});


}
