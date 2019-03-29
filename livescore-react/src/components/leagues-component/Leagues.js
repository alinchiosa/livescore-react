import React from 'react';
import League from './League';

class Leagues extends React.Component {
    constructor(){
        super();
        this.state = {
            leagues: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/leagues.json?key=&secret=')
        .then(res => res.json())
        .then(jsonRes => {  
            this.setState({
                isLoaded: true,
                leagues: jsonRes.data.leagues
            })
        })
    }

    render(){
        
        if (!this.state.isLoaded){
            return <div>Loading...</div>
        } else {
            const leaguesComponents = this.state.leagues.map(league => 
                <League key={league.league_id} league={league} />
            )
            return (
                <div className>
                    <h3>Leagues</h3>
                    <hr />
                    <br />
                    {leaguesComponents}
                </div>
            );
        }
    }
}

export default Leagues;