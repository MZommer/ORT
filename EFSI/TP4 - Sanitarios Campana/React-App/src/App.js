import './css/bootstrap.min.css';
import './css/styles.css';
import Header from './components/Header.js'
import Exposition from './components/Exposition.js'
import Gallery from './components/Gallery.js'
import Sponsors from './components/Sponsors.js'
import Footer from './components/Footer.js'
function App() {
  return (
    <div className="App">
      <Header/>
      <Exposition/>
      <Gallery/>
      <div className="separator"></div>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
