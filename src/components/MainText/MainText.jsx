import React from 'react';
import {ReactComponent as Databiz} from '../../assets/images/client-databiz.svg'
import {ReactComponent as Audiophile} from '../../assets/images/client-audiophile.svg'
import {ReactComponent as Meet} from '../../assets/images/client-meet.svg'
import {ReactComponent as Maker} from '../../assets/images/client-maker.svg'
import Btn from '../Btn/Btn';

const MainText = () => {
    return(
        <div
            className='w-1/2 text-left flex flex-col'
        >
            <div
                className='h-1/2 flex items-end'
            >
                <h1
                    className='text-8xl font-black whitespace-pre-line'
                >
                    {`Make \n remote work`}
                </h1>
            </div>
            <div
                className='flex flex-col justify-between h-1/3'
            >
                <p
                    className='text-mid-gray text-lg my-12 whitespace-pre-line'
                >
                    {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
                </p>
                <Btn
                    isFilled={true}
                >
                    Learn more
                </Btn>
                <div
                    className='flex justify-around items-end'
                >
                    <Databiz/>
                    <Audiophile/>
                    <Meet/>
                    <Maker/>
                </div>
            </div>
        </div>
    )
}

export default MainText;