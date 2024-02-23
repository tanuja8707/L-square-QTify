import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { StyledEngineProvider } from '@mui/material/styles';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar/>
      </StyledEngineProvider> 
      <Hero />
      <Card  />
    </div>
  );
}

export default App;
