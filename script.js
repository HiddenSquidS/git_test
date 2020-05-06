

function computerPlay(){
    var random = Math.floor(Math.random()*Math.floor(3));
    var string;
    switch (random){
        
       case 0:
       string="rock";
       break;
       case 1:
       string="paper"
       break;
       case 2:
       string="scissors"
       break;
       default:
       break;


    }

    return string;
}


function playRound(player, computer){

      var outputString;

 if (player.toLowerCase()=="rock"){
     switch (computer){
       case "paper":
       return "You Lose! Paper beats Rock";
       break;
       case "scissors":
       return "You Win! Rock beats Paper";
       break;
       case "rock":
       return "It is a tie";
       break;
       default:
       break;

     }

 }
 if (player.toLowerCase()=="papper"){
     switch (computer){
       case "rock":
       return "You Win! Paper beats Rock";
       break;
       case "scissors":
       return "You Lose! Scissors beats Paper";
       break;
       case "paper":
       return "It is a tie";
       break;
       default:
       break;

     }

 }
 if (player.toLowerCase()=="scissors"){
     switch (computer){
       case "rock":
       return "You Lose! Rock beats Scissors ";
       break;
       case "paper":
       return "You Win! Scissors beats Paper";
       break;
       case "scissors":
       return "It is a tie";
       break;
       default:
       break;

     }

 }


}

function game(player,computer){
  
  var score =[0,0];
  for(var i=0;i<5;i++){

if (playRound(player,computer).search("Lose")){
    score[1]+=1;
}
else if (playRound(player,computer).search("Win")){
    score[0]+=1
}
else{
continue;
}

computer=computerPlay();
  }
return score;

  }


let player="Make a move man";
let computer;
const container = document.querySelector('#container');
const content = document.createElement('h2');
content.textContent=player;
container.appendChild(content);

const buttons = document.querySelectorAll('button');

buttons.forEach((btn)=>{

  btn.addEventListener('click',(ev)=>{

    player = ev.target.value;
    computer = computerPlay();
    let result = playRound(player,computer);
    content.textContent=result;
    container.appendChild(content);

  });

});





