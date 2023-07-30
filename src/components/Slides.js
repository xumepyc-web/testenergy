import React from 'react';
import { Carousel } from 'antd';
import {src1, src2, src3, src4} from "../constants/constans";
const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Slides = () => {
    return (
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}><img style={{height: '100%'}} src={src1} alt='' /></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img style={{height: '100%'}} src={src2} alt='' /></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img style={{height: '100%'}} src={src3} alt='' /></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img style={{height: '100%'}} src={src4} alt='' /></h3>
            </div>
        </Carousel>
    );
};
export default Slides;