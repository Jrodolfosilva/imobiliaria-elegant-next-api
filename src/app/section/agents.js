import styled from "styled-components";


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

@media (max-width:450px) {
    padding: 30px 12px;
   
   div{
     display: flex;
     flex-direction: column;
    h2{
        font-size: 17px;
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



export default function Agents (){


    return(
        
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

    )
}