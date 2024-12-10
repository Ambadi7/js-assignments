# Assignment 05
## 1,Write short notes on string methods with code 
## -toLowerCase() : This method is used to convert the uppercase letter to lowercase
##          stringVariable.toLowerCase()
## -toUpperCase() :This  method is used to convert the lowercase letter to uppercase
##          stringVariable.toUpperCase()
## -substring() : This method is used to extracts characters, between two indices (positions), from a string, and returns the substring. start to end(exclusive)
##          stringVariable.substring(start,end)
## -replace() : This method is used to replace the words
##          stringVariable.replace(searchValue , newValue)
## -trim() : This method is used to remove whitespace both end
##          stringVariable.trim()
## -split() : This method is used to splits a string into an array of substrings.
##          stringVariable.split(seprator,limit)
## -slice() : This method is used to slice words start to end 
##          stringVariable.toLowerCase(start,end)

## 2.create a simple app that takes the user’s name and greets him/her after capitalizing the first letter of the user’s name and changing the rest of the letters into lowercase (toUpperCase(), toLowerCase(), slice(), length property, string concatenation)
``` JS
let userName = prompt("Enter the user name")
let nameLength = userName.length
let fName = userName.slice(0,1).toUpperCase()
let sName = userName.slice(1,nameLength).toLowerCase()
let name = fName + sName
alert(`Hey ${name} Good Morning`)
```