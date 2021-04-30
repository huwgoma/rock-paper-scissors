
//Play button
let submitBtn=document.querySelector(`button[id='submitBtn']`);
submitBtn.addEventListener('click', playGame);

function playGame(){
    firstTo5(); //runs winLossCount(), which runs calcGameResult() using getUserRPS() and getComputerRPS() as parameters
    console.log(userRPSChoice, computerRPSChoice);
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

let computerRPSChoice=''
//Computer RPS choice
function computerRNG(){
    let randomNumber=Math.floor(Math.random()*(3-1+1)+1);
    //Return the random number to computerRPS
    return randomNumber; 
}
function getComputerRPS(){
    let computerNum=computerRNG();
    
    //RNG 1 = Rock
    if (computerNum==1){ 
        computerRPSChoice='Rock';
        
        console.log('Computer: ' + computerRPSChoice);

        return computerRPSChoice; 
    //RNG 2 = Paper
    } else if (computerNum==2){ 
        computerRPSChoice='Paper';

        console.log('Computer: ' + computerRPSChoice);

        return computerRPSChoice;
    //RNG 3 = Scissors
    } else if (computerNum==3){ 
        computerRPSChoice='Scissors'

        console.log('Computer: ' + computerRPSChoice);

        return computerRPSChoice;
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
            }
        }
    }
    clearDOM();
    container.appendChild(resultDiv);

    let displayUserChoice = () => {
        let userDiv=document.createElement('div');
        userDiv.setAttribute('id', 'userResultDiv');
        resultDiv.appendChild(userDiv);

            let userChoiceTitle = document.createElement('h3');
            userChoiceTitle.textContent='Your Choice:';
            userDiv.appendChild(userChoiceTitle);

            let userRPS=userRPSChoice.toLowerCase();
            let userRPSImage=document.createElement('img');
            userRPSImage.setAttribute('src', `images/${userRPS}.png`);
            userRPSImage.classList.add('rpsImage');
            userDiv.appendChild(userRPSImage);

            let userChoiceText=document.createElement('p');
            userChoiceText.textContent=`${userRPSChoice}`;
            userDiv.appendChild(userChoiceText);
    }
    let displayComputerChoice = () => {
        let computerDiv=document.createElement('div');
        computerDiv.setAttribute('id', 'computerResultDiv');
        resultDiv.appendChild(computerDiv);

            let computerChoiceTitle = document.createElement('h3');
            computerChoiceTitle.textContent=`Computer's Choice:`;
            computerDiv.appendChild(computerChoiceTitle);

            let computerRPS=computerRPSChoice.toLowerCase();
            let computerRPSImage=document.createElement('img');
            computerRPSImage.setAttribute('src', `images/${computerRPS}.png`);
            computerRPSImage.classList.add('rpsImage');
            computerDiv.appendChild(computerRPSImage);

            let computerChoiceText=document.createElement('p');
            computerChoiceText.textContent=`${computerRPSChoice}`;
            computerDiv.appendChild(computerChoiceText);
    }
    
    displayUserChoice();
    displayComputerChoice();
}


