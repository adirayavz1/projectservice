import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to ='/'>
                    BidBazzar
                </NavLogo>
                <MobileIcon onClick ={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= 'about'>
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'discover'>
                            Discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'pricing'>
                            Pricing
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'terms'>
                            Terms & Condition
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to= '/signup'>
                        Sign Up
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>

        </>
    );
};

export default Navbar
