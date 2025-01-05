
class info:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_info(self):
        print(self.name, self.age)

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}"


person = info("John", 30)
person.print_info()
print(person)