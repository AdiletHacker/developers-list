import React, { useState } from 'react';
import s from "./Navigation.module.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return <div className={s.main}>

        <Navbar className="bg-transparent" color="light" light expand="md">
            <NavbarBrand className={s.navbarBrand} href="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_NrYzLSQYRAzOPMOWkUd0kyzakj6KQe7IbPE-60yj0hOgAJML&usqp=CAU" alt="..." />
                <h4>Developers List</h4>
            </NavbarBrand>
            <NavbarToggler className={s.navbarToggler} onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className={s.navbarNav} navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/" activeClassName="activeClass">Developers List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="add-dev" activeClassName="activeClass">Add Developer</NavLink>
                    </NavItem>
                </Nav>
                <Button className={s.btnLg} color="secondary" size="lg"><i className="fa fa-heart"></i>Add to Favorite</Button>
            </Collapse>
        </Navbar>
    </div>
}

export default Navigation;
