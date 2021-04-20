import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

const ProyectoState = (props) => {
	const proyectos = [
		{ id: 1, nombre: "mundo" },
		{ id: 2, nombre: "soka" },
		{ id: 3, nombre: "hola" },
		{ id: 4, nombre: "hello" },
	];

	const initialState = {
		proyectos: [],
		formulario: false,
	};

	// Dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(proyectoReducer, initialState);

	// const { formulario, proyectos } = state;

	// Serie de funciones para el CRUD
	const mostrarFormulario = () =>
		dispatch({
			type: FORMULARIO_PROYECTO,
		});

	const obtenerProyectos = () =>
		dispatch({
			type: OBTENER_PROYECTOS,
			payload: proyectos,
		});

	return (
		<proyectoContext.Provider
			value={{
				proyectos: state.proyectos,
				formulario: state.formulario,
				obtenerProyectos,
				mostrarFormulario,
			}}
		>
			{props.children}
		</proyectoContext.Provider>
	);
};

export default ProyectoState;
