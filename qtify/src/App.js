import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar/>
      </StyledEngineProvider> 
      <Hero />
    </div>
  );
}

export default App;
