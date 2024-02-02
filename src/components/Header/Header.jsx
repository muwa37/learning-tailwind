import React from 'react';
import {ReactComponent as LogoIcon} from '../../assets/images/logo.svg'
import NavItem from '../NavItem/NavItem';
import NavMenu from '../NavMenu/NavMenu';
import { COMPANY, FEATURES } from './consts'
import Btn from '../Btn/Btn';

const Header = () => {
    return (
        <header
           className='flex items-center' 
        >
            <LogoIcon/>
            <nav
                className='flex space-x-6 ml-8 items-center'
            >
                <NavItem text='Features'>
                    <NavMenu
                        items = {FEATURES}
                    />
                </NavItem>
                <NavItem text='Company'>
                    <NavMenu
                        items = {COMPANY}
                    />
                </NavItem>
                <NavItem text='Careers'/>
                <NavItem text='About'/>
            </nav>
            <div
                className='ml-auto flex space-x-5'
            >
                <Btn>
                    Loggin
                </Btn>
                <Btn
                    hasBorder={true}
                >
                    Register
                </Btn>
            </div>
        </header>
    )
}

export default Header;