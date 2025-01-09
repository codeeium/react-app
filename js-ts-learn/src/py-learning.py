

class Vechicle:
    model = "Ford"

    def honk(self):
        print("Beep Beep")

    def __init__(self, model):
        self.model = model


class Car(Vechicle):
    def __init__(self, model, wheels):
        self.wheels = wheels
        super().__init__(model)

    def drive(self):
        print("Vroom Vroom")




car = Car("Mustang", 4)
car.honk()
car.drive()
