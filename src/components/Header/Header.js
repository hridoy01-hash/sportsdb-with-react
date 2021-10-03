import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../logo32.png'



const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "white",
        textDecoration:"none",
        fontSize:"20px",
        
        backgroundColor:"red",
        padding:"6px",
        borderRadius:"4px"
        
    }
    return (
        <div>
     <Navbar bg="dark" variant="dark">
    <Container>
    <NavLink to="/home">
        <img className="w-50" src={logo} alt="" />
    </NavLink>
    <Nav className="me-auto">
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",}} activeStyle={activeStyle} >Home</NavLink>
    
    <NavLink to="/sports" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px"}} activeStyle={activeStyle}>Sports</NavLink>
    
    <NavLink to="/live" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px"}} activeStyle={activeStyle}>Live</NavLink>
    
    <NavLink to="/highlight" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px"}} activeStyle={activeStyle}>Highlight</NavLink>

    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;