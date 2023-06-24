import styled from "styled-components";



const ContainerFilterHome = styled.section`
background-color: #f7f7f7;
font-size: inherit;
padding: 10px 0px;

form{   
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    padding: 30px 0px ;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;


    label{

       padding: 0px 20px;
       border-right: 1px solid #DDDDDD;
       width: 230px;
     
       p{
        padding-left: 14px;
        font-family:inherit;
        font-weight: 600;
        font-size: 14px;
       }

        input,select{
            border: none;
            padding: 10px 0px;
            width:80% ;
            font-size: 14px;
            font-weight: 400;
        }

        select{
            
         
            padding: 10px;
            

            option{
                border-radius: 0px;
                margin: 10px 8px;
                font-family: inherit;
                
                
            
            }

        }

    }

    label:first-child{
        width: 300px;

        p{
            padding: 0px;
        }
       
        input{
            width: 100%;
        }
    }

    label:last-child{
        display: flex;
        justify-content: flex-end;
        border:none;
        width: 200px;

           div{

            background-color: #EB6753;
            color: #fff;
            width: 150px;
            padding: 10px 30px;
            border-radius: 10px;

            cursor: pointer;
           }
        
    }


}

@media (max-width:760px) {
    
  
    form{

        width: auto;
        flex-direction: column;
        gap: 15px;

        p{
            padding: 0px;
        }

        label{
            width: 100%;
            border: none;

            select,input{
                width: 100%;
                background-color: #fff;
            }

            p{
                padding-left: 14px;
            }
        }
    }


}

`


export default function FilterHome (){


    return(
        <ContainerFilterHome>
            <form>
                <label>
                    <p>Procurar</p>
                    <input type="text" placeholder="O que você está procurando..." name="busca"/>
                </label>
                <label>
                    <p>Procurando por:</p>
                    <select>
                        <option selected disabled>Tipo de imóvel</option>
                        <option>Casa</option>
                        <option>Apartamento</option>
                        <option>Condomínio</option>
                        <option>Sobrado</option>
                        <option>Flat</option>
                    </select>
                </label>
                <label>
                    <p>Localização</p>
                    <select>
                        
                        <option selected>Bairro01</option>
                        <option>Bairro02</option>
                        <option>Bairro03</option>
                        <option>Bairro04</option>
                        <option>Bairro05</option>
                        <option>Bairro02</option>
                        <option>Bairro03</option>
                        <option>Bairro04</option>
                        <option>Bairro05</option>
                        <option>Bairro02</option>
                        <option>Bairro03</option>
                        <option>Bairro04</option>
                        <option>Bairro05</option>
                        <option>Bairro02</option>
                        <option>Bairro03</option>
                        <option>Bairro04</option>
                        <option>Bairro05</option>
                        <option>Bairro02</option>
                        <option>Bairro03</option>
                        <option>Bairro04</option>
                        <option>Bairro05</option>
                        <option>Bairro02</option>
                        <option>Bairro03</option>
                        <option>Bairro04</option>
                        <option>Bairro05</option>
                        <option>Bairro02</option>
                        <option>Bairro03</option>
                        <option>Bairro04</option>
                        <option>Bairro05</option>
                        <option>Bairro02</option>
                        <option>Bairro03</option>
                        <option>Bairro04</option>
                        <option>Bairro05</option>
                    </select>
                </label>
                <label>
                    <p>Dormítorios</p>
                    <select>
                        
                        <option selected>Quarto01</option>
                        <option>Quarto02</option>
                        <option>Quarto03</option>
                        <option>Quarto04</option>
                        <option>Quarto05</option>
                    </select>
                </label>
                <label>
                    <div>
                    <img src="" alt="0"/>
                    <button onClick={()=>onSubmit()}>Procurar</button>
                    </div>
                </label>
            </form>
        </ContainerFilterHome>
    )
}