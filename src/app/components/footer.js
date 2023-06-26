"use client"
import Link from "next/link";
import styled from "styled-components";


const ContainerFooter = styled.footer`

    background-color: var(--azul-elegance);
    color: #fff;

    display: flex;
    justify-content: space-between;

    padding: 90px 130px;
    border-bottom:1px solid #BEBDdb;
    margin-bottom: 100px;

    p,li,a{
        font-size: 14px;
        font-weight: 300;
        color: #BEBDdb;
       
        

    }
    h4{
        color: #fff;
        margin-bottom:15px ;
        
        
    }
    a:hover{
        text-decoration: underline;
        color: #fff;
    }
    

    div{
        ul{
            list-style: none;

            a{
                text-decoration: none;
            }
        }
    }

      div:nth-child(1){
        img{
            margin-bottom: 30px;
        }
        
        
      } 

      div:nth-child(2){
        li{
            margin: 20px 0px;

        }
      }

      div:nth-child(3){
        li{
            margin: 20px 0px;

        }
      }  
    
@media (max-width:768px) {
    padding: 60px 12px;
    flex-direction: column;
    
}

`


export default function Footer (){



    return(
        <ContainerFooter>
            <div>
                <img src="/logo-branca.svg" alt="LOGOMARCA"/>
                <ul>
                    <li>
                        <label>
                            <p>Endereço</p>
                            <h4>Av. Paraguassu, 5130 - Loja 01 - Atlântida - Xangri-lá/RS</h4>
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Atendimento</p>
                            <h4>(51) 98900-7788</h4>
                            <h4> vendas@eleganceimoveis.net</h4>
                        </label>
                    </li>
                    <li>
                        <label>
                            <p>Nos acomponhe</p>
                            <a href="">
                                <img src="" alt="facebook"/>
                            </a>
                            <a href="">
                                <img src="" alt="instagram"/>
                            </a>
                            <a href="">
                                <img src="" alt="youtube"/>
                            </a>
                        </label>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Institucional</h3>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/sobre">Sobre nós</Link>
                    </li>
                    <li>
                        <Link href="/contato">Fale conosco</Link>
                    </li>
                    <li>
                        <Link href="/pesquisa">Encontre seu Imóvel</Link>
                    </li>

                </ul>
            </div>
            <div>
                <h3>Principais Bairros</h3>
                <ul>
                    <li>
                        <Link href="/pesquisa">Imóveis em Bairro01</Link>
                    </li>
                    <li>
                        <Link href="/pesquisa">Imóveis em Bairro01</Link>
                    </li>
                    <li>
                        <Link href="/pesquisa">Imóveis em Bairro01</Link>
                    </li>
                    <li>
                        <Link href="/pesquisa">Imóveis em Bairro01</Link>
                    </li>
                    <li>
                        <Link href="/pesquisa">Imóveis em Bairro01</Link>
                    </li>
                    <li>
                        <Link href="/pesquisa">Imóveis em Bairro01</Link>
                    </li>
                    <li>
                        <Link href="/pesquisa">Imóveis emBairro01</Link>
                    </li><li>
                        <Link href="/pesquisa">Imóveis emBairro01</Link>
                    </li>
                </ul>
            </div>
        </ContainerFooter>
    )
}

