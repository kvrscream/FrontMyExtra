import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import '../index.css';
import {Link} from 'react-router-dom';

const Menu = () => (
  <React.Fragment>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/dashboard">Strap Project</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem>
            <Link to="/tarefas">Tarefas</Link>
          </NavItem>
          <NavItem>
            Link
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem>
            Configurações
          </NavItem>
          <NavItem>
            Sair
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
);

export default Menu;