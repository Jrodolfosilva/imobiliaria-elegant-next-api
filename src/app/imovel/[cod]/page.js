"use client"
import styled from "styled-components"
import { useState, useEffect } from "react"

const ContainerParams= styled.div`

margin-top: 300px;

color: red;
height: 100vh;
h1{
    font-size: 50px;
}
`


export default function Imovel ({params}){


    const codigo = params.cod

    const chaveKey = "e09693ec32907a7f812265cb62f53486";
    const quantidadePorPagina = 2;
    const [imoveis, setImoveis] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const url = `http://elegan34-rest.vistahost.com.br/imoveis/listar?key=${chaveKey}&imovel=${codigo}&pesquisa={"fields":["Codigo","Categoria","Bairro","FotoDestaque","Cidade","ValorVenda","ValorLocacao","Dormitorios","Suites","Vagas",{"Foto":["Foto","FotoPequena","Destaque"]},"AreaTotal","AreaPrivativa","Caracteristicas","InfraEstrutura"],"order":{"Bairro":"asc"},"paginacao":{"pagina":1,"quantidade":${quantidadePorPagina}}}`;
        
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

      console.log(imoveis)
  
      fetchData();
    }, []);
  




    return(
        <ContainerParams>
        <h1>{params.cod}</h1>
        
        </ContainerParams>
    )
}