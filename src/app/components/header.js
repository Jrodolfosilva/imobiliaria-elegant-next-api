"use client"

import Link from "next/link";
import styled from "styled-components";
import DropIcon from "./dropicon";

const ContainerHeader = styled.header`

position: fixed;
top: 0;
width: 100%;
z-index: 99;

background-color: #fff;
color: var(--heading-color);
font-weight: 500;
font-size: 14px;

display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 120px;
box-shadow:0px 1px 4px rgba(24, 26, 32, 0.07)

`

const MenuList = styled.ul`

display: flex;
align-items: center;
gap: 20px;
list-style: none;
color: inherit;


a{

    display: block;
    padding: 8px 16px;
    text-decoration:none;
    color: inherit;
    
    &:hover{
        color: red;
    }
}


@media (max-width:768px ) {
    



}

`
const ButtonDrop = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0px;
    width: auto;

`






export default function Header(){

    return(
        <ContainerHeader>
            <img src={""} alt={'LOGOMARCA'}/>
            <nav>
                <MenuList>
                   
                    <li>
                    <Link href="">Página Inicial</Link>
                    </li>
                    
                    <li>
                    <Link href="">Quem somos</Link>
                    </li>
                    
                    <li >
                    <Link href="/">Imóveis</Link>
                    </li>
                    
                    <li>
                    <Link href="/">Condomínio</Link>
                    </li>
                    
                    <li>
                    <Link href="/">Contato</Link>
                    </li>
                </MenuList>
            </nav>
            <div>
            <ButtonDrop onClick={()=>alert("Ola")}>
                        <DropIcon/>
             </ButtonDrop>
            </div>
        </ContainerHeader>
    )
}