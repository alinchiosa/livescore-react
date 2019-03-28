import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <div className="navbar">
                    <NavLink className="navbarLink" to="/">Live scores</NavLink>
                    <NavLink className="navbarLink" to="/history">History</NavLink>
                    <NavLink className="navbarLink" to="/fixtures">Fixtures</NavLink>
                </div>
                <hr/>
                <br/>
            </div>
        );
    }
}

export default Navbar;

