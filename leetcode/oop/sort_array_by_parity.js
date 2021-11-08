function swap( arr,idx1,idx2){
    let temp = arr[idx1];
    if(arr[idx1] % 2 !== 0 ){
        arr[idx1]  = arr[idx2];
        arr[idx2] = temp 
    }
}
function sortByParity(arr){
    for(let i = 0 ; i < arr.length-1; i++){
        for(let j = i; j<arr.length-1; j++ ){
            swap(arr,i,j)
        }
    }
    return arr;
}