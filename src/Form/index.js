import React from "react";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './index.css';


export var nome;
export var sobrenome;
export var cpf;
export var cep;
export var endereco;
export var numero;
export var senha;


function testandoImport(){
  
  nome = document.formUsuario.nome.value;
  sobrenome = document.formUsuario.sobrenome.value;
  cpf = document.formUsuario.cpf.value;
  cep = document.formUsuario.cep.value;
  endereco = document.formUsuario.endereco.value;
  numero = document.formUsuario.numero.value;
  senha = document.formUsuario.senha_.value;
  
}









const Formulario = () => {

        const [link, setLink] = useState('')
       

        function validar(){
          var senha = document.formUsuario.senha_.value;
          var senhaC = document.formUsuario.senha_C.value;

          if(senha !== senhaC){
            alert("senhas diferentes")

            setLink("/");
            return false;
          }

          if(senha === senhaC){
           
          
          setLink("/confirmacao")
            
            

            
          }

        }

       
        
        


      return (
    
       <div className="body">

        <form name="formUsuario">
         <h2>Formulário</h2>
         <h3>Digite seu nome</h3>
          <input name="nome" onChange={testandoImport.bind(this)} required></input>
          <h3>Digite seu Sobrenome</h3>
          <input name="sobrenome" onChange={testandoImport.bind(this)}></input>
          <h3>Digite seu CPF</h3>
          <input name="cpf" onChange={testandoImport.bind(this)}></input>
          <h3>Digite seu CEP</h3>
          <input name="cep" onChange={testandoImport.bind(this)}></input>
          <h3>Digite seu Endereço</h3>
          <input name="endereco" onChange={testandoImport.bind(this)}></input>
          <h3>Digite seu Número</h3>
          <input name="numero" onChange={testandoImport.bind(this)}></input>
          <h3>Digite sua Senha</h3>
          <input type="password" name="senha_" id="senha" onChange={testandoImport.bind(this)} required></input>
          <h3>Confirme sua senha</h3>
          <input type="password" name="senha_C" id="senhaC" required></input>
            
          </form>

          <Link to={link}>
          <button type="submit" onClick={validar} className="botao" >Confirmar</button>
          </Link>
       </div>
    
      );
}

export default Formulario;