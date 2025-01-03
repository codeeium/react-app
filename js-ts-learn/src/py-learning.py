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

