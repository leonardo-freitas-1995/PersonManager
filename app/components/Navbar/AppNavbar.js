import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class AppNavbar extends React.Component{
    render(){
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Person Manager</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                </Nav>
            </Navbar>
        )
    }
}

export default AppNavbar