import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Image from 'public/image/image.jpg'
import Banner from 'components/Banner/Banner'
import Test from './test/test'
import Sidebar from 'components/Slider/Sliderbar'
import Header  from 'components/Header/Header';



const homePage = () => {
    const [menu, setMenu] = useState('');
    console.log(menu)
    return(
    <div>      
        <Parallax 
        bgImage={ Image }
        bgImageAlt="Image" 
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: 'rgba(0,0,0,.6)',
                    width: '100%',
                    height: '100%',
                }}
            />
        )}
        bgImageStyle={ { height: "auto", width: 'auto' } } 
        >
        <Header openState={menu} setState={setMenu} />
        <Sidebar openState={menu} setState={setMenu} />
        <Banner/>
        </Parallax>
        <Test></Test>
    </div>
    );
}
export default homePage;  