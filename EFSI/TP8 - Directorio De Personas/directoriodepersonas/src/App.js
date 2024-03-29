import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header   from "./components/Header";
import Error404 from "./components/Error404";
import Contact  from "./components/Contact";
import Stats    from "./components/Stats";
import Person   from "./components/Person";
import Home     from "./components/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user/:id"  element={<Person />}/>
        <Route path="/stats" element={<Stats/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route component={Error404} />  
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;



/*


*/