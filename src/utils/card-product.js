
import styled from "styled-components"

const ContainerCard = styled.div`

display: block;
background-color: #fff;
max-height: 400px;
width: 376px;
border-radius: 12px;
box-shadow:0px 1px 4px rgba(24, 26, 32, 0.07);
word-wrap: break-word;



`

const ContainerContextProduct = styled.div`
padding: 10px 20px 20px 20px;


`

const ContainerImage = styled.div`
overflow: hidden;
max-height: 200px;
border-radius: 20px 20px 0px 0px;

    img{
    width: 376px;
    max-height: 200px;
    border-radius: 012px 12px 0px 0px;
    transition: 0.5s;

    :hover{
        
    transform: scale(1.1) rotate(-1deg);
    }

    }




`

const TitleProduct = styled.h3`

    font-family: inherit;
    font-size: 15px;
    font-weight: 600;

`
const ProductPrice = styled.h3`

    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    color: #EB6753;

`
const ProductLocation = styled.div`

    display: flex;
    align-items: center;
    gap:6px;
    margin-bottom: 10px;

    img{
        max-width: 20px;
    }
    
    p{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px;
        font-weight: 500;
        color: var(--text-descripition);
    }

`
const ProductFeature =  styled.div`

    margin-top: 10px;
    padding-top: 10px;
    border-top:2px solid #f7f7f7;


    ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        list-style: none;
        gap: 6px;

        font-size: 13px;
        text-align: center;


        li{
            display: flex;
            flex-direction: column;
            align-items: center;


            img{
                background-color: #f7f7f7;
                border-radius: 50%;
                padding: 8px;
                max-width: 40px;
            }
        }
    }

`


export default function CardProduct (imovel){


    return(
            
            <ContainerCard>
                <ContainerImage>
                    <img src={"https://www.imoveissjc.com/foto_/2022/5517/sao-jose-dos-campos-casas-condominio-urbanova-28-09-2022_11-34-40-3.jpg"} alt={""}/>
                </ContainerImage>
                <ContainerContextProduct>

                    <TitleProduct>Titulo do imóvel show</TitleProduct>
                    <ProductLocation>
                        <img src="/gps.svg" alt="icone-gps"/>
                        <p>Localizado em rua tal de tal</p>
                    </ProductLocation>
                    <ProductPrice>R$ 1888888</ProductPrice>
                    <ProductFeature>
                        <ul>
                            <li>
                                <img src="/bed.svg" alt="icone-suites"/>
                                <p>5 Suíte</p>
                            </li>
                            <li>
                                <img src="/car.svg" alt="icone-garagem"/>
                                <p>2 Vagas</p>
                            </li><li>
                                <img src="/room.svg" alt="icone-dormitorios"/>
                                <p>5 Dorm</p>
                            </li><li>
                                <img src="/chuveiro.svg" alt="icone-chuveiros"/>
                                <p>5 Banheiro</p>
                            </li>
                        </ul>
                    </ProductFeature>
                </ContainerContextProduct>
            </ContainerCard>
    )
}