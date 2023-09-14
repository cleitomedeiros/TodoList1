import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css";
import Tarea from "./Tarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  // let apiUrl = 'http://192.168.1.134:3000'
  let apiUrl = "https://jsonplaceholder.typicode.com/todos";
  // let apiUrl = 'https://playground.4geeks.com/apis/fake/todos/'

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTareas(data))
      .catch((error) => {
        console.log("Error al obtener tareas", error);
      });
  }, []);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.title = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const eliminarTodos = () => {
    setTareas("");
  };

  //   const mostraTareas = () => {
  //     if (tareas != null) {
  //         tareas.map((tarea) => (
  //           <Tarea
  //             key={tarea.id}
  //             id={tarea.id}
  //             texto={tarea.title}
  //             completada={tarea.completed}
  //             eliminarTarea={eliminarTarea}
  //           />
  //         ));
  //     }
  //   };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <button onClick={eliminarTodos}>Deletar Todos</button>
      <div className="tareas-lista-contenedor">
        {tareas &&
          tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.title}
              completada={tarea.completed}
              eliminarTarea={eliminarTarea}
            />
          ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
