"use client"
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import DropIcon from "./dropicon";

const ContainerHeader = styled.header`

position: fixed;
top: 0;
width: 100%;
z-index: 9;

background-color: #fff;
color: var(--heading-color);
font-weight: 500;
font-size: 14px;

display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 120px;
box-shadow:0px 1px 4px rgba(24, 26, 32, 0.07);

@media (max-width: 768px) {
    
    padding: 30px 12px;

}

`

const MenuList = styled.ul`

display: flex;
align-items: center;
gap: 20px;
list-style: none;
color: inherit;


li{
    position: relative;
    
    &::after{
        content: "";
        position: absolute;
        background-color: #000;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        transition: width 0.5s;

    }

    &:hover::after{
        width: 100%;
    }
}

a{

    display: block;
    padding: 8px 16px;
    text-decoration:none;
    color: inherit;
    
    &:hover{
        color: "";
    }

    @media (max-width:768px ) {
    
        display: none;


}
}

`


const ButtonDrop = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0px;
    width: auto;

`

const ContentDrop = styled.div`

    position: absolute;
    top: 0;
    right:0;
    height: 100vh;
    display: flex;

    section:first-child{
        
        background-color: #2222;
        width: 75vw;
    }
    
    section{
        width: 25vw;
        background-color: #fff;
        div{

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px;
        border-bottom: 1px solid #2222;
        margin-bottom: 50px;


        button{
            height: 40px;
            width: 40px;
            font-family: inherit;
            font-size: 12px;
            border-radius: 50%;
            border: none;
            padding: 4px;
            cursor: pointer;
        }
    }


    h4{
        font-family: inherit;
        font-size: 20px;
        
       
    }


    nav{

        ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0px;

            li{
                padding: 16px 30px;
                cursor: pointer;
                

                &:hover{
                    background-color:rgba(235, 103, 83, 0.07);
                    box-shadow: inset 2px 0px 0px 0px  #EB6753;
                }
            }
        }
    }}

    @media (max-width: 768px) {
        
        section:first-child{ width: 20vw;}
        section{width:80vw}

    }

`




export default function Header(){

    const [open,setOpen] = useState(false)


    return(
        <ContainerHeader>
            <img src={""} alt={'LOGOMARCA'}/>
            <nav>
                <MenuList>
                   
                    <li>
                    <Link href="">Página Inicial</Link>
                    </li>
                    
                    <li>
                    <Link href="/about">Quem somos</Link>
                    </li>
                    
                    <li >
                    <Link href="/search">Imóveis</Link>
                    </li>
                    
                    <li>
                    <Link href="/condominio">Condomínio</Link>
                    </li>
                    
                    <li>
                    <Link href="/contact">Contato</Link>
                    </li>
                </MenuList>
            </nav>
            <div className="menu-drop menu-lateral">
                <ButtonDrop onClick={()=>setOpen(!open)}><DropIcon/></ButtonDrop>

                   {
                    open&&<ContentDrop>
                       
                            <section onClick={()=>setOpen(!open)}></section>
                            
                            <section>
                                <div>
                                    <h4>Bem-Vindos a Elegant</h4>
                                    <button onClick={()=>setOpen(!open)}>X</button>
                                </div>
                                <nav>
                                    <ul>
                                    <li>Home</li>
                                    <li>Casas</li>
                                    <li>Apartamentos</li>
                                    <li>Condomínio</li>
                                    </ul>
                                </nav>
                            </section>

                    </ContentDrop>} 
            </div>
        </ContainerHeader>
    )
}