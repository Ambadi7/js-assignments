# Assignment - 08
## 1.Write short notes on the below with code examples
## while loop
### The while loop loops through a block of code as long as a specified condition is true.
``` js
while (condition) {
  // code block to be executed
}
```
## do while loop
### The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
``` js
do {
  // code block to be executed
}
while (condition);
```
## for loop
### Loops can execute a block of code a number of times. JavaScript for loop is a control flow statement that allows code to be executed repeatedly based on a condition. It consists of three parts: initialization, condition, and increment/decrement.

```js 
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```
### Expression 1 is executed (one time) before the execution of the code block.

### Expression 2 defines the condition for executing the code block.

### Expression 3 is executed (every time) after the code block has been executed.

## for in loop
### The JavaScript for in statement loops through the properties of an Object:
``` js
for (key in object) {
  // code block to be executed
}

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
```
## for of loop
### The JavaScript for of statement loops through the values of an iterable object.
### It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
``` js
for (variable of iterable) {
  // code block to be executed
}

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```

## 2.write a function that takes an array of numbers as an argument and returns the sum of its elements.
``` js
let  sum = (inputArr) =>{
    let total = 0;
    for(x of inputArr){
        total = total + x
        
    }
    
       return total
    }
console.log(`sum is ${sum([1,2,3,4,5])}`)
```

## 3.Create a function that filters strings in an array by their length
``` js
str =["one","two","three",4,5,6]
for(i=0;i<str.length;i++){
    if(typeof(str[i]) == "string"){
        console.log(str[i])
    }
   
}
```

## 4.Create a function that returns a new array containing the square roots of each number in the original array [1,4,9,16,25](Math.sqrt())
``` js
let squareRoot = (inputArr) =>{
    let outputArr = []
    for (x of inputArr){
        sRoot = Math.sqrt(x)
        
        outputArr.push(sRoot)
        
    }
    return outputArr
}

let arr = [1,4,9,16,25]
console.log(squareRoot(arr))
```

## 5.Create an array with 5 student’s names. Then create a function that takes two parameters (allStudents and studentName). Iterate over all the students and find that specific user ‘studentName’

``` js
let studentList = ["ambadi","jhon","manu","james","enzo"]
let check = (allStudents,studentName)  => {
    for(let x of allStudents){
        if(x ==  studentName){
            console.log(`User Found, ${studentName} `)
        }
        else{
            console.log(`User not Found,${studentName} `)
        }
        break
    }

}
check(studentList,"ambadi")
```

## 6.Write a function that prints the number 1 to 100. But for multiples of 3, print Fizz instead of the number, and for multiples of 5, print Buzz. For the numbers that are multiples of both 3 and 5, print FizzBuzz(use while loop)
``` js
let n=1;
let arr=[]
while(n<=100){
    if(n% 3 == 0 && n % 5 == 0){
        arr.push("fizzbuzz")
    }
    else if(n % 5 == 0){
        arr.push("buzz")
    }
    else if(n% 3 == 0 ){
        arr.push("fizz")
    }
    else{
        arr.push(n)
    }

    n++
 }
console.log(arr)
```