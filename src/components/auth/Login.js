import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    const [error, guardarError] = useState(false)

    const {email, password} = usuario;

    const iniciarSeion = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const validarUsuario = e => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            guardarError(true)
            return;
        }

            guardarError(false)
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form onSubmit={validarUsuario}>

                    {error ? <p className="alerta alert-danger alerta-error">Todos los campos son obligatorios</p> : null}

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu Email"
                            onChange={iniciarSeion}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={iniciarSeion}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesion" />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;