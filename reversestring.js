let a="hello"
let rev=""

for (let i=a.length;i>=0;i--)
    {
        rev=rev+a.charAt(i)
    }
console.log(rev)