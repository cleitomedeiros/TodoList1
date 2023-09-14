import React, { useState } from 'react';
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
    const [input, setInput] = useState('');

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id:uuidv4() ,
            texto:input,
            completada: false
        }
        props.onSubmit(tareaNueva);

        setInput('');
    }

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    return (
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input
            value={input}
            className='tarea-input'
            type='text'
            placeholder='escribe aqui!'
            name='texto'
            onChange={manejarCambio}
            />
        </form>
    )
}

export default TareaFormulario;