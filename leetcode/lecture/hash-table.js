// The three primary
// requirements for a good hash function are as follows:
// • Deterministic: Equal keys produce equal hash values.
// • Efficiency: It should be O(1) in time.
// • Uniform distribution: It makes the most use of the array.

// Focusing on the hashing function 

// the first technique for hashing it to use prime  SVGAnimatedNumberList.  using a combination of prime numbers and module 
// like below 
// 4 % 11 = 4
//  7 % 11 = 7
//  9 % 11 = 9
//  15 % 11 = 4
// and so on , where 4 and 7 are the keys and the index generated was  4 , 5 

// with 15 and 4 we have what's called collision  'cause they're yielding same keys
// tip : 

// Modulus by a small nonprime number
// such as 4 guarantees only a range from 0 to 3 and leads to a large number of collisions.


// Probing hash techinique
// Two probing technique found:

// #Linear probing - find the next avaiable index via inremental trials , the disavantages is that by going through this idea  we're creating clusters and we can iterate more and more when we find a situation where the keys are identical cause in order to find out the value we have to use the key and then turns out the key are equal 5 times which means we  have to iterate 5 times till find that values, it's time consuming 'cause it's linear O(n)
// #Quadratic probing - use the quadratic functions to generate incremental trials. 

// whereas quadratic ones ose squares  instead of incrementing by 1 each time. ``


// Double hasing / Rehashing 

// another great way to uniformly distribuite the keys is by  having a second hashin gfunction tath hashes the resutl from the  original . These are the three primary reequirements for a good second hash function : 


// --- different : it need to  be diffferent to distribute it ByteLengthQueuingStrategy. 
// Efficiency: it should still be O(1) in time. 
// Nonzero: It should never evaluate to zero .Zero gives the initial hash value . 




// usinng linear probing  
// hashtable is predefined size datastructre : /
function HashTable(size){
    this.size = size; 
    this.keys = this.initArray(size);
    this.values = this.initArrays(size);
    this.limit = 0;
}

HashTable.prototype.put = function(key,value){
    if (this.limit >= this.size) throw ' Hash table is full';
    var hashedIndex = this.hash(key);

    //Linear probing 
    while(this.keys[hashedIndex] != null){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = values;
    this.limit++;
}


HashTable.prototype.get = function(key){
    var hashedIndex = this.hash(key);
    while(this.keys[hashedIndex] != key){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
}


HashTable.prototype.hash = function(key){
    //check if in 
    if(!Number.isInteger(key)) throw " must be int"; 
    return key % this.size;
}

HashTable.prototype.initArray = function(size){
    var array =[];
    for (var i = 0 ; i <size; i++){
        array.push(null); 
    }
    return array;
}


var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");

//now using quadrdatic probing 

HashTable.prototype.put= function (key,values){
    if(this.limit >= this.size)  throw " hash table is full"; 
    var hashedIndex = this.hash(key), squareIndex = 1;
    //quadratic probing 

    while( this.keys[hashedIndex ] != null)  {
        hasehdIndex += Math.pow(squaredIndex,1);
        hashedIndex ; 
        squaredIndex++;

    }
    this.keys[hashedIndex]  = key; 
    this.values[hasehdIndex  = values; 
    this.limit++;

}

HashTable.prototype.get  = function (key){
    var hashedIndex  = this.hash(key),squaredIndex =1 ; 
    while(this.keys[hashedIndex] != key){
        hashedIndex += Math.pow(squaredIndex,2);
        hashedIndex = hashedIndex % this.size;
        squaredIndex++; 
    }
    return this.values[hashedIndex]

}

// Using double-hashing with linear probing 


HashTable.prototype.put = function (key,value){
    if(this.limit>= this.size) throw " hash Table is full"
    var hashedIndex = this.hash(key);
    while(this.keys[hashedIndex] != null){
        hashedIndex ++ ;
        hashedIndex = hashedIndex % this.size;
    }
    this.keys[hashedIndex] = key; 
    this.values[hashedIndex ] = vallue; 
    this.limit++;

}


HashTable.prototype.get = function(key){
    var hashedIndex = this.hash(key);
    while(this.keys[hashedIndex] != key){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
}

HashTable.prototype.hash = function (key){
    if(!Number.isInteger(key)) throw " must be int "
    return this.secondHash(key % this.size);
}

HashTable.prototype.secondHash = function ( hashedKey){
    var R = this.size -2; 
    return R - hashedKey % R ;
}