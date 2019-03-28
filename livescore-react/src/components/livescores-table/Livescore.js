import React from 'react';
import './Livescore.css';

function Livescore (props){
    return(
        <div>
            <div className='livescore'>
                <div className="time">
                    <p>{props.match.time}</p>
                </div>
                <div className="container">
                    <p>{props.match.home_name}</p>
                </div>
                <div className="container">
                    <p>{props.match.score}</p>
                </div>
                <div className="container">
                    <p>{props.match.away_name}</p>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Livescore;