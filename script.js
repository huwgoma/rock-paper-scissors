//Get user input (Rock, Paper, or Scissors) 
function getUserRPS(){
    let userInput = prompt('Please enter Rock, Paper, or Scissors:', '');
    userInput=userInput.toLowerCase(); // Convert to lowercase
    let firstLetter=userInput.charAt(0); // Get the first letter of user input
    userInput=userInput.replace(firstLetter, firstLetter.toUpperCase());

    console.log('Player: ' + userInput);
    return userInput; // Return userInput(R/P/S) to the function caller (displayResult)
}

//Computer: Generate a random number between 1-3
function computerRNG(){
    let randomNumber=Math.floor(Math.random()*(3-1+1)+1);
    return randomNumber; //Return the random number to computerRPS
}
//Call computerRNG, then assign a string to compRPS based on the randomly-generated number
function computerRPS(compNum){
    compNum=computerRNG();
    let compRPS=''
    if (compNum==1){ //RNG 1 = Rock
        compRPS='Rock';
        
        console.log('Computer:' + compRPS);
        return compRPS; //Return computer R/P/S to the function caller (displayresult)
    } else if (compNum==2){ //RNG 2 = Paper
        compRPS='Paper';

        console.log('Computer:' + compRPS);
        return compRPS;
    } else if (compNum==3){ //RNG 3 = Scissors
        compRPS='Scissors'

        console.log('Computer:' + compRPS);
        return compRPS;
    } else {
        let errorMessage='Sorry, an error occurred.'
        console.log(errorMessage);
    }
}




function displayResult(user, computer){
    let result=''

    switch(true){
        //Loss
        case (user=='Rock' && computer=='Paper'):
        case (user=='Paper' && computer =='Scissors'):
        case (user=='Scissors' && computer == 'Rock'):
            result=`${computer} beats ${user}, you lose!`;
            console.log(result);
            break;
        //Win
        case (user=='Rock' && computer=='Scissors'):
        case (user=='Paper' && computer =='Rock'):
        case (user=='Scissors' && computer == 'Paper'):
            result=`${user} beats ${computer}, you win!`;
            console.log(result);
            break;
        //Tie
        case (user=='Rock' && computer=='Rock'):
        case (user=='Paper' && computer =='Paper'):
        case (user=='Scissors' && computer == 'Scissors'):
            result=`Tie!`;
            console.log(result);
            break;
    }
}

displayResult(getUserRPS(), computerRPS());

let button=document.querySelector('button');
button.onclick=function(){
    displayResult(getUserRPS(), computerRPS());
}