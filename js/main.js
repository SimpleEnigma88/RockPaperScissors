// Strings
/* let myName = prompt("Please enter your name:", "Robert");

console.log(myName.charAt(Math.floor(Math.random() * myName.length))); */

// Ternary Operator

/* let soup = '';
let isCustomerBannned = false;
let soupAccess = isCustomerBannned
? "Sorry, you're banned, buddy!" 
: soup 
? `Yes, we have some ${soup} today!` 
: `Sorry, we are out of soup today!`;

console.log(soupAccess); */

/* let score = prompt("Enter a score:");

let gradeLetter = score > 89 
? "A" 
: score > 79 
? "B" 
: score > 69 
? "C" 
: score > 59 
? "D" 
: "F";

console.log(`Your grade this semester is a ${gradeLetter}`); */

/* let answer = confirm('Ok  === True\nCancel === False');

console.log(answer); */

/* let myName = prompt("Enter name:");

if(myName) { 
    console.log(myName)
} else {
 console.log("Screwed that up, didn't ya?");
} */

const capitalizeChoice = (lowerCaseWord) => {
    return lowerCaseWord.trim().toLowerCase().charAt(0).toUpperCase() + lowerCaseWord.trim().slice(1).toLowerCase();
};

let playGame = confirm("Shall we play 'Rock, Paper, Scissors?'");

if (playGame) {
    //Play game!  
    while (playGame) {
        const playerChoice = prompt("Paper, Rock, or Scissors?");
        if (playerChoice || playerChoice === "") {
            console.log(playerChoice);
            const playerOne = capitalizeChoice(playerChoice);
            console.log(playerOne);
            if (['Rock', 'Paper', 'Scissors'].indexOf(playerOne) !== -1) {
                const computerChoice = Math.floor(Math.random() * 3 + 1);
                const computer = computerChoice === 1 ? 'Rock'
                    : computerChoice === 2 ? 'Paper'
                        : 'Scissors';

                const result =
                    playerOne === computer
                        ? "Tie Game!"
                        : playerOne === 'Rock' && computer === 'Paper' ? `Player: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                            : playerOne === 'Paper' && computer === 'Scissors' ? `Player: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                                : playerOne === 'Scissors' && computer === 'Rock' ? `Player: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                                    : `Player: ${playerOne}\nComputer: ${computer}\nPlayer Wins!`;
                alert(result);

                playGame = confirm('Play Again?');
                if (!playGame) alert("Thanks for playing!");
                continue;
            } else {
                confirm("You didn't enter rock, paper or scissors!");
                playGame = confirm('Try Again?');
                if (!playGame) alert("Thanks for playing!");
                continue;
            }
        } else {
            alert("I guess you changed your mind, thanks for playing!");
            break;
        }
    }
} else {
    alert("Okay, maybe next time.");
}

