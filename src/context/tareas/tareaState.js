import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer'
//import shortid from 'shortid'

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Tienda Virtual', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Desarrollo Mern', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Gestor de Datos', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Elegir Plataformas para programar', estado: true, proyectoId: 4},
            { id: 5, nombre: 'Tienda online', estado: true, proyectoId: 1},
            { id: 6, nombre: 'Desarrollo de aplicaciones', estado: false, proyectoId: 2},
            { id: 7, nombre: 'Gestor de virus', estado: false, proyectoId: 3},
            { id: 8, nombre: 'Elegir Plataformas', estado: true, proyectoId: 4},
            { id: 9, nombre: 'teclado negro', estado: false, proyectoId: 1},
            { id: 10, nombre: 'ingenieria en sistema', estado: true, proyectoId: 2},
            { id: 11, nombre: 'Gestor salud publica', estado: true, proyectoId: 3},
            { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4}
        ],
        tareasProyecto: null,
        errorTarea: false,
        tareaSeleccionada: null
    }
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTarea = tarea => {
       // tarea.id = shortid.generate();
        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
            payload: true
        })
    }

    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    const limpiarTarea = tarea => {
        dispatch({
            type: LIMPIAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}


export default TareaState;