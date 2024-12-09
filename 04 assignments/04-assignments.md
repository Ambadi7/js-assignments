# Assignment 4
## 1. Write a chained if / else-if statement to fill in the following conditions
## val  < 5  =>  Tiny
## val  < 10  =>  Small
## val  < 15  =>  Medium
## val  < 20  => Large
## val  >= 20  => Huge 
``` js
let val = prompt("Enter the Value")
if ( val < 5 ){
    alert(`The value is tiny`)
}
else if( val < 10){
    alert(`The value is small`)
}
else if(val < 15){
    alert(`the vale is Medium`)
}
else if(val < 20){
    alert(`the value is large`)
}
else {
    alert(`the value is huge`)

}
```

## 2.Use the switch case and create an application with the following roles.
## admin => gets full access
## subAdmin => gets access to create and delete courses
## testPrep => gets access to create and delete tests
## user => gets access to consume contents
``` js
let role = prompt("Enter the role")
switch(role){
    case "admin":
        alert(`Get full access`)
        break;
    case "subAdmin":
        alert(`Get access to create and delete courses`)
        break;
    case "testPrep":
        alert(`Get access to create and delete tests`)
        break;
    case "user":
        alert(`Get access to consume contents`)
        break;   
}
```
## 3.Check if the person is eligible for voting
``` js
let age = prompt("Enter the age")
if( age < 18) {
    alert(`You are not eligible for voteing`)
}
else {
    alert(`You are eligible for voteing`)
}
```

## 4.Check if the person has a fever (normal temperature: 98.6F)
``` js
let temp = prompt("Enter the temperature")
if(temp > 98.6){
    alert(`You have fever`)
}
else{
    alert(`You have no fever`)
}
```

## 5.Check if someone has normal temperature: Normal temp= (98 to 98.9)
## 98.1 => normal
## 99 => not normal
## 97.9 => not normal

``` js
let temp = prompt ("Enter the Temperature")
if( 97.9 >= temp ){
    alert(`Not normal`)
}
else if(98 <= temp && 99 > temp){
    alert(`Normal`)
}
else{
    alert(`Not normal`)
}
```

## 6.You need to have 75% attendance to write the exam. Take the total number of classes and the number of attendances from the student and tell him if he can write the exam
```js
let totalClass = prompt("Enter the Total No of Classes")
let totalAttendence = prompt("Enter the total Attendence")
let percentage = (totalAttendence/totalClass)*100
if(percentage >= 75){
    alert(`Your percentage is ${percentage} , You can Write exam`)
}
else{
    alert(`Your percentage is ${percentage} , You cannot Write exam`)
}
```

## 7.
```js
If(5>4){
Console.log(“First if”)
}
If(10 >= 6){
Console.log(“Second if”)
}
```
## What will be the output of the above code?

## output:
## First if
## Second if

## 8.
``` js
if(true){
    console.log("1")
}
if(false){
    console.log("2")
}
if(true){
    console.log("3")
}
```

## What will be the output of the above code?
## Output :
## 1
## 3

## 9,What will be the output of the below code 
``` js
let a = 50
let b = 50
if(a >= 50){
  console.log("a scored half");
  a = a + 1
}
if(b >= 50){
  console.log("b scored half");
  b = b + 1
}

console.log(a + b);
```
## Output:
## a scored half
## b scored half
## 102