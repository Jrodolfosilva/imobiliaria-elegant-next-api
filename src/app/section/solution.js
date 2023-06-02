import styled from "styled-components"


const ContainerSectionSoluction = styled.section`

background-color: rgba(235, 103, 83, 0.05);
padding: 90px 150px;


@media (max-width:768px) {
    padding: 30px 12px;
}

`

const ContainerContent = styled.div`
text-align: center;
margin-bottom: 60px;

h2{
    font-family: inherit;
    font-size: 30px;
    font-weight: 600;
}
p{
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
}
`

const ContainerList = styled.div`

display: flex;
justify-content: space-between;


@media (max-width:768px) {
    flex-wrap: wrap;
    gap: 30px;
}

`

const ContainerCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #fff;
width: 376px;
height: 450px;
padding: 60px 30px;
border-radius: 12px;
box-shadow:0px 1px 4px rgba(24, 26, 32, 0.07);
text-align: center;
word-wrap: break-word;

h2{
    font-family: inherit;
    font-size: 20px;
    font-weight: 500;
}

p{
    font-family: inherit;
    font-size: 14px;
}

img{
    width: 150px;
   
}

button{
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #fff;
    border: 1px solid #EB6753;
    border-radius: 12px;
    padding: 13px 30px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
   

  &:hover{
    background-color: #EB6753;
    color: #fff;

}

img{
        width: 18px;
        transform: rotate(300deg);
    }
    
  }


 

`


export default function Solution (){


    return(
        <ContainerSectionSoluction>
            <ContainerContent>
                <h2>Veja como a Realton pode ajudar</h2>
                <p>Aliquam lacinia diam quis lacus euismod</p>
            </ContainerContent>
            <ContainerList>
                <ContainerCard>
                    <img src="property-buy.svg" alt=""/>
                    <h2>Compre uma propriedade</h2>
                    <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
                    <button>
                        Encontre um Imóvel
                        <img src="/arrow.svg" alt=""/>
                    </button>
                </ContainerCard>
                <ContainerCard>
                    <img src="property-buy.svg" alt=""/>
                    <h2>Compre uma propriedade</h2>
                    <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
                    <button>
                        Encontre um Imóvel
                        <img src="/arrow.svg" alt=""/>
                    </button>
                </ContainerCard>
                <ContainerCard>
                    <img src="property-sell.svg" alt=""/>
                    <h2>Quero vender um imóvel</h2>
                    <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
                    <button>
                        Anúnciar um Imóvel
                        <img src="/arrow.svg" alt=""/>
                    </button>
                </ContainerCard>
            </ContainerList>

        </ContainerSectionSoluction>
    )
}