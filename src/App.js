// import NavBar from "./components/NavBar";
import Nav from "./components/Nav";
// import MainDisplay from "./components/MainDisplay";
import Sidebar from "./components/Sidebar";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import css from './styles/style.css'
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Nav/>

        <div className="flex">
        
        <Sidebar/>

          <div className="content">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="category/:idCategory" element={<Categories/>}/>
              </Routes>
          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
