import Tarea from "./Tarea";
const ListadoTareas = () => {
	const tareas = [
		{ nombre: "Tarea1", estado: true },
		{ nombre: "Tarea2", estado: false },
		{ nombre: "Tarea3", estado: true },
	];

	return (
		<>
			<h2>Proyecto: Tienda</h2>
			<ul className="listado-tareas">
				{tareas.length === 0 ? (
					<li className="tarea">No hay tareas</li>
				) : (
					tareas.map((tarea) => <Tarea tarea={tarea} />)
				)}
				<button type="button" className="btn btn-eliminar">
					Eliminar proyecto &times;
				</button>
			</ul>
		</>
	);
};

export default ListadoTareas;
