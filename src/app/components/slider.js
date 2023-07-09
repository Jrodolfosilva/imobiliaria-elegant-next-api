import styled from "styled-components";
import { useState, useEffect } from "react";

const ContainerSlide = styled.section`
  background-color: var(--heading-color);
  background-color: yellow;
  max-height:100vh ;
  overflow-x: hidden;
 
display: flex;

  img{
    min-width: 100%;
    filter: brightness(0.5);

  }

  p {
    color: red;
    font-size: 48px;
  }
`;

 function Slider() {
  const chaveKey = "e09693ec32907a7f812265cb62f53486";
  const quantidadePorPagina = 2;
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `http://elegan34-rest.vistahost.com.br/imoveis/listar?key=${chaveKey}&showtotal=1&pesquisa={"fields":["Codigo","Categoria","Bairro","FotoDestaque","Cidade","ValorVenda","ValorLocacao","Dormitorios","Suites","Vagas","AreaTotal","AreaPrivativa","Caracteristicas","InfraEstrutura"],"order":{"Bairro":"asc"},"paginacao":{"pagina":1,"quantidade":${quantidadePorPagina}}}`;

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
  }, []);

  return (
    <ContainerSlide>
      {
        imoveis&&imoveis.map((i)=>(
            <img key={i.Codigo} src={i.FotoDestaque} alt="imagem-de-imovel-em-destaque"/>
        ))
      }
    </ContainerSlide>
  );
}

export default Slider;