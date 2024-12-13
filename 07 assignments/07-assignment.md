# Assignment 07
### 1.Write a JavaScript function to check whether an `input` is an array. (Array.isArray([1,2,3])) 
``` js
let check = (input) => {
    return Array.isArray(input)
}
console.log(check(["one","two",3]))
```

### 2.Write a JavaScript function that takes an array as an argument and returns the first element of the array.
``` js
let check = (input) =>{
    
    return input[0]
}
console.log(check(["one","two",3]))
```

### 3.Write a JavaScript function that takes an array as an argument and returns the last element of the array.
``` js
let check = (input) =>{
    return input.pop()
}
console.log(check(["one","two",3]))
```

### 4.Write a simple JavaScript function to join all elements of the following array into a string.
### Sample array : myColor = ["Red", "Green", "White", "Black"];
``` js
let myColor = ["Red", "Green", "White", "Black"];
let joinString = (arr) =>{
    return arr.join()
}
console.log(joinString(myColor))

```
### 5.Write a JavaScript program that accepts a number as input and inserts dashes (-) between each. For example, if you accept 925468 the output should be 9-2-5-4-6-8
### (toString().split().join())
```js
let numbers = 925468
let check = (input) => {
    let result = input.toString().split("").join("-")

    return result
}
console.log(check(numbers))
```

### 6.Write a JavaScript function that checks if the given number is even or odd then returns a Boolean value (use: arrow function, return keyword, ternary operator)
``` js
let check = (input) =>{
    let result = input % 2
    return  result == 0 ? true : false;   
}
console.log(check(6))
```

### 7.Create an array of guestList. Write a javascript function that takes the user’s name as an argument and checks whether it is in the guestlist. If yes, return the string “Welcome” else, return “Sorry, good luck next time”.
``` js
let arrGustList = ["Mammotty","Mohanlal","Dulqer Salman"]
let check = (name) =>{
    let result = arrGustList.indexOf(name)
    return result== -1 ? `Sorry! Good luck next time` : `Welcome ${name}`

}
console.log(check("Mammotty"))
```

### 8.Write a javascript function that reverses a given number example: 123456789 => 987654321 (toString(), split(), reverse (), join())
``` js
let numbers = 987654321
let check = (input) =>{
    let result = input.toString().split("").reverse().join("")
    console.log(result)
}
check(numbers)
```

### 9.Write a JavaScript function that accepts a string as a parameter and converts the first letter into upper case.
### Example: “javascript” => “Javascript”
``` js
let str = "javascript"
let convertToCap = (input) => {
    let myArr=input.split("")

    let demoName=myArr.shift()
    let fName = demoName.toUpperCase()
    console.log(`${fName}${myArr.join("")}`)
}
convertToCap(str)
```
