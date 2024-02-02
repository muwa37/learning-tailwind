import React from 'react';
import MainImg from '../../assets/images/image-hero-desktop.png';
import MainMobImg from '../../assets/images/image-hero-mobile.png';
import MainText from '../MainText/MainText';

const MainSection = () => {
	return (
		<section className='flex w-full flex-col xl:flex-row h-full items-center xl:justify-between'>
			<MainText />
			<div className='order-2 hidden xl:flex flex-col justify-center items-end w-1/2 h-full'>
				<img className='size-5/6' src={MainImg} alt='hero-img' />
			</div>
			<div className='mt-20 mb-8 order-1 flex xl:hidden w-full justify-center'>
				<img src={MainMobImg} alt='hero-img' />
			</div>
		</section>
	);
};

export default MainSection;
