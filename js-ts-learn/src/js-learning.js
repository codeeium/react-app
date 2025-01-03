let firstName = 'John'
console.log(firstName)

let age = 50;
console.log(age)

let salary = 100.12
console.log(typeof salary)

let sal = 200
let interest = 10
let sum = sal * interest
console.log(sum)

let isMarried = true
console.log(isMarried)

let isAge = 18
let isVotting = 18

if(isAge >= isVotting){
    console.log('Old enough to vote')
}else{
    console.log('Old enough to vote')
}

let time = 20

if(time<20){
    console.log('Good day')
}else{
    console.log('Good evening')
}

let weekday = 7
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
        console.log('Invalid weekday')
        break;
}

let countUp= 0
while(countUp<5){
    console.log(countUp+'-'+'countUp')
    countUp++
}

let countdown = 5
while(countdown>0){
    console.log(countdown+'-'+'countdown')
    countdown--
}

for (let i=0;i<2;i++){
    for(let j=0;j<2;j++){
        console.log(i+'-'+j)
    }
}