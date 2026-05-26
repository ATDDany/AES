import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import FormularioCaptura from './components/FormularioCaptura';
import MapaSeccional from './components/MapaSeccional';

// Importamos también los estilos de Leaflet para que el mapa no se rompa
import 'leaflet/dist/leaflet.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Al entrar a la raíz /, cargará tu Login original */}
        <Route path="/" element={<Login />} />
        <Route path="/captura" element={<FormularioCaptura />} />
        <Route path="/mapa" element={<MapaSeccional />} />
      </Routes>
    </BrowserRouter>
  );
}