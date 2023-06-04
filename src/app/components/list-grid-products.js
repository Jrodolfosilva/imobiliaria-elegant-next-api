import CardProduct from "@/utils/card-product"
import Carousel from "@/utils/carousel"
import styled from "styled-components"


const ContainerGrid = styled.section`

background-color: #f7f7f7;
padding:90px 160px;
display: flex;
flex-direction: column;
gap: 60px;


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


@media (max-width:768px) {
    
    padding: 30px 12px;
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

`


async function ListGridProducts(){

    const key =""
    const url ="https://jsonplaceholder.typicode.com/todos/1"


   const response = await fetch(url);
   const responseData = await response.json().catch((error)=>console.log(error))
   


    return(
        <ContainerGrid>
            <section>
                <div>
                    <h2>Descubra nossos imóveis em destaque</h2>
                    <p>Descubra nossas listas em destaque</p>
                </div>
                <div>
                    <ContainerButtom>
                        Todos os Imóveis
                        <img src="/arrow.svg" alt=""/>
                    </ContainerButtom>
                </div>
            </section>
            <Carousel/>

        </ContainerGrid>
    )

}

export default ListGridProducts