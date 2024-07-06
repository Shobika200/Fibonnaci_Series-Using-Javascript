const fs =(n) =>{
    const arr = [0,1];
    for(let i=2; i<n; i++){
        arr.push(arr[i-2] + arr[i-1]);
}
return arr;
}
const n = parseInt(prompt('Enter the Series upto?'));
console.log(fs(n));