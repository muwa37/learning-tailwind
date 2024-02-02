import React from 'react';
import {ReactComponent as Databiz} from '../../assets/images/client-databiz.svg'
import {ReactComponent as Audiophile} from '../../assets/images/client-audiophile.svg'
import {ReactComponent as Meet} from '../../assets/images/client-meet.svg'
import {ReactComponent as Maker} from '../../assets/images/client-maker.svg'
import MainText from '../MainText/MainText';

const MainSection = () => {
    return(
        <section
            className='w-full flex mt-6 h-full'
        >
            <MainText/>
        </section>
    )
}

export default MainSection;