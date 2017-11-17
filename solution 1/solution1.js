var arr = [12,24,35,24,88,120,155,88,120,155];
arr.sort();
for(var i = 0; i<arr.length; i++ ){
    if(arr[i] == arr[i+1]){
        arr.splice(arr.indexOf(arr[i]), 1);
    }
    console.log(arr[i]);
}