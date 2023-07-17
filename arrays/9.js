let arr = ['react', 'html', 'edstm'];
let str = 'edstem';
f=true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === str) 
  {
    for(let j=0;j<str;j++)
       if(a[i][j]!=str[j])
       f=false;
  }
  else
  f=false;
}
console.log(f);