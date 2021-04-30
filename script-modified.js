//Play button
let submitBtn=document.querySelector(`button[id='submitBtn']`);
submitBtn.addEventListener('click', playGame);


function playGame(){
    getUserRPS();
    getComputerRPS();
    winLossCount();
}
//Get user input (Rock, Paper, or Scissors) 
function getUserRPS(){
    let rpsChoices=document.querySelectorAll(`input[name='userRPSChoice']`);
    for(i=0;i<rpsChoices.length;i++){
        if(rpsChoices[i].checked){
            let userRPSChoice=rpsChoices[i].getAttribute('value');
            let userRPSChoiceFirst=userRPSChoice.charAt(0);
            userRPSChoice=userRPSChoice.toLowerCase().replace(userRPSChoiceFirst, userRPSChoiceFirst.toUpperCase());
            console.log (userRPSChoice);
            return userRPSChoice;
        }
    }

}

//Computer: Generate a random number between 1-3
function computerRNG(){
    let randomNumber=Math.floor(Math.random()*(3-1+1)+1);
    //Return the random number to computerRPS
    return randomNumber; 
}

//Call computerRNG, then assign a string to compRPS based on the randomly-generated number
function getComputerRPS(){
    let compNum=computerRNG();
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

        //Win
        case (user=='Rock' && computer=='Scissors'):
        case (user=='Paper' && computer =='Rock'):
        case (user=='Scissors' && computer == 'Paper'):
            gameResult='Win';
            printResult=`${user} beats ${computer}, you win!`;
            console.log(printResult);

            return gameResult;

        //Tie
        case (user=='Rock' && computer=='Rock'):
        case (user=='Paper' && computer =='Paper'):
        case (user=='Scissors' && computer == 'Scissors'):
            gameResult='Tie';
            printResult=`Tie!`;
            console.log(printResult);

            return gameResult;

    }
}
//Function for counting Wins/Losses
function winLossCount(){
    let userWinCount=0;
    let userLossCount=0;
    let gameResult=displayResult(getUserRPS(), getComputerRPS());
    console.log(gameResult);
    
    if(gameResult=='Win'){
        userWinCount++;
        return userWinCount;
    } else if(gameResult=='Loss'){
        userLossCount++;
        return userLossCount;
    }
}

