import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Cadastro() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erro,setErro] = useState("");
  const navigate = useNavigate();

  async function cadastrar(e) {
    e.preventDefault();

    if(login ==="" || senha===""){
      setErro("Campos obrigatórios em branco!")
    }else{

      await fetch('http://localhost:3020/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, senha })
      });
  
      navigate('/'); 
    }

  }

  return (
    <div id="container">
      <h2>Novo Cadastro</h2>

      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
      {erro && <p>{erro}</p>}
      <Link to={"/"}>Já possui cadastro ?</Link><br />
    </div>
  );
}

export default Cadastro;