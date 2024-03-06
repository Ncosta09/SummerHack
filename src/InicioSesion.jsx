import { useState } from 'react';
import './assets/styles/App.css';
import ImagenEnter from './assets/statics/enterButton.png';

function InicioSesion() {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [mostrarTituloFinal, setMostrarTituloFinal] = useState(false);
  const [mostrarError, setError] = useState(false);

  let handleChange = (e) => {
    console.log(e.target.value);
    setUsuario(e.target.value);
  };

  let handleBlurPass = (e) => {
    setPass(e.target.value);
  };

  let handleClick = () => {
    console.log(pass);
    if(pass == "123456"){
      console.log("entro");
      setMostrarTituloFinal(true);
      setError(false);
      confetti();
    }else{
      console.log("NO entro");
      setMostrarTituloFinal(false);
      setError(true);
    }
  };

  return (
    <>
      <div className='pantalla'>

        <div className='titulo'>
          <h1>Hola {usuario}!</h1>
        </div>

        <div className='cuadroDeSesion'>

          <div className='datosUsuario'>

            <div className='usuario'>
              <label htmlFor="usuario">Usuario:</label>
              <input type="text" name="usuario" id="user" onChange={handleChange} />
            </div>

            <div className='contrasena'>
              <label htmlFor="password">Contraseña:</label>
              <input type="password" name="password" id="pass" onBlur={handleBlurPass}/>
              {mostrarError && (
                <p className='errorPass'>Contraseña incorrecta</p>
              )}
            </div>

          </div>

          <div className='boton'>
            <button onClick={handleClick}><img src={ImagenEnter} alt="" /></button>
          </div>
        </div>

        {mostrarTituloFinal && (
          <div className='tituloFinal display'>
            <h1>Bienvenido {usuario} a la Web!</h1>
          </div>
        )}

      </div>
    </>
  )
}

export default InicioSesion;