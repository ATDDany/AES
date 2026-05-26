import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'react-leaflet';

// Datos de prueba simulando la respuesta del API de secciones con su conteo
const datosSeccionalesSimulados = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { seccion: 2845, registros: 1452, nombre: "Ocotlán Centro" },
      geometry: {
        type: "Polygon",
        coordinates: [/* Coordenadas del polígono de Ocotlán */]
      }
    }
  ]
};

export default function MapaSeccional() {
  // Función para darle color al polígono según la densidad de registros (como el boceto)
  const estiloMapaColor = (feature: any) => {
    const registros = feature.properties.registries || 0;
    let fillColor = '#fcd4dc'; // Densidad Baja
    if (registros > 1000) fillColor = '#9D2449'; // Densidad Alta
    else if (registros > 500) fillColor = '#c23d64'; // Densidad Media

    return {
      fillColor: fillColor,
      weight: 1.5,
      opacity: 1,
      color: 'white', // Borde blanco para separar secciones
      fillOpacity: 0.8
    };
  };

  return (
    <div className="h-full w-full relative">
      <MapContainer center={[20.35, -102.77]} zoom={13} className="h-[500px] w-full rounded-lg shadow-inner">
        {/* Fondo de mapa gratuito de CartoDB (Positron) igual al diseño limpio del boceto */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <GeoJSON 
          data={datosSeccionalesSimulados as any} 
          style={estiloMapaColor}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(
              `<b>Sección ${feature.properties.seccion}:</b> ${feature.properties.nombre}<br/>
               <b>Registros:</b> ${feature.properties.registros}`
            );
          }}
        />
      </MapContainer>
    </div>
  );
}