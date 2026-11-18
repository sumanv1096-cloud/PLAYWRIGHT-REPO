let a="madam"
let rev=""
let original=a

for (let i=a.length;i>=0;i--)
    {
        rev=rev+a.charAt(i)
    }
console.log(rev)

if(original==rev)
    {
        console.log("It is a palindrome")
    }
else
    {
        console.log("It is not a palindrome")
    }