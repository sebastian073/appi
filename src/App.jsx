import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import menu from './componentes/menu'
import aleatorios from './componentes/aleatorios';
import lista from './componentes/lista';
import favoritos from './componentes/favoritos';
import usuarios from './componentes/usuarios';
import detalle from './componentes/detalle';
import original from './componentes/original';


function App() {

  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/original" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalle/:name" element={<Detalle />} />
      </Routes>

    </Router>
  );
}

export default App;