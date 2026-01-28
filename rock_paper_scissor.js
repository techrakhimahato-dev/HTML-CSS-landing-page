var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissor:").toLowerCase();  
    if (['rock', 'paper', 'scissor'].includes(userInput)) {
        return userInput;
    } else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}
function playRound() {
    const humanChoiceRaw = getHumanChoice();
    const computerChoiceRaw = getComputerChoice();
    const humanChoice = humanChoiceRaw ? humanChoiceRaw.toLowerCase() : humanChoiceRaw;
    const computerChoice = computerChoiceRaw ? computerChoiceRaw.toLowerCase() : computerChoiceRaw;
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')
    ) {
        console.log("Human wins this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
}
 
 function playGame() {
     const rounds = 5;
     for (let round = 1; round <= rounds; round++) {
         console.log(`\nRound ${round} of ${rounds}`);
         const humanChoiceRaw = getHumanChoice();
         const computerChoiceRaw = getComputerChoice();
         const humanChoice = humanChoiceRaw ? humanChoiceRaw.toLowerCase() : humanChoiceRaw;
         const computerChoice = computerChoiceRaw ? computerChoiceRaw.toLowerCase() : computerChoiceRaw;
         console.log(`Human choice: ${humanChoice}`);
         console.log(`Computer choice: ${computerChoice}`);

         if (humanChoice === computerChoice) {
             console.log("It's a tie!");
         } else if (
             (humanChoice === 'rock' && computerChoice === 'scissor') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissor' && computerChoice === 'paper')
         ) {
             console.log("Human wins this round!");
             humanScore++;
         } else {
             console.log("Computer wins this round!");
             computerScore++;
         }

         console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
     }

     console.log('\nFinal Scores:');
     console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
     if (humanScore === computerScore) {
         console.log("The match is a tie!");
     } else if (humanScore > computerScore) {
         console.log("Human wins the match!");
     } else {
         console.log("Computer wins the match!");
     }
 }

// Start the 5-round game
playGame();




















