import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO,
	PROYECTO_ACTUAL,
	ELIMINAR_PROYECTO,
} from "../../types";

const proyectoReducer = (state, action) => {
	switch (action.type) {
		case PROYECTO_ACTUAL:
			return {
				...state,
				proyecto: state.proyectos.filter(
					(proyecto) => proyecto.id === action.payload,
				),
			};
		case ELIMINAR_PROYECTO:
			return {
				...state,
				proyectos: state.proyectos.filter(
					(proyecto) => proyecto.id !== action.payload,
				),
				proyecto: null,
			};
		case VALIDAR_FORMULARIO:
			return {
				...state,
				errorFormulario: true,
			};
		case AGREGAR_PROYECTO:
			return {
				...state,
				proyectos: [...state.proyectos, action.payload],
				formulario: false,
				errorFormulario: false,
			};
		case OBTENER_PROYECTOS:
			return {
				...state,
				proyectos: action.payload,
				formulario: false,
			};
		case FORMULARIO_PROYECTO:
			return {
				...state,
				formulario: true,
			};
		default:
			return state;
	}
};

export default proyectoReducer;
