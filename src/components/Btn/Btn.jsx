import React from 'react';

const borderStyles = 'border-2 border-alm-black rounded-lg';
const fillStyles =
	'text-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-alm-black border-2 border-alm-white';

const Btn = ({ children = '', hasBorder = false, isFilled = false }) => {
	return (
		<button
			className={`text-mid-gray px-5 py-2 w-fit ${hasBorder && borderStyles} 
                ${isFilled && fillStyles}`}
		>
			{children}
		</button>
	);
};

export default Btn;
