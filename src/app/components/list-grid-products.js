"use client"
import CardProduct from "@/app/utils/card-product"
import Carousel from "@/app/utils/page"
import Link from "next/link"
import styled from "styled-components"


const ContainerGrid = styled.section`

background-color: #f7f7f7;
padding:90px 160px;
display: flex;
flex-direction: column;
gap: 60px;
min-width: 100%;

section{
    display: flex;
    justify-content: space-between;
        div{

            h2{
                font-size: 30px;
                font-weight: 600;
             }
             p{
                font-family: inherit;
                font-size: 14px;
                font-weight: 300;
             }
        }
   
}


@media (max-width:450px) {
    
    padding: 30px 12px;

    section{

        flex-direction: column;
        gap: 30px;
        div{

            h2{
                font-size: 17px;
            }
            p{
                font-size: 14px;
            }
        }
    }

}

`

const ContainerList = styled.section`



`

const ContainerButtom =  styled.button`

    font-family: inherit;
    font-size: 15px;
    font-weight: 600;

    border: none;
    background-color: transparent;
    cursor: pointer;

    img{
        width: 20px;
        transform: rotate(300deg);
    }


    @media (max-width:450px) {
        
        font-size: 13px;
    }

`


async function ListGridProducts(){

    const chaveKey ="e09693ec32907a7f812265cb62f53486";
    const quantidadePorPagina = 3;
    let paginaAtual =1
    let paginaTotal ;

    const url =`https://elegan34-rest.vistahost.com.br/imoveis/listar?key=${chaveKey}&showtotal=1&pesquisa={"fields":["Codigo","Categoria","Bairro","Cidade","ValorVenda","ValorLocacao","Dormitorios","Suites","Vagas","AreaTotal","AreaPrivativa","Caracteristicas","InfraEstrutura"],"order":{"Bairro":"asc"},"paginacao":{"pagina":1,"quantidade":${quantidadePorPagina}}}`;


   const response = await fetch(url,{
    headers:{
        "Accept":"application/json"
    }
   });
   const responseData = await response.json().catch((error)=>console.log(error))
   


    return(
        <ContainerGrid>
            <section>
                <div>
                    <h2>Descubra nossos imóveis em destaque</h2>
                    <p>Descubra nossas listas em destaque</p>
                </div>
                <div>
                <Link href="/search">
                     <ContainerButtom>
                        Todos os Imóveis
                        <img src="/arrow.svg" alt=""/>
                     </ContainerButtom>
                </Link>
                   
                </div>
            </section>
                <div style={{display:"flex"}}>
                   {console.log(responseData)
                    
                   }
                       
                    </div>
            

        </ContainerGrid>
    )

}

export default ListGridProducts