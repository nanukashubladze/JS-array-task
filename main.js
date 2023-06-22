//task1
//white a program to remove all negative numbers from an array

let arr = [7, -2, 13, -18, -30, 67, -5, 28]
let posNums = []

for(let i=0; i<=arr.length; i++)
if(arr[i] > 0){
    posNums.push(arr[i])
}
console.log(posNums)

//task2
//remove duplicate elements from an array

let arr = [15,2,2,3,7,7,16,23,-11,-11]
let arr2 =[]
for (let i=0; i<arr.length; i++){
    if(!arr2.includes(arr[i])){
        arr2.push(arr[i])
    }
}
console.log(arr2)

//task3
//split an array into two separate arrays, one with even numbers and the other with odd numbers

let arr = [22, 32, 56, 27, 45, 10, 250,3, 13, 99, 22, 7, 2]
let even = [];
let odd = [];

for(let i=0; i<arr.length; i++){
    if (arr[i] % 2 === 0) {
        even.push(arr[i])
    } else {
        odd.push(arr[i])
    }
}
console.log(odd)
console.log(even)
