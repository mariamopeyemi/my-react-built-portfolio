import './App.css';
import NavBar from './MyComponents/NavBar';
import ContactPage from './Pages/ContactPage';
import HeaderPage from './Pages/HeaderPage';
import HeroPage from './Pages/HeroPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderPage/>
      <HeroPage />
      <ContactPage />
    </div>
  );
}

export default App;
