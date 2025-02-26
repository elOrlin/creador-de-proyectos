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

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload) 
            }
        case AGREGAR_TAREAS:
            return {
                ...state,
                tareas: [action.payload, ...state.tareas],
                errorTarea: false
            }
        case VALIDAR_TAREA: 
            return {
                ...state,
                errorTarea: action.payload
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA: 
            return {
                ...state,
                tareas: state.tareasProyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                tareaSeleccionada: null
            }
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaSeleccionada: action.payload
            }
        case LIMPIAR_TAREA: 
            return {
                ...state,
                tareaSeleccionada: null
            }   
        default:
            return state;
    }
}