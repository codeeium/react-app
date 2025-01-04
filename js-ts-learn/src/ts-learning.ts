export {};

type firstName = string
let firstName: firstName = 'John'
console.log(firstName)

type age = number
let age: age = 18
console.log(age)

let sal = 300
let interest = 0.2
let sum = sal + (sal * interest)
console.log(sum)

type isMarried = boolean
let isMarried: isMarried = true
console.log(isMarried)

let isAge = 18
let isVotting = 18

if (isAge >= isVotting) {
    console.log('Old enough to vote')
} else {
    console.log('Old enough to vote')
}

if (20 > 30) {
    console.log('20 is greater than 30')
} else {
    console.log('30 is greater than 20')
}

type time = number

let time: time = 20
if (time < 20) {
    console.log('Good day')
} else {
    console.log('Good evening')
}

type weekday = number
let weekday: weekday = 7
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
let coutup: coutup = 0

while (coutup <= 5) {
    console.log(coutup + '...' + 'coutup')
    coutup++
}


let countdown = 5
while (countdown > 0) {
    console.log(countdown + '...' + 'countdown')
    countdown--
}

type i = number
type j = number

for (let i: i = 0; i <= 5; i++) {
    for (let j: j = 0; j <= 5; j++) {
        console.log(i, j)
    }
}
type i_count = number


for (let i_count: i_count = 0; i_count <= 20; i_count++) {
    if (i_count == 6) {
        continue
    }
    console.log(i_count + '...' + 'i_count')
}

type cars = Array<string>
let cars: cars = ['BMW', 'Mercedes', 'Audi']
cars[0] = 'BMW 123'
console.log(cars[0])

let age2 = [1, 2, 3, 4, 5]
let avg2, sum2 = 0

type i2 = number

for (let i: i2 = 0; i < age2.length; i++) {
    sum2 = sum2 + age2[i]
}

avg2 = sum2 / age2.length
console.log(sum2, age2.length, avg2)


type age4 = Array<number>
let age4: age4 = [20, 22, 18, 35, 48, 26, 87, 70];
let minAge = age4[0]

for(let i = 0; i < age4.length; i++){
    if(age4[i] < minAge){
        minAge = age4[i]
    }
}
console.log(minAge,'minAge')

type fname = string

class myClass {
    public static myMethod(fname: fname) {
        console.log(fname + " :fname from myclass");
    }
}
myClass.myMethod('Jagan')

type age2 = number
function myAge(age: age2) {
    if (age >= 18) {
        console.log('Old enough to vote');
    } else {
        console.log('Not Old enough to vote');
    }
}
myAge(45)
myAge(455)

type x = number
class Returnval{

    static  myMethod(x: x){
        return x + 5
    }
    static  square(x: x){
        return x * x
    }

}

console.log(Returnval.myMethod(100))
console.log(Returnval.square(100))


type x5 = number
type y5 = number
class myadditon{
    static addition(x: x5, y: y5){
        return x + y
    }
}
console.log(myadditon.addition(10,20), 'addition')
console.log(myadditon.addition(10.01,20.03), 'float addition')

type retype = number
function recursive2(x:retype):retype   {
    if (x > 0) {
        return x + recursive2(x - 1)
    } else {
        return 0
    }
}
console.log(recursive2(5))