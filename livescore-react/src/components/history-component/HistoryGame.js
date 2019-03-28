import React from 'react';
import "./History.css";

function HistoryGame (props) {
    
    return(
        <div>
            <div className='history'>
                <div className="container">
                    <p>{props.match.home_name}</p>
                </div>
                <div className="container">
                    <p>{props.match.score}</p>
                </div>
                <div className="container">
                    <p>{props.match.home_name}</p>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default HistoryGame;