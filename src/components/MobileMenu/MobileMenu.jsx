import React from 'react';
import Btn from '../Btn/Btn';
import { COMPANY, FEATURES } from '../Header/consts';
import NavItem from '../NavItem/NavItem';
import NavMenuItem from '../NavMenuItem/NavMenuItem';

const MobileMenu = ({ isOpened = false }) => {
	return (
		<>
			<div
				className={`fixed top-0 left-0 right-0 bg-alm-black opacity-50 z-10 min-h-screen ${
					isOpened ? 'flex' : 'hidden'
				}`}
			/>
			<div
				className={`fixed top-0 right-0 w-1/2 bg-white z-20 min-h-screen ${
					isOpened ? 'flex' : 'hidden'
				}`}
			>
				<nav className='my-20 mx-5 space-y-5 text-lg w-full'>
					<NavItem text='Features'>
						<div className='flex flex-col space-y-5 p-2'>
							{FEATURES.map(({ text, icon }) => (
								<NavMenuItem text={text} icon={icon} key={text} />
							))}
						</div>
					</NavItem>
					<NavItem text='Company'>
						<div className='flex flex-col space-y-5 p-2'>
							{COMPANY.map(({ text }) => (
								<NavMenuItem text={text} key={text} />
							))}
						</div>
					</NavItem>
					<NavItem text='Careers' />
					<NavItem text='About' />
					<div className='flex flex-col items-center'>
						<Btn>Loggin</Btn>
						<Btn hasBorder={true}>Register</Btn>
					</div>
				</nav>
			</div>
		</>
	);
};

export default MobileMenu;
