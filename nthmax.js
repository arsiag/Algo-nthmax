function nthmax(arr, n){
    if (n >= arr.length){
      return undefined;
    }
    var nthmax = Infinity;
    var nthmaxidx = 0;
    var thismax;
    var thismaxidx;
    for (var i = 0; i < n; i++){
      thismax = arr[0];
      thismaxidx = 0;
      for (var j = 1; j < arr.length; j++){
        if (arr[j] >= thismax && j !== nthmaxidx && arr[j] <= nthmax ){
          thismax = arr[j];
          thismaxidx = j;
        }
      }
      nthmax = thismax;
      nthmaxidx = thismaxidx;
    }
    return nthmax;
  }
  
  
  myarr1 = [1,3,5,4,7,8,2,3,4,5,9];
  myarr2 = [3,3,3,3];
  
  console.log(nthmax(myarr1, 4));
  console.log(nthmax(myarr2, 5));