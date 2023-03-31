import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;