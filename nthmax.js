function findNthMax(arr, n){
    if (n > arr.length){
        return undefined;
    }
    var seen = []
    var nthmax = Infinity;
    var thismax;
    var thismaxidx;
    var k;
    for (var i = 0; i < n; i++){
        k = 0;
        while(seen.includes(k) && k < arr.length){
            k++;
        }
        thismax = arr[k];
        thismaxidx = 0;
        for (var j = 0; j < arr.length; j++){
            if (arr[j] >= thismax && !seen.includes(j) && arr[j] <= nthmax ){
              thismax = arr[j];
              thismaxidx = j;
            }
        }
        nthmax = thismax;
        if (!seen.includes(thismaxidx)){
            seen.push(thismaxidx);
        }
      
  //     console.log(seen);
  //     console.log("for i: " + i + " ,nthmax and it's index: " + nthmax + " and " + thismaxidx);
    }
    return nthmax;
}


myarr1 = [1,3,5,4,7,8,2,3,4,5,9];
myarr2 = [3,3,3,3];
myarr3 = [2,1,2,1,2];
n1 = 8;
n2 = 5;
n3 = 4;
console.log("The " + n1 +"th max of " + myarr1 + " is: " + findNthMax(myarr1, 8));
console.log("The " + n2 +"th max of " + myarr2 + " is: " + findNthMax(myarr2, 5));
console.log("The " + n3 +"th max of " + myarr3 + " is: " + findNthMax(myarr3, 4));

