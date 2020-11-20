import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Professor from './Professor';
import Sobre from './Sobre';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { unmountComponentAtNode } from "react-dom";
import '../style/NavMenu.css';

class NavMenu extends Component {
  constructor() {
    super();
    this.professorClick = this.professorClick.bind(this);
    this.sobreClick = this.sobreClick.bind(this);
  }

  professorClick() {
    unmountComponentAtNode(document.getElementById('sobre'));
    ReactDOM.render(<Professor />, document.getElementById('professor'));
  }

  sobreClick() {
    unmountComponentAtNode(document.getElementById('professor'));
    ReactDOM.render(<Sobre />, document.getElementById('sobre'));
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="fixed-top">
          <NavbarBrand>ProjetoProgDDD.React</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button onClick={this.professorClick} className="button" color="link">Professores</Button>
            </NavItem>
            <NavItem>
              <Button onClick={this.sobreClick} className="button" color="link">Sobre</Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;