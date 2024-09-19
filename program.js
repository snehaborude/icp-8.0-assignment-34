const marks = [21,18,27,20,2,7,299,99,100,2,222,111,1]
let largest = marks[0]
for (const num of marks)
{
    if(num>largest)
    {
        largest=num
    }
}
console.log(largest)