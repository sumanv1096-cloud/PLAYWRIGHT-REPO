let str="JAVASCRIPT"
let vowels="aeiou"

let count=0
for (let i=0;i<str.length;i++)
{
   for(let j=0;j<vowels.length;j++)
{
if(str.charAt(i).toLowerCase()==vowels.charAt(j).toLowerCase())
   {
 count++
 console.log("The character matching :",str.charAt(i));
   }
}
}
console.log("The number of vowels in the string is:", count);