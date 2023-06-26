"use client"

import styled from "styled-components";


const ContainerDetails = styled.section`


display: flex;
flex-direction: column;
height: 600px;
padding: 90px 130px;


`
const ContainerGallery = styled.div`




`
const ContainerContent = styled.div`
    
    display: flex;
    width: 100%;
    gap: 50px;

`
const ContainerContact =  styled.div`
    width: 40%;
    box-shadow: 0px 10px 40px rgba(24, 26, 32, 0.05);

    h2{
        font-size: 20px;
        font-family: inherit;

    }

`

const ContainerOverview = styled.div`

      width: 70%;


`


const Overview = styled.div`

    box-shadow: 0px 10px 40px rgba(24, 26, 32, 0.05);   

`

export default function Details (imovel){


    return(
        <ContainerDetails>

            <ContainerGallery>

            </ContainerGallery>
            <ContainerContent>
                <ContainerOverview>
                    <Overview>
                        <ul>
                            <li>
                                <img src="" />
                                <div>
                                    <h4>Quartos</h4>
                                    <p>3</p>
                                </div>
                            </li>
                            <li>
                                <img src="" />
                                <div>
                                    <h4>Quartos</h4>
                                    <p>3</p>
                                </div>
                            </li>
                            <li>
                                <img src="" />
                                <div>
                                    <h4>Quartos</h4>
                                    <p>3</p>
                                </div>
                            </li>
                            <li>
                                <img src="" />
                                <div>
                                    <h4>Quartos</h4>
                                    <p>3</p>
                                </div>
                            </li>
                            <li>
                                <img src="" />
                                <div>
                                    <h4>Quartos</h4>
                                    <p>3</p>
                                </div>
                            </li>
                            <li>
                                <img src="" />
                                <div>
                                    <h4>Quartos</h4>
                                    <p>3</p>
                                </div>
                            </li>
                            <li>
                                <img src="" />
                                <div>
                                    <h4>Quartos</h4>
                                    <p>3</p>
                                </div>
                            </li>
                        </ul>
                    </Overview>
                </ContainerOverview>
                <ContainerContact>
                        <h2>Agende uma visita</h2>
                        <form>
                            <label>
                                <input type="text" placeholder="Nome"/>
                            </label>
                            <label>
                                <input type="text" placeholder="Telefone"/>
                            </label>
                            <label>
                                <input type="email" placeholder="Email"/>
                            </label>
                            <label>
                                <textarea placeholder="Escreva sua mensagem aqui..." rows="8">

                                </textarea>
                            </label>
                        </form>
                </ContainerContact>
            </ContainerContent>


        </ContainerDetails>
    )
}