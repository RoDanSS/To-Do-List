import { useState } from 'react'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: 'Aprender React',
      estado: 'hacer',
    },
    {
      id: 2,
      nombre: 'Aprender JavaScript',
      estado: 'hacer',
    },
    {
      id: 3,
      nombre: 'Aprender CSS',
      estado: 'hacer',
    },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')

  return (
    <>
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
                estado: 'hacer',
              }
              setTareas([...tareas, nuevaTareaObj])
              setNuevaTarea('')
            }
          }}>Registrar tarea</button>
      </div>
    </>
  )
}

export default App
