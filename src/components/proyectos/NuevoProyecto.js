import { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
	const proyectosContext = useContext(proyectoContext);
	const {
		formulario,
		mostrarFormulario,
		agregarProyecto,
		mostrarError,
		errorFormulario,
	} = proyectosContext;

	const [proyecto, setProyecto] = useState({
		nombre: "",
	});

	const { nombre } = proyecto;

	const onChangeProyecto = (e) => {
		setProyecto({
			...proyecto,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitProyecto = (e) => {
		e.preventDefault();

		if (nombre === "") {
			mostrarError();
			return;
		}

		agregarProyecto(proyecto);

		setProyecto({ nombre: "" });
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-block btn-primario"
				onClick={() => mostrarFormulario()}
			>
				Nuevo Proyecto
			</button>
			{formulario ? (
				<form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
					<input
						type="text"
						className="input-text"
						placeholder="Ej. Mern"
						onChange={onChangeProyecto}
						value={nombre}
						name="nombre"
					/>
					<input
						type="submit"
						value="Add Proyect"
						className="btn btn-primario btn-block"
					/>
				</form>
			) : null}

			{errorFormulario ? (
				<p className="mensaje error">El nombre del Proyecto es obligatorio</p>
			) : null}
		</>
	);
};

export default NuevoProyecto;
