import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import * as icons from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import companyLogo from "../../img/planta-logo.png";

import "./index.css";

const Header: React.FC = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <a href="/meus_cultivos">
          <img src={companyLogo} alt="" className="ml-3 logo" />
        </a>
        <Navbar.Brand href="#home">Jardim Inteligente</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="nav-Item" to="/meus_cultivos">
              Meu cultivo
            </Nav.Link>
            <Nav.Link as={Link} className="nav-Item" to="/pesquisa_plantas">
              Explore novas
            </Nav.Link>
            <Nav.Link as={Link} className="nav-Item" to="/recursos">
              Recursos de IA
            </Nav.Link>
            <Button type="button" className="btn btn-success">
              Sair
            </Button>
            <a href="#">
              <icons.PersonCircle color="#03760F" size={20} />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
