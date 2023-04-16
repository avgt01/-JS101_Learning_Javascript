let array=[1,2,3,4,5]
let sum=0;
let sum2=0;

for(let i=1; i<array.length; i++)
{
  if(array[i]%2==0)
  {
    sum=sum+array[i];
  }
  else
  {sum2+=array[i]}
}
if(sum>sum2)
{
  console.log("even")
}
else{
  console.log("odd")
}

