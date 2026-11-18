let arr=[4,3,11,1,5]
   Largest=arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]>Largest){
        Largest=arr[i]
    }   
    
}
console.log(Largest);