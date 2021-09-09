import React, {useContext} from 'react';

import proyectosContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    const proyectoContext = useContext(proyectosContext)
    const {proyectos} = proyectoContext;

    const tareaContext = useContext(TareaContext)
    const {eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareaContext;

    const [proyectoActual] = proyectos;

    const tareaEliminar = id => {
        eliminarTarea(id)
        obtenerTareas(proyectoActual.id)
    }

    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false
        }else{
            tarea.estado = true
        }

        cambiarEstadoTarea(tarea)
    }

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
    }

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado 
                    ?
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => cambiarEstado(tarea)}
                            >Completo</button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)}
                            >Incompleto</button>
                        )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;