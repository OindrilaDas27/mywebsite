import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<LandingPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
