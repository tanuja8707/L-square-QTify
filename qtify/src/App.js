import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { StyledEngineProvider } from '@mui/material/styles';
import GridOfCards from './components/GridOfCards/GridOfCards';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar/>
      </StyledEngineProvider> 
      <Hero />
      <GridOfCards  />
    </div>
  );
}

export default App;
