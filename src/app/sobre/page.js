"use client"

import styled from "styled-components";
import CTA from "../components/call-to-action";


const ContainerAbout = styled.section`

padding: 90px 0px;


`

const ContainerBanner = styled.div`
height: 300px;
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

div:first-child{
    display: flex;
    flex-direction: column;
    justify-content: center;
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


@media (max-width:760px) {
    
    padding: 30px 12px;
    flex-direction: column;
    gap: 30px;

    div{
        width: 100%;
    }

    div:first-child{

        h2{
            font-size: 17px;
        }

        p+p{
            margin-top:0px ;
        }  

    }
}


`

const ContainerImageAbout = styled.div`
padding: 90px 160px;
gap: 100px;

img{
    margin: 0 auto;
}


@media (max-width:760px) {
    
    padding: 30px 12px;
    img{
        max-width: 100%;
    }
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


@media (max-width:768px) {
    
    padding: 30px 12px;
     h2{
        font-size: 17px;
     }


     div:nth-child(2){
        flex-wrap: wrap;
        justify-content: space-evenly;
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

 

export default function about (){

    return(
        <ContainerAbout>
            <ContainerBanner>
            </ContainerBanner>
            <ContainerContent>
                <div>
                    <h2>Sua parceira confiável no mercado imobiliário</h2>
                </div>
                <div>
                    <p>
                    Bem-vindo à Elegance, onde excelência e dedicação se encontram para oferecer a você uma experiência imobiliária única. Nós somos especializados em ajudar nossos clientes a encontrar o lar perfeito, o investimento ideal ou a propriedade comercial adequada.
                    </p>
                    <p>Nossa equipe é formada por profissionais apaixonados e dedicados, que estão sempre atualizados sobre as tendências e as mudanças no setor.Aqui, oferecemos uma abordagem personalizada e individualizada, entendendo que cada cliente tem necessidades e desejos únicos. Compreendemos a importância de ouvir e entender suas expectativas, e estamos comprometidos em superar suas expectativas em todos os aspectos.
                        
                    </p>
                </div>

            </ContainerContent>
            {/*<ContainerImageAbout>
                <img src="/about-page-banner.jpg" alt=""/>
    </ContainerImageAbout>*/}
            <ContainerAgents>
                <div>
                    <h2>Nossos Time de Corretores</h2>
                    <p> Com anos de experiência e conhecimento aprofundado do mercado imobiliário, estamos preparados para atender a todas as suas necessidades.</p>

                </div>
                <div>
                    <AgentsCard>
                        <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-1.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Corretor</p>
                        </div>
                    </AgentsCard>
                    <AgentsCard>
                    <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-2.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Corretor</p>
                        </div>
                    </AgentsCard>
                    <AgentsCard>
                    <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-3.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Corretor</p>
                        </div>
                    </AgentsCard>
                    <AgentsCard>
                    <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-4.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Corretor</p>
                        </div>
                    </AgentsCard>
                    <AgentsCard>
                    <div><img src="https://creativelayers.net/themes/homez-html/images/team/agent-5.jpg" alt=""/></div>
                        <div>
                            <h3>Arlene MCCoy</h3>
                            <p>Corretor</p>
                        </div>
                    </AgentsCard>
                </div>
            </ContainerAgents>

            <CTA/>
        </ContainerAbout>

    )
}