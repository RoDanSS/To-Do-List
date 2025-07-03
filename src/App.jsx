import { useState } from 'react'
import './App.css'
import StatusTarea from './components/StatusTarea'

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: 'Aprender React',
      estado: 'Por hacer',
    },
    {
      id: 2,
      nombre: 'Aprender JavaScript',
      estado: 'En progreso',
    },
    {
      id: 3,
      nombre: 'Aprender CSS',
      estado: 'Por hacer',
    },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')

  return (
    <>
      <div>
        <h1>Lista de tareas</h1>
        <p>Esta es una lista de tareas que puedes gestionar.</p>
        <div>
          <h2>Nueva tarea</h2>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una nueva tarea"
          required
        />
        <button
          onClick={() => {
            if (nuevaTarea.trim() === '') {
              alert('El elemento no puede estar vacío.')
            } else {
              const nuevaTareaObj = {
                id: tareas.length + 1,
                nombre: nuevaTarea,
                estado: 'Por hacer', // Corregido para coincidir con los filtros
              }
              setTareas([...tareas, nuevaTareaObj])
              setNuevaTarea('')
            }
          }}>Registrar tarea</button>
      </div>
      <div>
        <h2>Estados tareas</h2>
        <div className='tareas-container'>
          {/*{tareas.map((tarea) => (
            <div key={tarea.id}>
              <h3>{tarea.nombre}</h3>
              <p>Estado: {tarea.estado}</p>
            </div>
          ))}*/ }
          <StatusTarea tarea={tareas} estado="Por hacer" />
          <StatusTarea tarea={tareas} estado="En progreso" />
          <StatusTarea tarea={tareas} estado="Hecho" />
        </div>
        </div>
        
      </div>
    </>
  )
}

export default App
