fibonanci iteratively 
function getNthFibo(n){
    if(n <= 1)return n; 

    var sum = 0, last  =1 , lastlast = 0; 

    for (var i = 1; i < n; i++){
        sum  = last + lastlast; 
        lastlast = last ; 
        last = sum;
    }
    return sum;
}
fibonaci recursively 


function getNthFibo(n){
    if(n<=1)return n; 
    else{
       console.log('is n getting called ') ; 
       return getNthFibo(n-1)  + getNthFibo(n-2);
    }
}


    