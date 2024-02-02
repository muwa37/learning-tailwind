import React from 'react';

const NavMenuItem = ({text = '', icon}) => {
    return (
        <div
            className='flex w-full space-x-4 items-center'
        >
            {icon}
            <span
                className='text-mid-gray hover:text-alm-black cursor-pointer'
            >
                {text}
            </span>
        </div>
    )
}

export default NavMenuItem;