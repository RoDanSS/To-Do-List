import { useState } from 'react'
import './App.css'
import StatusTarea from './components/StatusTarea'

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: '',
      estado: '',
    },
    {
      id: 2,
      nombre: '',
      estado: '',
    },
    {
      id: 3,
      nombre: '',
      estado: '',
    },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')
  const [modoEliminar, setModoEliminar] = useState(false)
  const [seleccionadas, setSeleccionadas] = useState([])

  // funciones drag and drop
  const handleDragStart = (e, tarea) => {
    e.dataTransfer.setData('tarea', JSON.stringify(tarea))
  }
  const handleDrop = (e, estado) => {
    const tarea = JSON.parse(e.dataTransfer.getData('tarea'))
    const nuevaTarea = { ...tarea, estado }
    setTareas((prevTareas) =>
      prevTareas.map((t) => (t.id === tarea.id ? nuevaTarea : t))
    )
  }

  // Selección y eliminación de tareas
  const handleSeleccionTarea = (id) => {
    if (!modoEliminar) return;
    setSeleccionadas((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    )
  }

  const eliminarSeleccionadas = () => {
    if (tareas.length === 0) {
      alert('Nada que eliminar');
      return;
    }
    setTareas((prev) => prev.filter((t) => !seleccionadas.includes(t.id)))
    setSeleccionadas([])
    setModoEliminar(false)
  }

  return (
    <>
      <div>
        <h1 className='list-task'>Lista de tareas</h1>
        <p className='text'>Esta es una lista de tareas que puedes gestionar.</p>
        <div>
          <h2 className='task'>Nueva tarea</h2>
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Escribe una nueva tarea"
            required
          />
          <button
            className='btn'
            onClick={() => {
              if (nuevaTarea.trim() === '') {
                alert('El elemento no puede estar vacío.')
              } else {
                const nuevaTareaObj = {
                  id: tareas.length + 1,
                  nombre: nuevaTarea,
                  estado: 'Por hacer',
                }
                setTareas([...tareas, nuevaTareaObj])
                setNuevaTarea('')
              }
            }}>Registrar tarea</button>
          <button
            className='btn'
            style={{background: modoEliminar ? '#e57373' : undefined, marginTop: 8}}
            onClick={() => {
              
              if (tareas.every(t => !t.nombre || t.nombre.trim() === '')) {
                alert('El elemento está vacío');
                return;
              }
              setModoEliminar((prev) => !prev)
            }}
          >{modoEliminar ? 'Cancelar selección' : 'Eliminar tareas'}</button>
        </div>
        <div className='estate-task'>
          <h2>Estados tareas</h2>
          <div className='tareas-container'>
            <StatusTarea 
              tarea={tareas} 
              estado="Por hacer" 
              handleDrop={handleDrop} 
              handleDragStart={handleDragStart} 
              modoEliminar={modoEliminar}
              seleccionadas={seleccionadas}
              handleSeleccionTarea={handleSeleccionTarea}
            />
            <StatusTarea 
              tarea={tareas} 
              estado="En progreso" 
              handleDrop={handleDrop} 
              handleDragStart={handleDragStart} 
              modoEliminar={modoEliminar}
              seleccionadas={seleccionadas}
              handleSeleccionTarea={handleSeleccionTarea}
            />
            <StatusTarea 
              tarea={tareas} 
              estado="Hecho" 
              handleDrop={handleDrop} 
              handleDragStart={handleDragStart} 
              modoEliminar={modoEliminar}
              seleccionadas={seleccionadas}
              handleSeleccionTarea={handleSeleccionTarea}
            />
          </div>
          {modoEliminar && seleccionadas.length > 0 && (
            <button
              className='btn'
              style={{background: '#d32f2f', marginTop: 24, marginBottom: 0}}
              onClick={eliminarSeleccionadas}
            >Eliminar seleccionadas</button>
          )}
        </div>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} <a href="https://github.com/RoDanSS" target='_blank'>Rodolfo Salazar</a>. Proyectos personales.
      </footer>
    </>
  )
}

export default App
