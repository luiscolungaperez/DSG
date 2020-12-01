import React from 'react';
import { Parallax } from 'react-parallax';
import Image from 'public/image/home.jpg';

const HomePage = () => {
    return(
    <Parallax bgImage={ Image } bgImageAlt="Image" bgImageStyle={ { height: "80%", width: '100%', } }> 
    <div style={{ height: "100vh", width:"100vw" }}>


    </div>
    </Parallax>
    );
}

export default HomePage;
