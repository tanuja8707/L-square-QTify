import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar/>
      </StyledEngineProvider> 
      
    </div>
  );
}

export default App;
