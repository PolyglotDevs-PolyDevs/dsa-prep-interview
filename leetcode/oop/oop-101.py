#implementing the dog class and girl class 

class Dog:
    def __init__(self,name,month, day,year,speakText):
        self.name = name 
        self.day = day 
        self.month = month 
        self.year = year 
        self.speakText = speakText 

    def speak(self):
        return self.speakText
    def getName(self):
        return self.name 
    def birthDate(self):
        return str(self.month) + "/" + str(self.day) + "/" + str(self.year)

    def changeBark(self,bark):
        self.speakText = bark 

    def __add__(self,otherDog):
        return Dog(" Pupy of " + self.name + "and " + otherDog.name,
        self.month,
        self.day,
        self.year+1,
        self.speakText+otherDog.speakText
        )



def main():
    boyDog = Dog(" Mesa", 5 , 14, 2004," WOOOF")
    girlDog = Dog(" Seequoia", 5,6,2004,"barkbakr")
    print(boyDog.speak()) 
    print(girlDog.speak())

    if __name__ == "__main__":
        main()
        