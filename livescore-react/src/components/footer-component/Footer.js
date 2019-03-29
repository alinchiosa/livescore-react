import React from 'react';
import "./Footer.css";

class Footer extends React.Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div className="Footer">
                <a href='https://livescore-api.com/'>Livescore-API</a>
                <a href="google.com"> Contact </a>
                <a href='google.com'> Facebook </a>
                <a href='google.com'> Instagram </a>
            </div>
        )
    }
}

export default Footer;