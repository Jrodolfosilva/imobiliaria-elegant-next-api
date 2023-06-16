"use client"

import styled from "styled-components";
import CTA from "../components/call-to-action";


const ContainerAbout = styled.section`

padding: 90px 0px;


`

const ContainerBanner = styled.div`
height: 450px;
padding: 90px 160px;
background-image: url("/about.jpg");

h2{
    font-family: inherit;
    font-size: 30px;
    font-weight: 600;
    color: #000;
    margin-top: 90px;
}



`

const ContainerContent = styled.section`

display: flex;
justify-content: space-between;
padding: 90px 160px;
gap: 100px;


div{
    width: 50%;
}
h2{
    font-family: inherit;
    font-size: 30px;
    font-weight: 600;
}

p{
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
    line-height: 25px;
}
p+p{
    margin-top:30px ;
}
`

const ContainerImageAbout = styled.div`
padding: 90px 160px;
gap: 100px;

img{
    margin: 0 auto;
}

`

const ContainerAgents = styled.div`

text-align: center;
padding: 90px 160px;
gap: 100px;

h2{
    
    font-family: inherit;
    font-size: 30px;
    font-weight: 600;
}

p{
    font-family: inherit;
    font-size:14px;
    font-weight: 300;
    
    margin-bottom: 60px;
}

div:nth-child(2){
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
       

        div:first-child{
            overflow: hidden;
            border-radius: 12px;
            img{
            
            transition: 0.5s;


            &:hover{
                scale: 1.1;
                transform: rotate(-03deg);
            }
         }
        }
        
    }
}

/*Refatora isso aqui, tem estilo do component AgentsCard */

`
const AgentsCard = styled.div`

div:first-child{
    border-radius: 12px;
}

h3,p{
    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    margin-top: 6px;
}

p{
    font-weight: 300;
}

`

 

export default function (){

    return(
        <ContainerAbout>
            <ContainerBanner>
                <h2>Sobre nós</h2>
            </ContainerBanner>
            <ContainerContent>
                <div>
                    <h2>missão para mudara visão do campo imobiliário.</h2>
                </div>
                <div>
                    <p>Não importa o quão organizado você seja - 
                        um excesso de brinquedos sempre garantirá que sua casa esteja uma 
                        bagunça esperando para acontecer. Felizmente, fazer com que as crianças 
                        aceitem a ideia de se livrar de suas coisas é muito mais fácil do que parece.
                    </p>
                    <p>
                    Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue.
                     Inteiro convallis condimentum sem. 
                    Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar.
                    </p>
                </div>

            </ContainerContent>
            <ContainerImageAbout>
                <img src="/about-page-banner.jpg" alt=""/>
            </ContainerImageAbout>
            <ContainerAgents>
                <div>
                    <h2>Nossos Time de Corretores</h2>
                    <p>Aliquam lacinia diam quis lacus euismod</p>

                </div>
                <div>
                    <AgentsCard>
                        <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-1.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Broker</p>
                        </div>
                    </AgentsCard>
                    <AgentsCard>
                    <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-2.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Broker</p>
                        </div>
                    </AgentsCard>
                    <AgentsCard>
                    <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-3.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Broker</p>
                        </div>
                    </AgentsCard>
                    <AgentsCard>
                    <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-4.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Broker</p>
                        </div>
                    </AgentsCard>
                    <AgentsCard>
                    <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-5.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Broker</p>
                        </div>
                    </AgentsCard>
                </div>
            </ContainerAgents>

            <CTA/>
        </ContainerAbout>

    )
}