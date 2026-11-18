let str="madam"
let rev=""

for(let i=str.length-1;i>=0;i--)
{
rev=rev+str.charAt(i);
}
if(str==rev)
{
console.log("palendrome");
}
else
{
console.log("not a palendrome");
}