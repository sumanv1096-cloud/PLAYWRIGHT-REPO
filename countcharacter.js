let str="hello"
let done=""
for(let i=0;i<str.length;i++)
{
  let ch=str.charAt(i)
  if(done.includes(ch)) continue
   let count =0;
   for(let j=0;j<str.length;j++){
    if(ch==str.charAt(j))
    {
        count++;
}
  }
console.log(ch +":" + count)
done=done+ch;
}
