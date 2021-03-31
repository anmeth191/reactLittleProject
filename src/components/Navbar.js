import React from 'react';

let Navbar = ()=>{

    return(
        <div className="navbarContainer">
            <nav className="navbarContainer-nav">
                <ul className ="navbarContainer-nav-ul">
                    <li className="navbarContainer-nav-ul--li"><a href="#">Home</a></li>
                    <li className="navbarContainer-nav-ul--li"><a href="#">Contact</a></li>
                    <li className="navbarContainer-nav-ul--li"><a href="#">Gallery</a></li>
                    <li className="navbarContainer-nav-ul--li"><a href="#">Description</a></li>
                    </ul>
                </nav>
            </div>
    )//end of the return
}//end of the Navbar Component

export default Navbar;

