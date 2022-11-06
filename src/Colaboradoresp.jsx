import React from "react";
import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

const Colaboradores = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

    const valorNombre = (e) => {
        setNombre(e.target.value)
    }
    const valorCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const enviarInput = (e) => {
        e.preventDefault()
        setListaColaboradores([...listaColaboradores, { id: Date.now(), nombre: nombre, correo: correo }])
        
    }

    return (
        <div className="p-5">
            <input className="form-control " type="type" placeholder="Nombre" onChange={valorNombre} />
            <p>{nombre}</p>
            <input className="form-control " type="type" placeholder="Correo" onChange={valorCorreo} />
            <p>{correo}</p>
            <button className="btn btn-primary" onClick={enviarInput}>Agregar</button>
            <br></br>
            <ul >
                {listaColaboradores.map(colaborador => <li key={colaborador.id}>{colaborador.nombre}-{colaborador.correo}</li>)}
            </ul>
        </div>
    )
}
export default Colaboradores