
//Play button
let submitBtn=document.querySelector(`button[id='submitBtn']`);
submitBtn.addEventListener('click', playGame);

function playGame(){
    firstTo5(); //runs winLossCount(), which runs calcGameResult() using getUserRPS() and getComputerRPS() as parameters
    console.log(userRPSChoice, compRPSChoice);
    createResults();
}

let userRPSChoice=''
//Get user input (Rock, Paper, or Scissors) 
function getUserRPS(){
    let rpsChoices=document.querySelectorAll(`input[name='userRPSChoice']`);
    for(i=0;i<rpsChoices.length;i++){
        if(rpsChoices[i].checked){
            userRPSChoice=rpsChoices[i].getAttribute('value');
            let firstLetter=userRPSChoice.charAt(0);
            userRPSChoice=userRPSChoice.toLowerCase().replace(firstLetter, firstLetter.toUpperCase());
            console.log (userRPSChoice);
            return userRPSChoice;
        }
    }
}

let compRPSChoice=''
//Computer RPS choice
function computerRNG(){
    let randomNumber=Math.floor(Math.random()*(3-1+1)+1);
    //Return the random number to computerRPS
    return randomNumber; 
}
function getComputerRPS(){
    let compNum=computerRNG();
    
    //RNG 1 = Rock
    if (compNum==1){ 
        compRPSChoice='Rock';
        
        console.log('Computer: ' + compRPSChoice);

        return compRPSChoice; 
    //RNG 2 = Paper
    } else if (compNum==2){ 
        compRPSChoice='Paper';

        console.log('Computer: ' + compRPSChoice);

        return compRPSChoice;
    //RNG 3 = Scissors
    } else if (compNum==3){ 
        compRPSChoice='Scissors'

        console.log('Computer: ' + compRPSChoice);

        return compRPSChoice;
    } else {
        let errorMessage='Sorry, an error occurred.'
        console.log(errorMessage);
    }
}

//Calculate the result of the game
function calcGameResult(user, computer){
    let gameResult='';

    switch(true){
        //Loss
        case (user=='Rock' && computer=='Paper'):
        case (user=='Paper' && computer =='Scissors'):
        case (user=='Scissors' && computer == 'Rock'):
            gameResult='Loss';

            return gameResult;

        //Win
        case (user=='Rock' && computer=='Scissors'):
        case (user=='Paper' && computer =='Rock'):
        case (user=='Scissors' && computer == 'Paper'):
            gameResult='Win';

            return gameResult;

        //Tie
        case (user=='Rock' && computer=='Rock'):
        case (user=='Paper' && computer =='Paper'):
        case (user=='Scissors' && computer == 'Scissors'):
            gameResult='Tie';

            return gameResult;

    }
}

//Function for counting Wins/Losses
let userWinCount=0;
let userLossCount=0;

function winLossCount(){
    let gameResult=calcGameResult(getUserRPS(), getComputerRPS());
    console.log(gameResult);
    
    if(gameResult=='Win'){
        userWinCount++;
    } else if(gameResult=='Loss'){
        userLossCount++;
    }
    return [userWinCount, userLossCount];
}

//Function for playing first to 5
function firstTo5(){
    let winLossReturn=winLossCount();
    let userWinCount=winLossReturn[0];
    let userLossCount=winLossReturn[1];
    console.log('User wins:' + userWinCount);

    if (userWinCount>=5){
        console.log('You win!');
    } else if (userLossCount>=5){
        console.log('You lose...');
    }
}

//Dynamically generating DOM
const container=document.querySelector(`div[id='container']`);

function createResults(){
    const resultDiv=document.createElement('div');
    resultDiv.setAttribute('id', 'resultDiv');
    
    
    //clear the DOM of previous results
    let clearDOM = () => {
        let containerChildList=container.children;
        console.log(containerChildList);
        for(i=0; i<containerChildList.length;i++){
            if(containerChildList[i].tagName=='DIV' && containerChildList[i].id=='resultDiv'){
                container.removeChild(containerChildList[i]);
                
            } else {
                console.log('?')
            }
        }
    }
    

    let displayUserChoice = () => {
        let userChoiceTitle = document.createElement('h3');
        userChoiceTitle.textContent='Your Choice:';
        resultDiv.appendChild(userChoiceTitle);

        let userRPS=userRPSChoice.toLowerCase();
        let userRPSImage=document.createElement('img');
        userRPSImage.setAttribute('src', `images/${userRPS}.png`);
        userRPSImage.classList.add('rpsImage');
        resultDiv.appendChild(userRPSImage);
    }
    clearDOM();
    container.appendChild(resultDiv);
    displayUserChoice();
}


