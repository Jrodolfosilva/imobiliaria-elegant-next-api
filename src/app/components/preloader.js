"use client"

import styled from "styled-components";


const ContainerPreloader = styled.div`

    background-color: #eaeaea;
    background-image: url(/preloader.gif);
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 99999;



`

export default function preloader (){

    return <ContainerPreloader></ContainerPreloader>
}