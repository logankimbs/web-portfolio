import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <h1>Logan Kimball</h1>
                <ul className="navigation">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="burger-menu">
                    <ion-icon className="bars" name="menu-outline"></ion-icon>
                </button>
            </nav>
        )
    }
}

export default Navbar;