//Generate a random number between 1-3
function computerRNG(){
    let randomNumber=Math.floor(Math.random()*(3-1+1)+1);
    return randomNumber;
}
//Call computerRNG, then assign a string to compRPS based on the randomly-generated number
function computerRPS(){
    let compNum=computerRNG();
    console.log(compNum)
    let compRPS=''
    if (compNum==1){ //RNG 1 = Rock
        compRPS='Rock';
        
        console.log(compRPS);
    } else if (compNum==2){ //RNG 2 = Paper
        compRPS='Paper';

        console.log(compRPS);
    } else if (compNum==3){ //RNG 3 = Scissors
        compRPS='Scissors'

        console.log(compRPS);
    } else {
        let errorMessage='Sorry, an error occurred.'
        console.log(errorMessage);
    }
}
computerRPS();