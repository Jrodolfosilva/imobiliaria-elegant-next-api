"use client"

import styled from "styled-components"


const ContainerContato = styled.section`
margin: 90px 0px;
padding-top: 90px 160px;
position: relative;
background-image: url("/preloader.gif");
background-repeat: no-repeat;
background-position: center;



@media (max-width:768px) {
    padding:0px ;
    margin: 70px 0px;
    width: 100%;
   
}

`
const Containermap = styled.div`

height: 90vh; 


@media (max-width:768px) {
    height: auto;
}

`
const ContainerForm = styled.div`
    
    width: 500px;
    padding: 50px;

    border-radius: 10px;
    box-shadow: 0px 10px 40px rgba(24, 26, 32, 0.05);


    background-color: #fff;
    position: absolute;
    top: 15%;
    right: 55%;

    input[type="submit"]{
        background-color: #EB6753;
        background-color: #0E2E50;
        height: 55px;
        width: 100%;
        font-family: inherit;
        font-size:14px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        border-radius: 12px;
        color: #fff;
        transition: background-color 0.5s;

    }
    input[type="submit"]:hover{
        background-color:#ca3923 ;
    }


    h2{
        font-family: inherit;
        font-size: 20px;
        font-weight: 600;
    }


    form{

        width: 100%;
        margin-top: 30px;

        label{
            display: block;
            margin: 12px 0px;

            h3{
                font-family: inherit;
                font-size: 14px;
                font-weight: 600;
            }

            input,textarea{
                width: 100%;
                margin: 12px 0px;
                padding: 8px 16px;
                border-radius: 8px;
                border: 1px solid #DDDDDD;
                
            }

            input{
                height: 55px;

            }
        }
    }


    @media (max-width: 768px) {
        position: static;
        padding: 30px 12px;
        width: 320px;
        border-radius: 0px;
        
    }

`
const ContainerContent = styled.section`

display: block;
padding-left: 60%;
padding-right:160px;
padding-top: 60px;

h2{
    font-family: inherit;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
}

p{
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
}


@media (max-width:768px) {
    padding: 30px 12px;
}
`



export default function Contato (){

const handleValue = ()=>{

    /*controle de submissão*/
}

    return(
        <ContainerContato>
            <Containermap>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27701.739462213758!2d-50.05112032466336!3d-29.78581110347093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951877cde6bcee65%3A0xd0b49f10f955aa6d!2sImobili%C3%A1ria%20Elegance%20Im%C3%B3veis.On!5e0!3m2!1spt-BR!2sbr!4v1687719443374!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <ContainerForm>
                        <h2>Nós Adoraríamos Ouvir De Você</h2>
                        <form onSubmit={(e)=>{
                            
                            e.preventDefault()
                            
                            
                            }}>
                            <label>
                                <h3>Primeiro nome</h3>
                                <input type="text" placeholder="Seu nome"/>
                            </label>
                            <label>
                                <h3>Sobrenome</h3>
                                <input type="text" placeholder="Seu nome"/>
                            </label>
                            <label>
                                <h3>Email</h3>
                                <input type="email" placeholder="Informe seu email"/>
                            </label>
                            <label>
                                <h3>Mensagem</h3>
                            <textarea id="mensagem" name="mensagem" rows="10" cols="33" placeholder="Escreva aqui sua mensagem"></textarea>
                            </label>
                            <input type="submit" value="Enviar mensagem"/>
                        </form>
                    </ContainerForm>
            </Containermap>
            <ContainerContent>
                <h2>Conte com nossa expertise</h2>
                <p>
                Com anos de experiência no mercado imobiliário, nossa equipe se destaca pela sua expertise e conhecimento. Se você está procurando comprar ou vender um imóvel, podemos oferecer soluções personalizadas que atendam às suas necessidades. Fale conosco hoje mesmo e permita-nos ajudá-lo a alcançar seus objetivos imobiliários.
                </p>
            </ContainerContent>
           
        </ContainerContato>
    )
}