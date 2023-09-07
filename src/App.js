import './App.css';
import bin from './imagenes/bin.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='bin-logo-contenedor'>
        <img
        src={bin}
        alt='bin'
        className='bin-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Todo List</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
