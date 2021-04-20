import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

const proyectoReducer = (state, action) => {
	switch (action.type) {
        case OBTENER_PROYECTOS:
			return {
				...state,
                proyectos: action.payload,
				formulario: true,
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
