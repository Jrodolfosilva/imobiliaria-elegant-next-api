


"use client"
async function MeuComponente (){


const chaveKey ="e09693ec32907a7f812265cb62f53486";
const quantidadePorPagina = 3;
let paginaAtual =1
let paginaTotal ;

    const url =`http://elegan34-rest.vistahost.com.br/imoveis/listar?key=${chaveKey}&showtotal=1&pesquisa={"fields":["Codigo","Categoria","Bairro","FotoDestaque","Cidade","ValorVenda","ValorLocacao","Dormitorios","Suites","Vagas","AreaTotal","AreaPrivativa","Caracteristicas","InfraEstrutura"],"order":{"Bairro":"asc"},"paginacao":{"pagina":1,"quantidade":${quantidadePorPagina}}}`;


   const response = await fetch(url,{
    headers:{
        "Accept":"application/json"
    }
   });
   const responseData = await response.json().catch((error)=>console.log(error))


   const imoveisData = Object.values(responseData).filter(item => typeof item === 'object');
   const imoveis = imoveisData
  return (
    <div>
      <h1>Lista de Imóveis</h1>
      {imoveis.map(imovel => (
        <div key={imovel.Codigo}>
          <h2>{imovel.Categoria}</h2>

          <p>Bairro: {imovel.Bairro}</p>
          <p>Cidade: {imovel.Cidade}</p>
          <p>Valor Venda: {imovel.ValorVenda}</p>
          <p>Valor Locação: {imovel.ValorLocacao}</p>
          <p>Dormitórios: {imovel.Dormitorios}</p>
          <p>Suítes: {imovel.Suites}</p>
          <p>Vagas: {imovel.Vagas}</p>
          <p>Área Total: {imovel.AreaTotal}</p>
          <img src={imovel.FotoDestaque}/>
          <p>Área Privativa: {imovel.AreaPrivativa}</p>
          {/* Outras informações do imóvel */}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MeuComponente;


