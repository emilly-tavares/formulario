import React from 'react';
import {Link} from 'react-router-dom';
import {nome} from "../Form";
import {sobrenome} from "../Form";
import {cpf} from "../Form";
import {cep} from "../Form";
import {endereco} from "../Form";
import {numero} from "../Form";
import {senha} from "../Form";
import './style.css';



const ConfirmacaoDados = () =>{

        

    return(
        <div className="body">
            
            
            <h3>Confirmação dos Dados</h3>

            <h3>Nome:</h3> <h5 id="respostas">{nome}</h5>
            <h3>Sobrenome:</h3> <h5 id="respostas">{sobrenome}</h5>
            <h3>CPF:</h3> <h5 id="respostas">{cpf}</h5>
            <h3>CEP:</h3> <h5 id="respostas">{cep}</h5>
            <h3>Endereço:</h3> <h5 id="respostas">{endereco}</h5>
            <h3>Número:</h3> <h5 id="respostas">{numero}</h5>
            <h3>Senha:</h3> <h5 id="respostas">{senha}</h5>

            <Link to="/">
            <button className="botao">Voltar</button>
            </Link>
            
            
        </div>
    );
    
}

export default ConfirmacaoDados;

