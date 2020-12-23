import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu,} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to= 'about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to= 'discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to= 'pricing' onClick={toggle}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink to= 'terms' onClick={toggle}>
                        Terms & Condition
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/signup'>
                        Sign Up
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
