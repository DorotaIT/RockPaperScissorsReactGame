import React, { Component } from 'react';
import "./GameElement.css";

export class GameElement extends Component {
    constructor(props) {
        super(props);
        this.playerClick = this.playerClick.bind(this);
    }

    playerClick() {
        this.props.handlePlayerMove(this.props.type)
    }

    render() {
        return (
            <span 
            className="game-icon"
            onClick={this.playerClick}
            >
                {this.props.children}
            </span>
        );
    }
}