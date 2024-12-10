let userName = prompt("Enter the user name")
let nameLength = userName.length
let fName = userName.slice(0,1).toUpperCase()
let sName = userName.slice(1,nameLength).toLowerCase()
let name = fName + sName
alert(`Hey ${name} Good Morning`)