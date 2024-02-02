import React from 'react';
import { useState } from 'react';
import {ReactComponent as ArrowDown} from '../../assets/images/icon-arrow-down.svg'
import {ReactComponent as ArrowUp} from '../../assets/images/icon-arrow-up.svg'


const NavItem = ({text='', children}) => {
    const [selected, setSelected] = useState('')
    const selectHandler = () => {
        if (children) {
            setSelected(text !== selected
                ? text
                : '')
        }
    }

    return (
        <div
            className='relative'
        >
            <div
                className='flex space-x-2 cursor-pointer items-center'
                onClick={selectHandler}
            >
                <span
                    className='text-mid-gray hover:text-alm-black'
                    
                >
                    {text}
                </span>
                {children && selected !== text && <ArrowDown/>}
                {children && selected === text && <ArrowUp/>}
            </div>
            {selected && children}
        </div>
    )
}

export default NavItem;