export {};

type firstName = string
let firstName: firstName = 'John'
console.log(firstName)

type age = number
let age: age= 18
console.log(age)

let sal = 300
let interest = 0.2
let sum = sal + (sal * interest)
console.log(sum)

type isMarried = boolean
let isMarried:isMarried = true
console.log(isMarried)

let isAge = 18
let isVotting = 18

if(isAge >= isVotting){
    console.log('Old enough to vote')
}else{
    console.log('Old enough to vote')
}

if(20>30){
    console.log('20 is greater than 30')
}else{
    console.log('30 is greater than 20')
}

type time = number

let time:  time = 20
if(time < 20){
    console.log('Good day')
}else{
    console.log('Good evening')
}
