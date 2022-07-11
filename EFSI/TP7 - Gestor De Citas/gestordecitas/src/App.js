import { useState, createContext } from 'react';
import './App.css';
import CreateDate from './components/CreateDate.js';
import DateList from './components/DateList.js';

export const DatesContext = createContext();

export default function App() {
  const [dates, setDates] = useState([]);
  function deleteDate(id){
    setDates(_dates => _dates.filter(date => date.id !== id));
  }
  return (
    <>
      <DatesContext.Provider value={dates}>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <CreateDate createHandler={setDates}/>
          <DateList deleteHandler={deleteDate}/>
        </div>
      </DatesContext.Provider>
    </>
  );
}

