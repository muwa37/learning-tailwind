import React from 'react';
import { ReactComponent as Audiophile } from '../../assets/images/client-audiophile.svg';
import { ReactComponent as Databiz } from '../../assets/images/client-databiz.svg';
import { ReactComponent as Maker } from '../../assets/images/client-maker.svg';
import { ReactComponent as Meet } from '../../assets/images/client-meet.svg';
import Btn from '../Btn/Btn';

const MainText = () => {
	return (
		<div className='h-full order-2 xl:order-1 w-1/2 text-center xl:text-left flex flex-col items-center xl:items-start'>
			<div className='xl:h-1/2 flex items-end'>
				<h1 className='text-3xl xl:text-8xl font-black xl:whitespace-pre-line'>
					{`Make \n remote work`}
				</h1>
			</div>
			<div className='flex flex-col justify-start h-1/2'>
				<p className='text-mid-gray text-lg my-12 whitespace-pre-line'>
					{`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
				</p>
				<div className='flex flex-col justify-between h-full items-center xl:items-start'>
					<Btn isFilled={true}>Learn more</Btn>
					<div className='mt-20 flex w-full justify-around items-center xl:mt-0'>
						<Databiz />
						<Audiophile />
						<Meet />
						<Maker />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainText;
