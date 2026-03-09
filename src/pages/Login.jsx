import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './Login.css';

function Login() {

  const [login,setLogin] = useState("");
  const [senha,setSenha] = useState("");
  const [erro,setErro] = useState("");
  const navigate = useNavigate();

  async function validarLogin(e){
    e.preventDefault();

    const response = await fetch('http://localhost:3020/usuarios');
    const usuarios = await response.json();

    const usuarioValido = usuarios.find(
      (u) => u.login === login && u.senha === senha
    );

    if(usuarioValido){
      navigate('/home');
    }else{
      setErro("Login ou senha errado!");
    }
  }

  return (
    <>
      <div id="container">
        <h1>Login</h1>

        <form onSubmit={validarLogin}>
          <input
            type="text" 
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
          /><br/>

          <input
            type="password" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
          /><br/>

          <button type="submit">Entrar</button>

        </form>
          {erro && <p>{erro}</p>}

        <Link to={"/cadastro"}>Não possui cadastro ?</Link><br />
      </div>
    </>
  )
}

export default Login