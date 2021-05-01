
//Play button
let submitBtn=document.querySelector(`button[id='submitBtn']`);
submitBtn.addEventListener('click', buttonClickEvents);

function buttonClickEvents(){
     //runs winLossCount(), which runs calcGameResult() using getUserRPS() and getComputerRPS() as parameters
    clearDOM();
    firstTo5();
    showChoices();
    showResults();
    
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

    //DOM
    let matchResult=document.createElement('p');
    if (userWinCount>=5){
        matchResult.textContent=`Congratulations, you won!`;
        container.appendChild(matchResult);
    } else if (userLossCount>=5){
        matchResult.textContent=`You lost...`;
        container.appendChild(matchResult);
    }
    
}


//Dynamically generating DOM
const container=document.querySelector(`div[id='container']`);
//clear the DOM of previous choices
function clearDOM(){
    let containerChildList=container.children;
    for(i=containerChildList.length-1; i>=0;i--){
        if(containerChildList[i].tagName=='FORM' && containerChildList[i].id=='userRPSForm'){
            break;
        } else {
            container.removeChild(containerChildList[i]); 
        }
        
    }
}

function showChoices(){
    const choiceDiv=document.createElement('div');
    choiceDiv.setAttribute('id', 'choiceDiv');
    container.appendChild(choiceDiv);

    let displayUserChoice = () => {
        let userChoiceDiv=document.createElement('div');
        userChoiceDiv.setAttribute('id', 'userChoiceDiv');
        choiceDiv.appendChild(userChoiceDiv);

            let userChoiceTitle = document.createElement('h3');
            userChoiceTitle.textContent='Your Choice:';
            userChoiceDiv.appendChild(userChoiceTitle);

            let userRPS=userRPSChoice.toLowerCase();
            let userRPSImage=document.createElement('img');
            userRPSImage.setAttribute('src', `images/${userRPS}.png`);
            userRPSImage.classList.add('rpsImage');
            userChoiceDiv.appendChild(userRPSImage);

            let userChoiceText=document.createElement('p');
            userChoiceText.textContent=`${userRPSChoice}`;
            userChoiceDiv.appendChild(userChoiceText);
    }
    let displayComputerChoice = () => {
        let computerChoiceDiv=document.createElement('div');
        computerChoiceDiv.setAttribute('id', 'computerChoiceDiv');
        choiceDiv.appendChild(computerChoiceDiv);

            let computerChoiceTitle = document.createElement('h3');
            computerChoiceTitle.textContent=`Computer's Choice:`;
            computerChoiceDiv.appendChild(computerChoiceTitle);

            let computerRPS=computerRPSChoice.toLowerCase();
            let computerRPSImage=document.createElement('img');
            computerRPSImage.setAttribute('src', `images/${computerRPS}.png`);
            computerRPSImage.classList.add('rpsImage');
            computerChoiceDiv.appendChild(computerRPSImage);

            let computerChoiceText=document.createElement('p');
            computerChoiceText.textContent=`${computerRPSChoice}`;
            computerChoiceDiv.appendChild(computerChoiceText);
    }
    

    displayUserChoice();
    displayComputerChoice();
}

function showResults(){
    let gameResult=calcGameResult(userRPSChoice, computerRPSChoice);
    const resultDiv=document.createElement('div');
    resultDiv.setAttribute('id', 'resultDiv');
    container.appendChild(resultDiv);

    let displayGameResult = () => {
        let resultTitle=document.createElement('h3');
        resultTitle.classList.add('resultTitle');
        if(gameResult=='Win'){
            resultTitle.textContent='Result: You win!';
        } else if (gameResult=='Loss') {
            resultTitle.textContent='Result: Computer wins.';
        } else {
            resultTitle.textContent='Result: Tie!';
        }
        
        resultDiv.appendChild(resultTitle);
    }
    
    let displayRunningScore = () => {
        let userScore=document.createElement('p');
        userScore.textContent=`Your Wins: ${userWinCount}`;
        resultDiv.appendChild(userScore);

        let computerScore=document.createElement('p');
        computerScore.textContent=`Computer's Wins: ${userLossCount}`;
        resultDiv.appendChild(computerScore);
         
    }

    displayGameResult();
    displayRunningScore();
}

