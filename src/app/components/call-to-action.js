import styled from "styled-components";


const ContainerCTA = styled.section`

height: 300px;
background-color: #f7f7f7;

padding: 90px 160px;

display: flex;
align-items: center;
justify-content: space-between;

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


div:last-child{

    display: flex;
    align-items: center;
    gap: 30px;

    

    button{
        background-color: transparent;
        width: 160px;
        height: 50px;
        border-radius: 12px;
        border: 1px solid ;

        font-family: inherit;
        font-size: 15px;
        font-weight: 500;

    }
    button:last-child{
        background-color: #000;
        color: #fff;
    }
}

`





export default function CTA (){




    return(
        <ContainerCTA>
            <div>
                <h2>Você precisa de ajuda?</h2>
                <p>Fale com nossos especialistas ou navegue por mais propriedades.</p>
            </div>
            <div>
                <button>
                    Contate-nos
                    <img src="" alt=""/>
                </button>
                <button>
                    <img src="" alt=""/>
                    11 9 9999 9999
                </button>
            </div>
        </ContainerCTA>
    )
}