import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Router from './components/Router/Router';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router /> 
      <Footer />
    </div>
  );
}

export default App;
