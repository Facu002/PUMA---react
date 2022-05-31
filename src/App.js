import NavBar from "./components/NavBar";
import MainDisplay from "./components/MainDisplay";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import css from './styles/style.css'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<MainDisplay/>}/>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
