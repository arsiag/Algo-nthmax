function secondMax(arr){
    var max1 = Math.max(arr[0],arr[1]);
    var max2 = Math.min(arr[0],arr[1]);
    for (var i = 2; i < arr.length; i++){
        if (arr[i] > max1){
            max2 = max1;
            max1 = arr[i];
        
        }
        else if (arr[i] > max2){
            max2 = arr[i];
        } 
    }
    return max2;
}
myarr = [20,10,2,3,4,6,2,9]
console.log(secondMax(myarr));