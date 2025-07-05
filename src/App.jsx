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

  return (
    <>
      <div>
        <h1 className='list-task'>Lista de tareas</h1>
        <p>Esta es una lista de tareas que puedes gestionar.</p>
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
                  estado: 'Por hacer', // Corregido para coincidir con los filtros
                }
                setTareas([...tareas, nuevaTareaObj])
                setNuevaTarea('')
              }
            }}>Registrar tarea</button>
        </div>
        <div className='estate-task'>
          <h2>Estados tareas</h2>
          <div className='tareas-container'>
            {/*{tareas.map((tarea) => (
              <div key={tarea.id}>
                <h3>{tarea.nombre}</h3>
                <p>Estado: {tarea.estado}</p>
              </div>
            ))}*/ }
            <StatusTarea 
            tarea={tareas} 
            estado="Por hacer" 
            handleDrop={handleDrop} 
            handleDragStart={handleDragStart} 
            />
            <StatusTarea 
            tarea={tareas} 
            estado="En progreso" 
            handleDrop={handleDrop} 
            handleDragStart={handleDragStart} 
            />
            <StatusTarea 
            tarea={tareas} 
            estado="Hecho" 
            handleDrop={handleDrop} 
            handleDragStart={handleDragStart} 
            />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
