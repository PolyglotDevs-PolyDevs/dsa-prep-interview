function solution(j){
    const s = 'aAAbbbb'; 
    var  counter = 0;     
    for (let c in  s){
        counter = ( (c === j[0] ) || (c === j[1] ) )? counter++:counter = counter;
           console.log( j[0] || j[1]);
    }
return counter;
}
   