
import './App.css';
import Colaboradores from './Colaboradoresp';
import { BaseColaboradores } from './BaseColaboradores';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  const [searchTerm, setSearchTerm] = useState('')

  return (
<div className='App-arreglo'>
    <div className="App p-5">
      <input className="form-control me-2" type="search" placeholder="Filtrar Colaborador" onChange={e => { setSearchTerm(e.target.value) }} />
      {BaseColaboradores.filter((val) => {
        if (searchTerm == "") {
          return val
        }
        else if (val.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (<div className="user" key={key}>
          <p>{val.nombre}</p>
        </div>
        );
      })}

      <Colaboradores />
    </div>
    </div>
  );

}

export default App;
