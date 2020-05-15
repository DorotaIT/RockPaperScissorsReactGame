import React, {Component} from 'react';
import "./ScoreBoard.css";

export class ScoreBoard extends Component {
    
    render() {
        const { playerPoints, computerPoints } = this.props.score;
        return (
            <div className="container score-board">
                <h4 className="mt-4">Tablica wyników</h4>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-around mt-4">
                            <p>Gracz: {playerPoints}</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-around mt-4">
                            <p>Komputer: {computerPoints}</p>
                        </div>
                    </div>
            </div>
        )
    }
}