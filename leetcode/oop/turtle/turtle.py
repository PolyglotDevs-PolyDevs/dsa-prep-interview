import turtle  

def main(): 
    filename = input("please  enter drawing filename: ")
    t  = turtle.Turtle()
    screen = t.getscreen()
    file = open(filename,"r")
    for row in file: 
        text = row.strip() #what we are doing here to  to trim the whole row
        splitting = row.split(",")
        command = splitting[0]
        if command  == "goto":
            x = float(splitting[1])
            y = float(splitting[2])

            width = float(splitting[3])
            color = splitting[4].strip()
            t.width(width)
            t.pencolor(color)
            t.goto(x,y)
        elif command == "circle":
            radius = float(splitting[1])
            width = float(spllitting[2])
            color = splitting[3].strip()
            t.width(width)
            t.pencolor(color)
            t.circle(radius)

        elif command == "beginfill":
            color = splitting[1].strip()
            t.fillcolor(color)
            t.begin_fill()

        elif command == "endfill":
            t.end_fill()

        elif command == "penup":
            t.penup()
        elif command == "pendown"

        else: 
            print(" Unknown command found n file: ",command)

        file.close()
        t.ht()
        screen.exitonclick()
        print(" program execution completed .")

        if __name__ == "__main__":
            main()

