function avg(a){
    var sum=0;
    for(let i=0;i<a.length;i++)
        {
        sum=sum+a[i];
        }
    return sum/a.length;
}
const a=[2,3,4,5,6,7];
console.log(avg(a));