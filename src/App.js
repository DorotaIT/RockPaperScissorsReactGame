import React from 'react';
import { GameElement } from './GameElement/GameElement';
import { ScoreBoard } from './ScoreBoard/ScoreBoard';
import { GameRules } from './GameRules';
import './App.css';
import { faHandRock } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class App extends React.Component {
    defaultState = {
        score: { 
            playerPoints: 0,
            computerPoints: 0
        },
        choices: {
            playerChoice: "",
            computerChoice: ""
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            ...this.defaultState
        }

        this.handlePlayerMove = this.handlePlayerMove.bind(this);
        this.resetGame = this.resetGame.bind(this);

    };

    computerMove() {
        const randomNumber =  Math.floor(Math.random() * 3);
        if(randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else if (randomNumber === 2) {
            return "scissors";
        }
    }

    whoWon(playerType, computerType) {
        console.log(playerType, computerType)
        if (playerType === computerType) {
            return "draw";
        } else if (
            (playerType === "rock" && computerType === "scissors") ||
            (playerType === "scissors" && computerType === "paper") ||
            (playerType === "paper" && computerType === "rock")
        ) {
            return "player";
        }

        return "computer";
    }

    calculateScore(playerType, computerType) {
        const winner = this.whoWon(playerType, computerType);
        const newPlayerPoint = winner === "player" ? this.state.score.playerPoints + 1 : this.state.score.playerPoints;
        const newComputerPoint = winner === "computer" ? this.state.score.computerPoints + 1 : this.state.score.computerPoints;
        
        this.setState(state => ({
            score: {
                playerPoints: newPlayerPoint,
                computerPoints: newComputerPoint
            },
        }));
    }

    handlePlayerMove(type) {
        const whatComputerChose = this.computerMove();

        this.setState(state => ({
            choices: {
                playerChoice: type,
                computerChoice: whatComputerChose
            },
        }));

        this.calculateScore(type, whatComputerChose);
    }

    resetGame() {
        this.setState({...this.defaultState});
    }

 
    render() {
        console.log(this.state);
        const winner = this.whoWon(this.state.choices.playerChoice, this.state.choices.computerChoice);
        console.log(winner)
        let translateWinner = "";
        const computerWeapon = this.state.choices.computerChoice;
        let translateChoice = "";
       
        if (computerWeapon === "rock") {
            translateChoice = "kamień"
        } else if (computerWeapon === "paper") {
            translateChoice = "papier"
        } else if (computerWeapon === "scissors") {
            translateChoice = "nożyce"
        };

        if (winner === "player") {
            translateWinner = "Wygrałeś!"
        } else if (winner === "computer") {
            translateWinner = "Przegrałeś. Komputer wygrał"
        } else if (winner === "draw") {
            translateWinner = "Remis"
        }

        return (
            <div className="container">
               <h1 className="mt-3">Rock Paper Scissors</h1> 
                <div className="row mt-5">
                    <div className="col-md-4 d-flex justify-content-around">
                        <GameElement 
                            type={"rock"}
                            handlePlayerMove={this.handlePlayerMove}
                            >
                            <FontAwesomeIcon
                                icon={faHandRock}
                                color={"black"}
                                size={"3x"}
                            />
                        </GameElement>
                    </div>
                    <div className="col-md-4 d-flex justify-content-around">
                        <GameElement 
                        type={"paper"}
                        handlePlayerMove={this.handlePlayerMove}
                        >
                            <FontAwesomeIcon
                                icon={faHandPaper}
                                color={"black"}
                                size={"3x"}
                            />
                        </GameElement>
                    </div>
                    <div className="col-md-4 d-flex justify-content-around">
                        <GameElement 
                        type={"scissors"}
                        handlePlayerMove={this.handlePlayerMove}
                        >
                            <FontAwesomeIcon
                                icon={faHandScissors}
                                color={"black"}
                                size={"3x"}
                            />
                        </GameElement>
                    </div>
            </div>

            <div className="row mt-5 d-flex justify-content-center">
                <p>Wybór komputera: {translateChoice}</p>
            </div>

            <div className="row mt-5 d-flex justify-content-center">
                <h4>Rundę wygrał: {this.state.choices.computerChoice && this.state.choices.playerChoice ? translateWinner : ""  }</h4>
            </div>
            
               <ScoreBoard score={this.state.score}/>

            <div className="mt-4 d-flex justify-content-center">
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={this.resetGame}
                    >Zacznij grę od nowa
                </button>
            </div>

            <div className="row mt-4 d-flex justify-content-center">
                <GameRules/>
            </div>

            
            </div>
        );
    }

}

export default App;