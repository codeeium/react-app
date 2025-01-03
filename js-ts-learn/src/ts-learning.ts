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

type weekday = number
let weekday:weekday = 7
switch (weekday) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Invalid day')
        break;
}

type coutup = number
let coutup:coutup = 0

while(coutup<=5){
    console.log(coutup+'...'+'coutup')
    coutup++
}


let countdown = 5
while(countdown > 0){
    console.log(countdown+'...'+'countdown')
    countdown--
}

type i = number
type j = number

for(let i:i= 0; i<=5; i++){
    for (let j:j = 0; j <= 5; j++) {
        console.log(i,j)
    }
}