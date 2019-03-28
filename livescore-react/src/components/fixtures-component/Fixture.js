import React from 'react';
import './Fixture.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Fixture(props){
    
    return(
        <div className="pageContainer">
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >    
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
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="extrainfo">
                        <p>Date: {props.match.date}</p>
                        <p>Time: {props.match.time}</p>
                        {props.match.location && <p>Location: {props.match.location}</p>}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <br/>
        </div>
    )
}

export default Fixture;