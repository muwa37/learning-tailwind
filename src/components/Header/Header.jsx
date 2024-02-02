import React, { useState } from 'react';
import { ReactComponent as DropdownClose } from '../../assets/images/icon-close-menu.svg';
import { ReactComponent as Dropdown } from '../../assets/images/icon-menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';

import Btn from '../Btn/Btn';
import MobileMenu from '../MobileMenu/MobileMenu';
import NavItem from '../NavItem/NavItem';
import NavMenu from '../NavMenu/NavMenu';
import { COMPANY, FEATURES } from './consts';

const Header = () => {
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

	return (
		<header className='flex items-center'>
			<LogoIcon />
			<nav className='hidden xl:flex space-x-6 ml-8 items-center'>
				<NavItem text='Features'>
					<NavMenu items={FEATURES} />
				</NavItem>
				<NavItem text='Company'>
					<NavMenu items={COMPANY} />
				</NavItem>
				<NavItem text='Careers' />
				<NavItem text='About' />
			</nav>
			<div className='hidden ml-auto xl:flex space-x-5'>
				<Btn>Loggin</Btn>
				<Btn hasBorder={true}>Register</Btn>
			</div>
			<div
				onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
				className='flex xl:hidden ml-auto cursor-pointer z-30'
			>
				{isMobileMenuOpened ? <DropdownClose /> : <Dropdown />}
			</div>
			<MobileMenu isOpened={isMobileMenuOpened} />
		</header>
	);
};

export default Header;
