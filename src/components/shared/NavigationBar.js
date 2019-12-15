import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import {Container,Navbar,Button, Nav} from 'react-bootstrap';

class NavigationBar extends Component {
    state = { 
     }

    handleLogout = () =>  {
        this.props.history.push("/login");
    }

    render() { 
        return ( 
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink style={{textDecoration: "none", color:"#fff", padding:"10px"}} to="/">
                            Would you rather?
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="text-right">
                        <Nav.Item className="d-md-none">
                            <Navbar.Text style={{color:"#fff"}}>
                                Hello, User 
                            </Navbar.Text>
                            <img style = {{borderRadius:"100%", margin:"10px"}} width="40px" height="40px" src="https://picsum.photos/id/237/200/300" />
                        </Nav.Item>
                        <Nav className="mr-auto">
                            <NavLink style={{textDecoration: "none", color:"#fff", padding:"10px"}} to="/" >Home</NavLink>
                            <NavLink style={{textDecoration: "none", color:"#fff", padding:"10px"}} to="/add">New Question</NavLink>
                            <NavLink style={{textDecoration: "none", color:"#fff", padding:"10px"}} to="/leaderboard">Leader Board</NavLink>
                        </Nav>
                        <Nav.Item className="d-none d-md-flex align-items-center ">
                            <Navbar.Text style={{color:"#fff"}}>
                                Hello, User 
                            </Navbar.Text>
                            <img style = {{borderRadius:"100%", margin:"10px"}} width="40px" height="40px" src="https://picsum.photos/id/237/200/300" />
                        </Nav.Item>
                        <Button variant="outline-info" onClick={this.handleLogout}>Logout</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            );
    }
}
 
export default withRouter(NavigationBar);