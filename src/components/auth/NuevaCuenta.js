import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const [error, guardarError] = useState(false)

    const {nombre, email, password, confirmar} = usuario;

    const iniciarSeion = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const validarUsuario = e => {
        e.preventDefault();

        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
            guardarError(true)
            return;
        }
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>

                <form onSubmit={validarUsuario}>

                    {error ? <p>Todos los campos son obligatorios</p> : null}

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Tu Nombre"
                            onChange={iniciarSeion}
                        />
                    </div>
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
                        <label htmlFor="confirmar">Repetir Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repetir Password"
                            onChange={iniciarSeion}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Registrar" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;