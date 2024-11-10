import React, { useState } from "react";

export const List = () => {

    const [tarea, setTarea] = useState('');
    const [lista, setLista] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        if (tarea.trim() === '') {alert('Debes agregar una tarea'); return;}
        const newTarea = { label: tarea, done: false }
        setLista([...lista, newTarea])
        setTarea('');
    }
    
    const handleDelete = index =>{
        setLista(lista.filter((_,i)=>i!= index))
    }

    const handleChange = e => setTarea(e.target.value);

    return (
        <>
        
            <div className="container fondoBase">
                
                <h2 className="titulo text-dark d-flex t">ToDo List</h2>
            
                <div className="container mb-3">
                    <form onSubmit={handleSubmit}>
                        <input className="boton" type="text" placeholder="Agrega una tarea" value={tarea} onChange={handleChange} />
                        <button className="btn btn-secondary mb-1" type="submit">
                            Agregar tarea
                        </button>
                    </form>

                </div>
                <div className="container fondo ">
                    <ul>
                        {lista.length > 0 ? lista.map((tarea, i) => <li key={i}>{tarea.label} <span onClick={()=>handleDelete(i)} className="fa-solid fa-trash"> </span> </li>) : <li>esperando una tarea</li>}
                    </ul>
                </div>
               
                <p className="text-dark text-opacity-50 mt-3 fs-6">
                {lista.length === 0 ? "No hay tareas en la lista" : `Lista de tareas: ${lista.length}`}
                </p>
            </div>
        </>
    )
}