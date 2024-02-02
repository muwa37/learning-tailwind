import React from 'react';

const Wrapper = ({ children }) => {
	return (
		<div className='container mx-auto py-4 px-2 h-screen flex flex-col justify-between'>
			{children}
		</div>
	);
};

export default Wrapper;
