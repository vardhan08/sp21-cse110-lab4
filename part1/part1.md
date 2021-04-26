## Part 1a
1. values added: 20
2. final result: undefined
3. values added: 20
4. Error 
   !--- variable result is visible inside the if block only. ---!
5. Error 
   !--- (re)assignment to a const variable is not allowed. 
6. Error 
   !--- variable result is visible inside the if block only. ---!


## Part 1b
1. 3
2. 150
3. 150
4. [50, 100, 150] 
   The code snippet takes price values from the list "prices", calculates "discount" (in this case 0.5), rounds it off, and pushes to the list "discounted". Since, the list "prices" has the price values 100, 200, and 300, and the discount passed in was 0.5 (50%), first a discount of 50% was applied to each value ([50, 100, 150]), rounded off (nothing happened in this case because the discounted prices are already a whole number to the nearest tens), and this price was pushed to the list "discounted". Since, all variables are declared using "var" keyword, there is no problem regarding the loss os scope of variables.
5. Error 
   !--- variable "i" declared using let keyword are accessible inside the for block only ---!
6. Error 
   !--- variable "discountedPrice" declared using let keyword are accessible inside the for block only ---!
7. 150
8. [50, 100, 150] 
   We got the correct output because the vaiables "discounted" and "finalPrice" are declared with "let" keyword and have a scope to the whole function block. 
9.  Error 
    !--- variable "i" declared using let keyword are accessible inside the for block only ---!
10. 3 
    !--- This is because the length of the list "prices" is 3 and is is a const type variable. ---!
11. [50, 100, 150] 
    We got the correct output because we never reassigned any const variables, hence did not get any errors. On the same note, the const variables declared inside the for loop get initialized at the start of each loop run and die after each loop run. We push the discountedPrice in the discounted list which is const. Note that this is fine because const restricts us from reassignment and not from using functions to the existing object/list. Hence, the scope of those variables is fine as well. 
12. Question 12
    1.  student.name
    2.  student["Grad Year"]
    3.  student.greeting()
    4.  student["Favorite Teacher"].name
    5.  student["courseLoad"][0]
13. Arithmetic
    1.  '32'
        Addition of a string and an int results in concatenation of the string and the int (which gets typecasted to string)
    2. 1 
        Type conversion of string into int followed by the arithmentic subtraction leads to the int answer 1
    3. 3
        null is typecasted to int(int means Number datatype) as 0
    4. '3null'
        null gets typecasted  to string because 3 is a string. Hence, the string '3' is concatenated with 'null' to give the result '3null'.
    5. 4
        true gets typecasted to number 1 resulting in 3 + 1 = 4.
    6. false + null
        For addition, both false and null get typecasted to 0 (unless a string is involved).
    7. 3undefined
        undefined gets typecasted to string literal
    8. NaN
        undefined and '3' gets typecasted to int to support subtraction. undefined when typecasted to number is undefined and  undefined - 3 is undefined.
14. Comparison
    1.  true
        '2' gets converted to a number to give a proper comparison between two numbers
    2.  false
        String comparison happens according to ASCII one letter at a time.
    3.  true
        '2' gets converted to a number upon comparison with a number 2 to result in true
    4.  false
        === does the type check and value check as well.
    5.  false
        true when converted to a number is 1 which is not equal to 2.
    6.  true
        Boolean conversion of a positive number results in true which when compared to true is equal in both type and number.
15. == is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but it also checks datatype and compares two values.
16. Find part1b-question16.js
17. [2, 4, 6]
    The function modifyArray is called with parameters [1, 2, 3] and the callback called "doSomething". Then a new array called "newArr" is created. After that, a loop is run through the passed array and in each loop, we first call the callback function called 'doSomething' is called which returns twice the element in the passed array which is pushed in "newArr". At the end, we return newArr.
18. Find part1b-question18.js
19. 1
    4
    3
    2