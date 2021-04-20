import Tarea from "./Tarea";
import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
	const proyectosContext = useContext(proyectoContext);
	const { proyecto, eliminarProyecto } = proyectosContext;

	if (!proyecto) return <h2>Selecciona un proyecto</h2>;

	const [proyectoActual] = proyecto;

	const tareas = [
		{ nombre: "Tarea1", estado: true },
		{ nombre: "Tarea2", estado: false },
		{ nombre: "Tarea3", estado: true },
	];

	return (
		<>
			<h2>Proyecto: {proyectoActual.nombre}</h2>
			<ul className="listado-tareas">
				{tareas.length === 0 ? (
					<li className="tarea">No hay tareas</li>
				) : (
					tareas.map((tarea) => <Tarea tarea={tarea} />)
				)}
			</ul>
			<button
				type="button"
				className="btn btn-eliminar"
				onClick={() => eliminarProyecto(proyectoActual.id)}
			>
				Eliminar proyecto &times;
			</button>
		</>
	);
};

export default ListadoTareas;
