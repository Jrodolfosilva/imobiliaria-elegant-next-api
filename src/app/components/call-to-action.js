import styled from "styled-components";


const ContainerCTAContact =  styled.div`

display: flex;
margin-bottom: 0px;

div:first-child{
width: 50%;
padding: 130px; 
background-color: rgba(235, 103, 83, 0.05);

ul{
    list-style: none;
    margin-bottom: 30px;
}


h2{
        font-family: inherit;
        font-size: 30px;
        font-weight: 600;
    }

button{
    background-color: #000;
        color: #fff;
        width: 160px;
        height: 50px;
        border-radius: 12px;
        border: 1px solid ;

        font-family: inherit;
        font-size: 15px;
        font-weight: 500;

    }
  
}


div:last-child{
    width: 50%;
   
    background-image: url("/cta-side-bg-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    
}


@media (max-width:768px) {
    div:first-child{
        width: 100%;
        padding: 60px 16px;


        h2{
            font-size: 17px;
        }
    }
    div:last-child{display:none}


}



`


const ContainerCTA = styled.section`

height: 300px;
background-color: #f7f7f7;
padding: 90px 160px;
display: flex;
align-items: center;
justify-content: space-between;
display: none;


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
    justify-content: flex-end;
    gap: 30px;
    width: 60%;

    

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
        <>
        <ContainerCTAContact>
            <div>
                <h2>Precisa de ajuda? Fale com nosso especialista.</h2>
                <ul>
                    <li>
                        <img src="" alt=""/>
                        <h5>Gestão da propriedade</h5>
                        <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>

                    </li>
                    <li>
                        <img src="" alt=""/>
                        <h5>Serviços de hipoteca</h5>
                        <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>

                    </li>
                    <li>
                        <img src="" alt=""/>
                        <h5>Serviços de Moeda</h5>
                        <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>

                    </li>
                </ul>
                <button>
                    Saber mais
                    <img src="" alt=">"/>
                </button>
                
            </div>
            <div></div>
        </ContainerCTAContact>
        <ContainerCTA>
            <div>
                <h2>Preciso de ajuda? Fale com nosso especialista.</h2>
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
        </>
    )
}