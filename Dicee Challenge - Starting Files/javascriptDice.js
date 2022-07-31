//Creating an array to store images so that we can choose any one of them at random

var imageChange = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];

var choice1, choice2;

//creating a function to generate a random number whose range lies within the indexes of the array

function randImg() {
    var len = imageChange.length;
    choice1 = Math.floor(Math.random()*len);
    document.querySelector('.img1').src = imageChange[choice1];
    choice2 = Math.floor(Math.random()*len);
    document.querySelector('.img2').src = imageChange[choice2];
    
    if(choice1>choice2){
        document.querySelector('h1').innerHTML = '🚩Player 1 wins!';
    }
    else if(choice1<choice2){
        document.querySelector('h1').innerHTML = 'Player 2 wins!🚩';
    }
    else{
        document.querySelector('h1').innerHTML = 'Draw';
    }
}


randImg();//function call