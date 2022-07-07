import { useState } from 'react';
import './App.css';
import CreateDate from './components/CreateDate.js';
import DateList from './components/DateList.js';
export default function App() {
  const [dates, setDates] = useState([]);
  function deleteDate(id){
    setDates(_dates => _dates.filter(date => date.id !== id));
  }
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <CreateDate setter={setDates}/>
        <DateList list={dates} deleteHandler={deleteDate}/>
      </div>
    </>
  );
}

