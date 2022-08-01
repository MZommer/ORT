import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header   from "./components/Header";
import Error404 from "./components/Error404";
import Contact  from "./components/Contact";
import Stats    from "./components/Stats";
import Person   from "./components/Person";
import Home     from "./components/Home";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;



/*

        <Route path="/persona/:ID"  element={<Person />}/>
        <Route path="/estadisticas" element={<Stats/>}/>
        <Route path="/contacto" element={<Contact />}/>
        <Route component={Error404} />
*/