var tableRow = document.getElementsByTagName('tr');
var tableCell = document.getElementsByTagName('td');
var tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.player-turn');
const restart = document.querySelector('.restart');

for(let i = 0; i < tableCell.length; i++){
    tableCell[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}
while(!player1){
    var player1 = prompt('Youre Goku! Enter your name');
}

player1Img = "Images/Vegeta.png";



while(!player2){
    var player2 = prompt('Youre Vegeta! Enter your name');
}

player2Img = "Images/Goku.png";

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`;

Array.prototype. forEach.call(tableCell, (cell) =>{
    cell.addEventListener('click', changeCharacter);
    cell.style.backgroundColor ='white';
})

function changeCharacter(e){
    let column = e.target.cellIndex;
    let row =[];

    for(let i =5; i > -1; i--){
        if(tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if(currentPlayer === 1){
                row[0].style.backgroundImage = url(player1Img);
                playerTurn.textContent = `${player2}'s turn!`;
                return currentPlayer = 2;
            }else{
                row[0].style.backgroundImage = url(player2Img);
                playerTurn.textContent = `${player1}'s turn!`
                return currentPlayer = 1;
            }
        }

    }
}

