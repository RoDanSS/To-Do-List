import React from 'react'
import './StatusTarea.css'

export default function StatusTarea({ tarea, estado}) {
  return (
    <>
        <div className='estado-tarea'>
            
            {/*<p>{estado}</p>
            {tarea.filter((tarea) => tarea.estado === estado).map((tarea) => (
                <div key={tarea.id}>
                    <h3>{tarea.nombre}</h3>
                    <p>Estado: {tarea.estado}</p>
                </div>
            ))}*/}
            <p>{estado}</p>
            {tarea.filter((tarea) => tarea.estado === estado).length > 0 ? (
                tarea.filter((tarea) => tarea.estado === estado).map((tarea) => (
                    <div key={tarea.id}>  
                        <h3>{tarea.nombre}</h3>
                        <p>Estado: {tarea.estado}</p>   
                    </div>
                ))
            ) : (
                <p>No hay tareas en este estado.</p>)}
        </div>
    </>
  )
}
