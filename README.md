# odin-calculator
> See [the corresponding odin page](https://www.theodinproject.com/lessons/foundations-calculator), which provides instructions for this short project

## TODOs
###### STAGE 3: display function
FUNCTIONAL
- add functions for the digits to appear on the display when digit buttons are pressed
- after "finished", the content of the display should be stored in a variable. (Finished prob. means the "=" or an operator was entered)
###### STAGE 4: 
FUNCTIONAL
- save first number, operator and second number input and run `operate` on them when "=" is pressed. 
- **HARDEST PART:** 
  - Process the first *NUMBER OPERATOR NUMBER* and use its result for the next *NUMBER* to do *NUMBER OPERATOR NUMBER* again. Inputs like *NUMBER OPERATOR NUMBER OPERATOR NUMBER* are possible. 
  - Update the screen therefore also, after any complete *NUMBER OPERATOR NUMBER* input AND another *OPERATOR* input.
###### STAGE 5: Finalizing
FUNCTIONAL
- the "clear" button clears also all variables. You basically start fresh
- dividing by 0 is not allowed. Results in an Error FOR THE USER
- make sure the tests work
###### STAGE 6: The Extra
- add `.` input to allow for floats as input. Make sure input is checked if floats are syntactically correct
- add possibility to remove misspellings using a `backspace` button
- keyboard support. (GG for that bro...)