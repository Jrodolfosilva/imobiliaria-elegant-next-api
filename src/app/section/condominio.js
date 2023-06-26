import styled from "styled-components"

const ContainerSectionCondominio =  styled.section`
padding: 90px 150px;
background-color: #fff;


@media (max-width:768px) {
    padding: 30px 12px;
}

`

const SectionContent = styled.div`

text-align: center;

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

@media (max-width:450px) {
    
    h2{
        font-size: 17px;
    }
}

`

const SectionList = styled.div`

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 20px;
margin-top: 60px;


div{
    height:250px;
    min-width: 100%;
    border-radius: 12px;
    overflow: hidden;
   
}

div:nth-child(1){

    grid-column: 1 / 3;
    grid-row: 1;
    img{
        min-width: 100%;
    }
}

div:nth-child(2){
    grid-column: 3;
}

div:nth-child(6){
    grid-row: 2;
    grid-column:5 / 3;
    img{
        min-width: 100%;
    }
}


@media (max-width:450px) {
    
display: flex;
flex-direction: column;
align-items: center;
margin-top: 030px;


div{
    min-width: auto;
    max-width: 100%;
}

}


`

export default function Condominio (){


    return(
        <ContainerSectionCondominio>
            <SectionContent>
                <h2>Bairros Selecionados</h2>
                <p>Nesta seção, você encontrará uma lista de imóveis disponíveis nos seguintes bairros</p>
            </SectionContent>
            <SectionList>
                <div>
                    <img src="lo.png" alt="" />
                </div>
                <div>
                <img src="lo.png" alt="" />
                </div>
                <div>
                <img src="lo.png" alt="" />
                </div>
                {/*Aqui iniciar os itens da coluna 2 */}
                <div>
                    <img src="lo.png" alt="" />
                </div>
                <div><img src="lo.png" alt="" /></div>
                <div><img src="lo.png" alt="" /></div>
            </SectionList>


        </ContainerSectionCondominio>
    )
}