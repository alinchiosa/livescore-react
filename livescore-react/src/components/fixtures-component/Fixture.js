import React from 'react';
import './Fixture.css'

function Fixture(props){
    

    return(
        <div>
            <div className="fixture">
                <div className="container">
                    <p>{props.match.home_name}</p>
                </div>
                <div className="container">
                    <p>vs</p>
                </div>
                <div className="container">
                    <p>{props.match.away_name}</p>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Fixture;