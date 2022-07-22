import React from 'react'
import Sliders from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Slider({children , dots , infinite , fade , slidesToShow , slidesToScroll , speed , autoplay , autoplaySpeed , responsive , arrows}) {
    const settings = {
        dots: dots,
        infinite: infinite,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll ,
        autoplaySpeed : autoplaySpeed,
        autoplay: autoplay,
        responsive: responsive,
        arrows: arrows,
        fade: fade,
    };
    return <Sliders {...settings}>
        {children}
    </Sliders>
}

export default Slider

