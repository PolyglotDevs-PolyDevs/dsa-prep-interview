function solution(j){
    const s = 'aAAbbbb'; 
    var  counter = 0;     
    for (let c in  s){
        counter = ( (c === j[0] ) || (c === j[1] ) )? counter++:counter = counter;
           console.log( j[0] || j[1]);
    }
return counter;
}
   

// second solution 

function HashSet(){
    this.s = new Set(); 
    this.counter = 0; 
    this.limit = 0;
}


HashSet.prototype.add = function(val){
    this.s.add(val);
    this.limit ++; 
}
HashSet.prototype.containAndCounter = function(val){
    this.s.forEach( (item,idx) =>{
        if(item == val){this.counter+=1;}
    })
return this.counter;
}

HashSet.prototype.containAndCounter = function(val){
    this.s.forEach( (item,idx) =>{
        if(item == val){this.counter+=1;}
    })
return this.counter;
}