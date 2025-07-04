import './StatusTarea.css'

export default function StatusTarea({ tarea, estado, handleDrop, handleDragStart }) {
  // Permitir soltar tareas en el contenedor de estado
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const tareasFiltradas = tarea.filter((t) => t.estado === estado);

  return (
    <>
      <div
        className='estado-tarea'
        onDrop={(e) => handleDrop(e, estado)}
        onDragOver={handleDragOver}
      >
        <h2>{estado}</h2>
        {tareasFiltradas.length > 0 ? (
          tareasFiltradas.map((t) => (
            <div
              key={t.id}
              draggable
              onDragStart={(e) => handleDragStart(e, t)}
            >
              <p>{t.nombre}</p>
              <p><strong>Estado:</strong> {t.estado}</p>
            </div>
          ))
        ) : (
          <p>No hay tareas en este estado.</p>
        )}
      </div>
    </>
  );
}
