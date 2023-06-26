import styled from "styled-components";


const ContainerCTAHome =  styled.section`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 140px 230px;
background-image: url("/cta-bg-1.jpg");
background-repeat: no-repeat;
background-position: center;

text-align: center;
color: #fff;



h2{
    font-size: 37px;
    

}

button{
    font-family: inherit;
    font-size:15px;
    font-weight: 500;
    padding: 13px 30px;
    border-radius: 8px;
    border:none;
    margin: 30px 15px;
    color: #fff;
}

button:first-child{
    background-color:var(--destaque) ;
}

button:last-child{
    background-color: #fff;
    color:var(--heading-color);
}

@media (max-width:768px) {
    
    padding: 60px 12px;
    gap: 20px;

    p{
        font-size:14px;
    }
    h2{
        font-size: 17px;
    }

    button{
        margin: 15px 0px;
        font-size: 14px;
    }
}

`


export default function CtaHome (){



    return(
        <ContainerCTAHome>
              
                <p>COMPRAR OU VENDA</p>
                <h2>Olhando para comprar uma nova propriedade ou vender uma existente? A Elegance oferece uma solução incrível!</h2>
                <div>
                    <button>
                        Anúnciar imóvel
                        <img src="/" alt=">"/>
                    </button>
                    <button>
                        Procurar imóvel
                        <img src="/" alt=">"/>
                    </button>
                </div>
            
        </ContainerCTAHome>
    )
}