import React from 'react';
import Fixture from "./Fixture";

class Fixtures extends React.Component {
    constructor() {
        super()
        this.state = {
            fixtures: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/fixtures/matches.json?key=&secret=')
        .then(res => res.json())
        .then(jsonRes => {  
            this.setState({
                isLoaded: true,
                fixtures: jsonRes.data.fixtures
            })
        })
    }
    
    
    render(){
        const fixturesComponents = this.state.fixtures.map(fixture => 
            <Fixture key={fixture.id} match={fixture} />
        )
        return (
            <div>
                {fixturesComponents}
            </div>
        );
    }
}

export default Fixtures