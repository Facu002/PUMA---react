// import NavBar from "./components/NavBar";
import Nav from "./components/Nav";
// import MainDisplay from "./components/MainDisplay";
import Sidebar from "./components/Sidebar";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import  CartContextProvider from "./components/CartContext";
import  CartContextProvider from "./context/Context";

function App() {
  return (

    <CartContextProvider>
    <BrowserRouter>
      <div className="App">

        <Nav/>

        <div className="flex">
        
        <Sidebar/>

          <div className="content">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route  path="/cart" element={<Cart/>}/>
                <Route path="category/:idCategory" element={<Categories/>}/>
                <Route path="item/:id" element={<ItemDetail/>}/>
              </Routes>
          </div>

        </div>

        <Footer/>
      </div>
    </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;