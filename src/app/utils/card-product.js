
import styled from "styled-components"
import { FormattedNumber,IntlProvider } from 'react-intl';
import Link from "next/link";
const ContainerCard = styled.a`

display: block;
background-color: #fff;
max-height: 420px;
width: 376px;
min-width: 320px;
border-radius: 12px;
box-shadow:0px 1px 4px rgba(24, 26, 32, 0.07);
word-wrap: break-word;
margin: 20 0px;



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
    min-height: 200px;
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
        align-items: center;
        list-style: none;
        text-align: center;


        li{
            display: flex;
            flex-direction: column;
            align-items: center;

            p{
                font-size: 12px;
                min-width: 100%;
            }

            img{
                background-color: #f7f7f7;
                border-radius: 50%;
                padding: 8px;
                max-width: 40px;
            }
        }
    }

`
const Button = styled.button`

height: 40px;
width: 120px;
border-radius: 8px;
border: 1px solid #000;
background-color: transparent;


`

export default function CardProduct ({dados}){


    return(
            
            <ContainerCard href={`/imovel/${dados.Codigo}`}>
                <ContainerImage>
                    <img src={dados.FotoDestaque} alt={""}/>
                </ContainerImage>
                <ContainerContextProduct>

                    {/*<TitleProduct>Titulo do imóvel show</TitleProduct>*/}
                    <ProductLocation>
                        <img src="/gps.svg" alt="icone-gps"/>
                        <p>{dados.Bairro}</p>
                    </ProductLocation>
                    <ProductPrice>
                            <IntlProvider locale="pt-BR">
                            <div>
                                <FormattedNumber
                                value={dados.ValorVenda}
                                style="currency"
                                currency="BRL"
                                />
                                </div>
                            </IntlProvider>
                    </ProductPrice>
                    <ProductFeature>
                        <ul>
                            <li>
                                <img src="/bed.svg" alt="icone-suites"/>
                                <p>{dados.Suites} Suíte</p>
                            </li>
                            <li>
                                <img src="/car.svg" alt="icone-garagem"/>
                                <p>{dados.Vagas} Vagas</p>
                            </li>
                            <li>
                                <img src="/room.svg" alt="icone-dormitorios"/>
                                <p>{dados.Dormitorios} Dorm</p>
                            </li>
                            <li>
                                <Button> 
                                    <Link href={`/imovel/${dados.Codigo}`}>
                                        Ver Detalhes
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </ProductFeature>
                </ContainerContextProduct>
            </ContainerCard>
    )
}