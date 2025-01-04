firstName = 'John'
print(firstName)

age = 50
print(age)

salary = 1000.022
print(salary)

sales = 200
interest = 10
sum = sales + interest
print(sum)

isSingle = True
print(isSingle)
isBacholore = False
print(isBacholore)

isAge = 18
isVotting = 18

if (isAge == isVotting):
    print("Old enough to vote")
else:
    print("Old enough to vote")
if (20 > 30):
    print("20 is greater than 30")
else:
    print("30 is greater than 20")

time = 20

if (time < 20):
    print("Good day")
else:
    print("Good evening")

weekday = 7
if (weekday == 1):
    print("Monday")
elif (weekday == 2):
    print("Tuesday")
elif (weekday == 3):
    print("Wednesday")
elif (weekday == 4):
    print("Thursday")
elif (weekday == 5):
    print("Friday")
elif (weekday == 6):
    print("Saturday")
elif (weekday == 7):
    print("Sunday")
else:
    print("Invalid weekday")

countup = 0
while (countup < 5):
    print(str(countup) + '...' + 'countup')
    countup = countup + 1

countdown = 5
while (countdown > 0):
    print(str(countdown) + '...' + 'countdown')
    countdown = countdown - 1

for i in range(5):
    for j in range(5):
        print(i, j)

for countdown_range in range(0, 20, 2):
    print(str(countdown_range) + '...' + 'countdown_range')

for irange in range(10):
    if (irange == 6):
        continue
    print(str(irange) + '...' + 'irange')

cars = ["Ford", "Volvo", "BMW"]
print(cars[0])
cars[0] = "Ford 123"
print(cars[0])

age = [18, 20, 22, 24, 26, 28]
print(age[0])
sum = 0
for i in range(len(age)):
    print(age[i])
    sum += age[i]
print(sum, len(age))
avg = sum / len(age)
print(avg)


age = [20, 22, 18, 35, 48, 26, 87, 70];
minAge = age[0];
for i in age:
    if i < minAge:
        minAge = i
print(minAge,'minAge')


myNumbers = [{1, 2, 3, 4}, {5, 6, 7}]
for i in myNumbers:
    print(i)



def myMethod(fname):
    print(fname + " :fname")
def main():
    myMethod("Jagan")

if __name__ == '__main__':
    main()
# myMethod("Jagan")


def myAge(age):
    if age > 18:
        print("Old enough to vote")
    else:
        print("Old enough to vote")
myAge(10)
myAge(20)
myAge(40)
myAge(50)


def returnVal(x):
    return x + 10
def square(x):
    return x * x
print(returnVal(10))
print(square(10))


def addition(x, y):
    return x + y
print(addition(10, 20))
print(addition(10.01, 20.02))

def Recursive(k):
    if k > 0:
        result = k + Recursive(k - 1)
        print(result)
    else:
        result = 0
    return result
Recursive(5)