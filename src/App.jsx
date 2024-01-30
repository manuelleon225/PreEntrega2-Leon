import { } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState, useEffect } from 'react';
import arrayProductos from './components/json/productos.json';


const App = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(arrayProductos);
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer productos={productos} mensaje="Bienvenidos a LionBeat Music" />}/>
        <Route path="/category/:id" element={<ItemListContainer productos={productos} mensaje="Bienvenidos a LionBeat Music" />} />
        <Route path="/item/:id" element={<ItemDetailContainer productos={productos} />} />
      </Routes>
    </Router>
  );
};

export default App