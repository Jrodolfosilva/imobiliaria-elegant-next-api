"use client"

import CardProduct from "@/app/utils/card-product"
import styled from "styled-components"
import { useState,useEffect } from "react"
const ContainerSearch = styled.section`

background-color: #f7f7f7;
margin-top: 90px;
padding:90px 160px;


h2{
    font-family: inherit;
    font-size: 30px;
    font-weight: 600;
}

p{
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
    max-width: 60%;
}


@media (max-width:768px) {
    
    padding: 60px 12px;
    

    h2{
        font-size: 17px;
    }
    p{
        max-width: none;
    }

}


`
const ContainerFilter = styled.div`

display: flex;
gap: 30px;
justify-content: space-between;

margin-top: 90px;

div:first-child{
    display: flex;
gap: 30px;
}
select{

    background-color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 20px;
    font-family: inherit;
    font-size: 14px;
    font-weight:300;
    text-align: center;
    cursor: pointer;


    option{
        text-align:left;
        
    }
}


@media (max-width:768px) {
    
    flex-direction: column;
    margin-top: 20px;

    div:first-child{
    
    flex-direction: column;
    gap: 10px;
}

}


`
const ListProduct = styled.div`


display: flex;
align-items: center;
flex-wrap: wrap;
margin-top: 30px;
gap: 30px;


 
`


export default function Busca (params){


    const chaveKey = "e09693ec32907a7f812265cb62f53486";
    const quantidadePorPagina = 50;
    const [paginaAtual,setPaginaAtual] = useState(1)
    const [imoveis, setImoveis] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const url = `http://elegan34-rest.vistahost.com.br/imoveis/listar?key=${chaveKey}&showtotal=1&pesquisa={"fields":["Codigo","Categoria","Bairro","FotoDestaque","Cidade","ValorVenda","ValorLocacao","Dormitorios","Suites","Vagas","AreaTotal","AreaPrivativa","Caracteristicas","InfraEstrutura"],"order":{"Bairro":"asc"},"paginacao":{"pagina":${paginaAtual},"quantidade":${quantidadePorPagina}}}`;
  
        try {
          const response = await fetch(url, {
            headers: {
              Accept: "application/json",
            },
          });
          const responseData = await response.json();
          const imoveisData = Object.values(responseData).filter(
            (item) => typeof item === "object"
          );
          setImoveis(imoveisData);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchData();
    }, [paginaAtual]);















    return(
        <ContainerSearch>
            {      console.log(imoveis)
}
            <h2>Encontre o imóvel perfeito para você</h2>
            <p>Estamos comprometidos em 
                tornar esse o processo mais fácil e eficiente para você.
                 Explore nossa lista de imóveis atualizada regularmente.</p>
            <ContainerFilter>
                    <div>
                    <select name="tipo">
                        <option selected disabled value="">Tipo do Imóvel</option>
                        <option value="valor2" >Apartamento</option>
                        <option value="valor3">Casa</option>
                        <option value="valor3">Condomínio</option>
                    </select>
                    <select name="dormitorio">
                        <option selected disabled value="">Dormitório</option>
1                        <option value="valor3">2</option>
                        <option value="valor3">3</option>
                        <option value="valor3">4</option>
                    </select>
                    <select name="Banheiros" value="vazio">
                        <option disabled value="vazio">Banheiros</option>
                        <option value="valor2" >1</option>
1                        <option value="valor3">2</option>
                        <option value="valor3">3</option>
                        <option value="valor3">4</option>
                    </select>
                    <select name="Cidade" value="vazio">
                        <option disabled value="vazio">Cidade</option>
                        <option value="valor2" >Recife</option>
1                        <option value="valor3">João Pessoa</option>
                        <option value="valor3">natal</option>
                        <option value="valor3">Sergipe</option>
                    </select>
                    </div>
                    <div>
                        <select name="sort" value="vazio">
                            <option disabled value="vazio">Filtrar por:</option>
                            <option>Mais Novos</option>
                            <option>Mais Antigos</option>
                        </select>
                    </div>
                
                   
                    
                  
                
            </ContainerFilter>
                <ListProduct>
                    {
                        imoveis.map((i)=>(

                            <CardProduct key={i.Codigo} dados={i}/>
                        ))
                    }
                            
                 </ListProduct>
                 <button onClick={()=>{
                    setPaginaAtual((paginaAtual)=>paginaAtual+1)
                    
                 }}>Carregar mais</button>
        </ContainerSearch>
    )
}