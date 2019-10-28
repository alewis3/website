# Patrick Lewis and Ray Nadeau
# State Capitals
# Project 2, COSC 1323
#
import shelve

USER_INPUT_MIN = 1
USER_INPUT_MAX = 4

PATH1 = "statecapital.dat"
PATH2 = "username.txt"

def main(): 
    
    # Exception handling for opening the file
    try :
        file1 = shelve.open(PATH1, "r")   #Open the file to read
        states = file1["states"]     # Saves the states dictionary in a variable
        capitals = file1["capitals"] # Saves the capitals dictionary in a file
        file1.close()                # Close the file
        
    except Exception as e :
        print("Error: ", e)         # Prints error message
        quit()   
    
    try :
        file2 = open(PATH2, "r")        # Opens the text file with users name and favorite state
    except Exception as e :
        print("Error:", e)              # Prints error message
        quit()
    
    for line in file2 :                 # Reads the text file
        print(line)
        
    file2.close()                       # Closes the file
    
    print("Welcome to the State Capital Directory! Pick an option: ")

    selection = 0              
    
    # while loop for the menu and selection
    while (selection != 4) :
        
        print("""
        1. Look up a city by state
        2. Look up a state by city
        3. Print all city/state directories
        4. Exit""")
        
        selection = 0
        
        # Gets the selection and checks for exceptions
        while (selection < USER_INPUT_MIN or selection > USER_INPUT_MAX) :
            
            # Asks the user for a number between the constraints
            print("\nPlease enter a number between %d and %d: " % (USER_INPUT_MIN, USER_INPUT_MAX))
            selection = input()
            
            # Checks if the answer is a number
            if (selection.isdigit() == True) :
                selection = int(selection)
            
            # if the answer is not a number it gives an error message
            else :   
                print("Error:", selection, "is not a number.")
                selection = 0
            
                continue
        
            # Checks if the number id out of range
            if (selection < USER_INPUT_MIN or selection > USER_INPUT_MAX) :
                
                print("Error:", selection, "is out of range.")
                
        # Evaluates the selection
        
        #If the user chooses 1, it looks up a city by state
        #
        if (selection == 1) :
            
            print("\nYou chose: Look up city by state.")
            
            a = 0               # Create a variable for the while loop
            while (a == 0) :    # While loop for the try/except so they can try 
                                # until they get it right
                try :           # Exception handling to enter state
                    state = input("Please enter state: ")
                    state = state.capitalize()  # Capitalizes the input
                
                    print("The capital of", state, "is: ", states[state])
                    a = 1       # Breaks out of the while loop
                    
                except Exception as e :
                    print("Error: ", e)
        
        # If the user chooses 2, it looks up a state by a city
        #    
        elif (selection == 2) :
            
            print("\nYou chose: Look up state by city.")
            
            b = 0               # Creates a variable for the while loop
            while (b == 0) :    # While loop for the try/except so they can try
                                # until they get it right
                try :           # Exception handling to enter capital
                    city = input("Please enter city: ")
                    city = city.capitalize()    # Capitalizes the input
                    
                    print(city, "is the capital of", capitals[city])
                    b = 1       # This breaks out of the while loop
                except Exception as e :
                    print("Error: ", e)
        
        # If the user chooses 3, it prints all directories
        #    
        elif (selection == 3) :
            
            print("\nYou chose: Print all city/state directories.") 
            
            for state in states : #Prints all city/state combinations  
                print(state, ":", states[state])
        
        # If the user chooses 4, it exits the program
        #
        elif (selection == 4) :
            
            try :
                file2 = open(PATH2, "w")        # Opens the text file for write
            except Exception as e :
                print("Error:", e)              # Prints error message and quits program
                quit()
            
            # Asks the user for their name and favorite state
            #
            name = input("Please enter your name:")
            faveState = input("Please enter your favorite state:")
            
            # Writes the information to a file
            file2.write("The user's name is: ")
            file2.write(name)
            file2.write("\nThe user's favorite state is: ")
            file2.write(faveState)
            file2.write("\n")
            file2.close()
            
            print("Goodbye!")        
main()