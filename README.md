# odin-calculator
> See [the corresponding odin page](https://www.theodinproject.com/lessons/foundations-calculator), which provides instructions for this short project

## TODOs
###### STAGE 1: Basic calculations
FUNCTIONAL
- calculation functions:
	- add, subtract, multiply, divide functionality. Test in clg
- input: 
	- Operation => Number, Operator (String), Number
	- variable for each
- function `operate`:
	- takes input, calls calculation function based on operator
###### STAGE 2: Calculator UI
UI
- buttons for digits and operators (for the = too)
- calculator display 
- "clear"-button
###### STAGE 3: Put calculations on display 1
FUNCTIONAL
- function `display` to 
	- put calculation output on display (=connect output to display). Focus on digits for now
	- store content of display in variable for next use (maybe after pressing an operator button)
###### STAGE 4: Put calculations on display 2
FUNCTIONAL
- after `operate` is called, run `display` to update the display with the results of the operation (connect output from `operate` to input from `display`)
- **HARDEST PART:** store all values and call `operate` with them. Inputs like *NUMBER OPERATOR NUMBER OPERATOR NUMBER* are possible. 
  Process the first *NUMBER OPERATOR NUMBER* and use its result for the next *NUMBER* to do *NUMBER OPERATOR NUMBER* again. 
  Update the screen therefore also, after any complete *NUMBER OPERATOR NUMBER* input AND another *OPERATOR* input.
###### STAGE 5: Finalizing
FUNCTIONAL
- the "clear" button clears also all variables. You basically start fresh
- dividing by 0 is not allowed. Results in an Error FOR THE USER
- make sure the tests work
###### STAGE 6: The Extra
- add `.` input to allow for floats as input. Make sure input is checked if floats are syntactically correct
- add possibility to remove misspellings using a `backspace` button
- keyboard support. (GG for that bro...)