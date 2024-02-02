import React from 'react';
import NavMenuItem from '../NavMenuItem/NavMenuItem';

const NavMenu = ({ items = [] }) => {
	return (
		<div
			className='flex flex-col 
                px-4 py-2 
                bg-alm-white drop-shadow rounded-lg 
                absolute top-10 right-0
                w-36 space-y-2 z-30'
		>
			{items.map(({ text, icon }) => (
				<NavMenuItem text={text} icon={icon} key={text} />
			))}
		</div>
	);
};

export default NavMenu;
