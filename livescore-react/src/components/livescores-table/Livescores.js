import React from 'react';
import Livescore from './Livescore';

class Livescores extends React.Component {
    constructor(){
        super();
        this.state = {
            livescores: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/scores/live.json?key=&secret=')
        .then(res => res.json())
        .then(jsonRes => {  
            this.setState({
                isLoaded: true,
                livescores: jsonRes.data.match
            })
        })
    }

    render(){
        const livescoresComponents = this.state.livescores.map(match => 
            <Livescore key={match.id} match={match} />
        )
        return(
            <div>
                {livescoresComponents}
            </div>
        );
    }
}

export default Livescores;