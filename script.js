//Pseudo code ish

//For the Password Button:
    //On click -->
    //prompt("How many characters will your password be? Choose a number from 8 to 128.")
    //after choose length then...
    //prompt("What types of characters do you want: lowercase, uppercase, numeric, and/or special?")
        //could maybe nest above prompt in a for loop, so that they make a yes/no choice on each character type
        //so make array with choices of lowercase, upper, numeric, special, cycle through them asking about each
        //would need to write it so that they need to choose at least 1

        //once all prompts are answered, a password is generated somehow

var generateButton = document.querySelector("#passwordButton");


var passwordGenerator = function() { //this will be linked to the html button


    while (true) {
        var passwordLength = prompt("How many characters will your password be? Choose a number from 8 to 128 inclusive.")
        if (passwordLength <= 128 && passwordLength >= 8) {
           alert("Sweet! Your password will be "+passwordLength+" characters long!");
           parseInt(passwordLength);
            break;
                
        } else {
           alert("Please enter a valid integer between 8 and 128 inclusive!");
        }
        }

    var passwordCharacters = "";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberSet = "0123456789";
    var specialSet = "~!@#$%^&*?";
    var potentialCharacters = [lowercase, uppercase, numberSet, specialSet];

    for (var i = 0; i < 4; i++) {
        var userChoice = confirm("Do you want the following as potential characters in your password?: "+potentialCharacters[i]);
        
        if (userChoice) {
            passwordCharacters += potentialCharacters[i];
        }   //but how to make it so they choose AT LEAST ONE of these muhfuggs?
        else {
            alert("No worries, mate.");
        }
/*
        if (i === 0 && userChoice) {
            alert("Bodacious! We'll include lowercase letters in your password!");
            passwordCharacters += lowercase;
            
        } 
        else if (i === 1 && userChoice) {
            alert("Radical! We'll include uppercase letters in your password!");
            passwordCharacters += uppercase;
            
        }
        else if (i === 2 && userChoice) {
            alert("Mathematical! We'll include numeric characters in your password!");
            passwordCharacters += numberSet;
            
        }
        else if (i === 3 && userChoice) {
            alert("Gnarly! We'll include special characters in your password!");
            passwordCharacters += specialSet;
            
        }
        else if ((i === 0 && userChoice === false) && (i === 1 && userChoice === false) && (i === 2 && userChoice === false) && (i === 3 && userChoice === false)) {

        }
        else {
            alert("No worries, mate. Cheers.");
        }
        */        
    }
    var n = passwordCharacters.length;
    var actualPassword = "";
    for (var i = 0; i < passwordLength; i++) { 
        actualPassword += passwordCharacters.charAt(Math.floor(Math.random()* n));
        /*So, above code says that for i starting at zero and running until passwordLength - 1 (i.e. it will iterate 'passwordLength' times), 
        it will add a random character from the list of passwordCharacters created earlier to the empty string 'actualPassword'. 
        
        */
    }
    
    /*
    var lowerChoice = confirm("Do you want your password to contain lowercase letters?");
        if (lowerChoice) {
            alert("Bodacious! We'll include lowercase letters in your password!");
            passwordCharacters += lowercase;
        }  
        else {
            alert("No worries, my dude.")
     
        } 

        /*
    var upperChoice = confirm("Do you want your password to contain lowercase letters?");
    if (lowerChoice) {
        alert("Bodacious! We'll include lowercase letters in your password!");
        passwordCharacters.push(lowercase);
    }  
    else {
        alert("No worries, my dude.")
    } */

    
 /*somehow add selected password criteria to...something
 could I somehow create an object with all of my above arrays,
 then Math.random(arrays)*n? This wouldn't guarantee that I would have one of each character type though...
 Perhaps I could cycle through the object, taking a random piece from each array in it, then 
 adding that to a concatenated string which is the password? I for loop this until the 
 prompted length has been reached, then exit the loop and return the password into the output box?
 */

alert("Drumroll, please, while Password Generator: 5000 works its magic! bdrbdrbdrbdrbdrbdrbdr....")
alert("Awwww SNAP! Your new password is ready! Write it down so you don't forget it like I always do!");
document.querySelector(".passwordContainer").innerHTML = actualPassword; //this prints the password into the container labeled "Your New Password"

return actualPassword;  //not even sure I need this lolol

}

generateButton.addEventListener("click", passwordGenerator);
