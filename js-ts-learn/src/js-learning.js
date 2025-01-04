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

for (let i_console=0; i_console<10; i_console= i_console + 2) {
    console.log(i_console+'-'+'i_console')
}

for (let icount=0; icount<10; icount++){
    if(icount == 6){
        continue
    }
    console.log(icount+'-'+'icount')
}

let cars = ['BMW','Mercedes','Audi']
cars[0] = 'BMW 123'
console.log(cars[0]);


let age2 = [1,2,3,4,5]
let avg2,sum2 = 0

for (let i = 0; i < age2.length; i++) {
    sum2 = sum2 + age2[i]
}
avg2 = sum2 / age2.length
console.log(sum2, age2.length, avg2)


let age4 = [20, 22, 18, 35, 48, 26, 87, 70];
let minAge = age4[0];

for(let i = 0; i < age4.length; i++){
    if(age4[i] < minAge){
        minAge = age4[i];
    }
}
console.log(minAge, 'minAge');


class myClass {
    static myMethod(fname) {
        console.log(fname + " :fname");
    }
}
myClass.myMethod('John')

function myAge(age) {
    if(age >= 18){
        console.log('Old enough to vote');
    }else{
        console.log('Old enough to vote');
    }
}
myAge(18)
myAge(50)


class myclassAge {
    static myMethod(age) {
        if(age >= 18){
            console.log('Old enough to vote');
        }else{
            console.log('Old enough to vote');
        }
    }
}
myclassAge.myMethod(18)
myclassAge.myMethod(50)

class myclassAge2{
    static myAge(age) {
        if(age >= 18){
            console.log('Old enough to vote');
        }else{
            console.log('Old enough to vote');
        }
    }
}
myclassAge2.myAge(55)


class valReturn {
    static myMethod(x){
        return x + 5
    }
    static square(x){
        return x * x
    }
}
console.log(valReturn.square(100))
console.log(valReturn.myMethod(100))


function addition(x,y){
    return x + y
}
console.log(addition(10,20), 'addition')
console.log(addition(10.02,20.33), 'float addition')

class returnval {
    static addition(x,y){
        return x + y
}
}
console.log(returnval.addition(10,20), 'addition')
console.log(returnval.addition(10.02,20.33), 'float addition')


function Recursive(x){
    if(x <= 0){
        return 0
    }else{
        return x + Recursive(x - 1)
    }
}
console.log(Recursive(5))


