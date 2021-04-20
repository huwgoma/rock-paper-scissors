//Get user input (Rock, Paper, or Scissors) 
function getUserRPS(){
    let userInput = prompt('Please enter Rock, Paper, or Scissors:', '');
    userInput=userInput.toLowerCase(); // Convert to lowercase
    let firstLetter=userInput.charAt(0); // Get the first letter of user input
    userInput=userInput.replace(firstLetter, firstLetter.toUpperCase());

    console.log('Player: ' + userInput);

    //If user input is not rock/paper/scissors, re-run getUserRPS()
    if(userInput!='Rock'&& userInput!='Paper'&& userInput!='Scissors'){
        alert('Please enter either Rock, Paper, or Scissors!');
        //Re-run the user input function
        //Return the value of getUserRPS() to its function caller (displayResult)
        return getUserRPS();
    } else {
        // Return userInput(R/P/S) to the function caller (displayResult)
        return userInput; 
    }
    
}

//Computer: Generate a random number between 1-3
function computerRNG(){
    let randomNumber=Math.floor(Math.random()*(3-1+1)+1);
    //Return the random number to computerRPS
    return randomNumber; 
}

//Call computerRNG, then assign a string to compRPS based on the randomly-generated number
function computerRPS(compNum){
    compNum=computerRNG();
    let compRPS=''
    //RNG 1 = Rock
    if (compNum==1){ 
        compRPS='Rock';
        
        console.log('Computer: ' + compRPS);
        //Return computer R/P/S to the function caller (displayResult)
        return compRPS; 
    //RNG 2 = Paper
    } else if (compNum==2){ 
        compRPS='Paper';

        console.log('Computer: ' + compRPS);
        return compRPS;
    //RNG 3 = Scissors
    } else if (compNum==3){ 
        compRPS='Scissors'

        console.log('Computer: ' + compRPS);
        return compRPS;
    } else {
        let errorMessage='Sorry, an error occurred.'
        console.log(errorMessage);
    }
}

//Display the result of the game
function displayResult(user, computer){
    let gameResult='';
    let printResult='';

    switch(true){
        //Loss
        case (user=='Rock' && computer=='Paper'):
        case (user=='Paper' && computer =='Scissors'):
        case (user=='Scissors' && computer == 'Rock'):
            gameResult='Loss';
            printResult=`${computer} beats ${user}, you lose!`;
            console.log(printResult);
            return gameResult;
            break;
        //Win
        case (user=='Rock' && computer=='Scissors'):
        case (user=='Paper' && computer =='Rock'):
        case (user=='Scissors' && computer == 'Paper'):
            gameResult='Win';
            printResult=`${user} beats ${computer}, you win!`;
            console.log(printResult);
            return gameResult;
            break;
        //Tie
        case (user=='Rock' && computer=='Rock'):
        case (user=='Paper' && computer =='Paper'):
        case (user=='Scissors' && computer == 'Scissors'):
            gameResult='Tie';
            printResult=`Tie!`;
            console.log(printResult);
            return gameResult;
            break;
    }
}

//Game looping function; play 5 times, then announce the overall winner at the end.
function gameLoop(){
    let userWinCount=0;
    let compWinCount=0;
    for(i=1;i<=5;i++){
        displayResult(getUserRPS(), computerRPS());



        /*if(gameResult=='Loss'){
            userWinCount+=1;
            console.log(userWinCount);
        }*/
    }
}

//Play button
let button=document.querySelector('button');
button.onclick=function(){
    gameLoop();
}