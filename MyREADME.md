# Password Generator - Homework 3

An application that generates a random password for the user, built by Seth Zygarlicke.

# Purpose of Repository

This is the third required homework assignment for the boot camp. The project necessitated the use of Javascript to create a random password generator using input from the user. After generating the password, the application prints it to the screen for the user to use. The application must work on all screen sizes and require accurate and sufficient input from the user.

# Description

The repository consists of three main components - the html, the css, and the javascript. The html is fairly simple consisting of a header that labels the page 'Password Generator: 5000', a container holding all of the relevant items for the password generation, and cool space-themed background image. 

The main feature of the html page is the button labeled "Generate Password". Upon click, this button will launch the function elaborated in the javascript file. This function will prompt the user to input a number between 8 and 128 inclusive. If the user fails to do so (e.g. with a 5 or a string), the browser will continue asking until a valid integer is submitted. This will be the password length.

Once a length is established, the browser then blasts the user with a series of prompts. These prompts ask the user, in turn, if they wish to include the set of lowercase letters, the set of uppercase letters, the set of numeric chracters, and/or a set of special characters. The broswer requires the user to choose at least one of these set of characters, otherwise it will continue blasting the user with prompts to choose a set.

The user's choices of characters will be pooled together. The function then chooses, randomly, a set of characters from this pool equal to the length chosen by the user in the first prompt. Upon completion, the password will print into the dashed box in the middle of the main container for the user to copy and use at their leisure. 

# Files in Repository

The index.html file contains the base code for the webpage and stands outside any other folders. The style.css file will be found in the 'css' folder which is housed inside the 'Assets' folder. Similarly, the script.js file is found in its 'js' folder which rests inside the 'Assets' folder. 

Also included in the Assets folder is the 'demo' picture for this assignment, the cool space-background image, and screenshots of the created page: one at base (Password-Generator-Base.png) and another after a random 128-character password has been generated and printed to the page. These screenshots are shown below.

The Develop folder can be largely ignored. It contains the files given as examples to get the ball rolling in this assignment. They have no bearing on the created application, but were left in for the sake of completeness by Seth. 

# Links and Screenshots

https://elderbass.github.io/Password_Generator/

https://github.com/ElderBass/Password_Generator.git


Before password is generated:

![Password Generator at base](./Assets\Password-Generator-Base.png "No Password")

After a 128-character password is generated:

![Password Generator with a rand 128 character password](./Assets\Generator-With-128-Password.png "With 128 Password" )


Note that these above images appear just fine in the VS Code preview, but do not appear on Git Hub. Not sure why. 
