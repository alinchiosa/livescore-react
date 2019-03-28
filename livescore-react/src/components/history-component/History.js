import React from 'react';
import HistoryGame from './HistoryGame';

class History extends React.Component {
    constructor(){
        super()
        this.state={
            history: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/scores/history.json?key=&secret=')
        .then(res => res.json())
        .then(jsonRes => {  
            this.setState({
                isLoaded: true,
                history: jsonRes.data.match
            })
        })
    }

    render() {
        const historyGameComponents = this.state.history.map(match => 
            <HistoryGame key={match.id} match={match} />
        )
        return (
            <div>
                {historyGameComponents}
            </div>
        );
    }
}

export default History;