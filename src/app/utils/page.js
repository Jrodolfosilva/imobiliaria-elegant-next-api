"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardProduct from './card-product';
import styled from 'styled-components';


const ContainerCarrossel = styled.div`

padding-top: 200px;
max-width: 100vw;
overflow-x:hidden ;

`


export default function Responsive() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  };

  return (
    <ContainerCarrossel>
      <Slider {...settings}>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
      </Slider>
      </ContainerCarrossel>
    
  );
}
