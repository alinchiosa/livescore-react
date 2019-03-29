import React from 'react';

function League (props) {
    return(
        <div>
            {props.league.league_id <=100 && props.league.league_name}
        </div>
    );
}

export default League;