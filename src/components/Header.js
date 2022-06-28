import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DEL } from '../redux/actions/action';

const Header = () => {

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();
const del = (id)=>{
  dispatch(DEL(id))
}

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <NavLink className="text-decoration-none p-1 text-light" to="/">Home</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="text-decoration-none p-1 text-light" to="/cart">Cart</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Nav className="mx-auto">
            <NavLink className="text-decoration-none p-1 text-light" to="/cart"><AiOutlineShoppingCart/>({getdata.length})</NavLink>
            <NavLink className="text-decoration-none p-1 text-light" to="/"><AiOutlineUser /></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header