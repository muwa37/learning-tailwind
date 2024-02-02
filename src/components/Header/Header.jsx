import React from 'react';
import {ReactComponent as LogoIcon} from '../../assets/images/logo.svg'
import NavItem from '../NavItem/NavItem';

const Header = () => {
    return (
        <header
           className='flex' 
        >
            <LogoIcon/>
            <nav
                className='flex space-x-6 ml-8 items-center'
            >
                <NavItem text='Features'>
                    asdasd
                </NavItem>
                <NavItem text='Company'/>
                <NavItem text='Careers'/>
                <NavItem text='About'/>
            </nav>
        </header>
    )
}

export default Header;