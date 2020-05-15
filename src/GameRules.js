import React, { Component } from 'react';

export class GameRules extends Component {

render() {
    return ( 
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Zobacz zasady gry
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Zasady gry</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>1. Gra możliwa jest jedynie z komputerem.</p>
                    <p>2. Wybierz kamień papier, nożyce.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}