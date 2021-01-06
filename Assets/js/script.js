/*Apologies in advance: I'm not sure what 'best practices' are for quality comments, and
I tend to ramble a lot. So yeah, sorry about that.*/


//This variable is set to the button labeled "Generate Password" in the HTML. It will be 
var generateButton = document.querySelector("#passwordButton");

//This the main function of the button, which will be referenced in the generateButton.addEventListener() at the end of the script.
var passwordGenerator = function() { 

/*Basically, this while loop will continue cycling until the user inputs a valid integer between 8 and 128, inclusive.
i.e., if the user chooses 5, it will alert the user that their choice was invaled and prompt the user again for another choice. 
Likewise, if the user enters any string, it will once again show the alert and prompt the user for a valid number. */
    while (true) {

        //passwordLength will equal the total length of the user's generated password.
        var passwordLength = prompt("How many characters will your password be? Choose a number from 8 to 128 inclusive.")

        if (passwordLength <= 128 && passwordLength >= 8) {
           alert("Mathematical! Your password will be "+passwordLength+" characters long!");
           parseInt(passwordLength); //Not sure that I need this but it's here just in case.
            break;
                
        } else {
           alert("Please enter a valid integer between 8 and 128 inclusive!");
        }
        }
    
    /*These variables represent potential characters the user will choose from. The empty string passwordCharacters will eventually
    become the pool of characters from which the password will be generated.
    The potentialCharacters will be used in a for loop to ask the user, in turn, if they wish for those characters to be included in the pool.*/
    var passwordCharacters = "";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberSet = "0123456789";
    var specialSet = "~!@#$%^&*?";
    var potentialCharacters = [lowercase, uppercase, numberSet, specialSet];
   
    
    while (passwordCharacters === "") { 
        /*so while passwordCharacters is still empty, stay in the loop! This ensures the user chooses AT LEAST ONE
        of the set of potential characters in the array. Otherwise, the computer will keep asking for them. */
     for (var i = 0; i < potentialCharacters.length; i++) {

         /*this for loop and confirm statement combo will cycle through the potentialCharacters array, asking the user if they want that type of 
         character included in their password. */
        var userChoice = confirm("Do you want the following as potential characters in your password?: "+potentialCharacters[i]);
        
        if (userChoice) {
            /*if the user DOES want that type of character in the password, then passwordCharacters will add that string of characters into its string*/
            passwordCharacters += potentialCharacters[i];
             //just confirming to the user that we will include those characters in the password.
            alert("Radical! We'll include "+potentialCharacters[i]+" in your password!");
        }   
        else { //This alert happens if they decline to include the specified character set in their password.
            //This alert and loop will keep happening until the user selects at least one of the options.
            alert("No worries, mate. Just please select at least one of these options!");
        }
    }
}
           
    //declaring a variable equal to the length of the string of potential password characters as chosen by the user in above while loop
    var n = passwordCharacters.length; 

    //this empty string will eventually become the user's password
    var actualPassword = ""; 

    /*So basically, below code says that for i starting at zero and running until passwordLength - 1 (i.e. it will iterate 'passwordLength' times, as desired by user), 
    it will add a random character from the list of passwordCharacters, created just above by the user, to the empty string 'actualPassword'. */
    for (var i = 0; i < passwordLength; i++) { 
        actualPassword += passwordCharacters.charAt(Math.floor(Math.random()* n));
    }
        
    
    
//Just some cute lil alerts.
alert("Drumroll, please, while Password Generator: 5000 works its magic! bdrbdrbdrbdrbdrbdrbdr....")
alert("Awwww SNAP! Your new password is ready! Write it down so you don't forget it like I always do!");

//this prints the password into the container labeled "Your New Password", replacing the text there by default.
document.querySelector("#passwordP").innerHTML = actualPassword; 

return actualPassword;  //not even sure I need this lolol

}

//This is the main event! Literally! When the Generate Password button is clicked in HTML, that big ol' function above does its thang!
generateButton.addEventListener("click", passwordGenerator);
