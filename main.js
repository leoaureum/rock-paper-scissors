const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 
    userInput === 'paper' || 
    userInput === 'scissors' || 
    userInput === 'bomb') {
            return userInput
    } else { 
       return'Error, please enter rock, paper, or scissors'
    }
}
const getComputerChoice = () => {
    const randomNumber =  (Math.floor(Math.random()* 3))
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie game'
    } 
    if (computerChoice = 'paper') {
        if (userChoice == 'rock') {
            return "Computer won!"
        }
    } if (userChoice = 'rock') {
        if (computerChoice == 'scissors') {
            return "You win!"
        }
    }
    if (userChoice = 'paper') {
        if (computerChoice == 'rock') {
            return "You win!"
        }
    }
    if (userChoice = 'paper') {
        if (computerChoice == 'scissors') {
            return "Computer won!"
        }
    }
    if (userChoice = 'scissors') {
        if (computerChoice == 'rock') {
            return "Computer won!"
        }
    }
    if (userChoice = 'scissors') {
        if (computerChoice == 'paper') {
            return "You win!"
        }
    }

    // computer choice //

    if (computerChoice = 'rock') {
        if (userChoice == 'paper') {
            return "You win!"
        }
    } if (computerChoice = 'rock') {
        if (userChoice == 'scissors') {
            return "Computer won!"
        }
    }
    if (computerChoice = 'paper') {
        if (userChoice == 'rock') {
            return "Computer! won"
        }
    }
    if (computerChoice= 'paper') {
        if (userChoice == 'scissors') {
            return "You win!"
        }
    }
    if (computerChoice = 'scissors') {
        if (userChoice == 'rock') {
            return "You won!"
        }
    }
    if (computerChoice = 'scissors') {
        if (userChoice == 'paper') {
            return "Computer won!"
        }
    }
    // BOMB //

    if (userChoice = 'bomb') {
        if (computerChoice == 'paper') {
            return "You win!"
        }
    } if (userChoice = 'bomb') {
        if (computerChoice == 'scissors') {
            return "You win!"
        }
    }
    if (userChoice = 'bomb') {
        if (computerChoice == 'rock') {
            return "You win!"
        }
    }
    
};

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice ();
    console.log(`You chose ${userChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame()
