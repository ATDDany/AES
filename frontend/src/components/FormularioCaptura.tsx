import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function FormularioCaptura() {
  const [uuid, setUuid] = useState('');
  const [ocr, setOcr] = useState('');

  useEffect(() => {
    // Generación automática del UUID único por formulario solicitado
    setUuid(uuidv4());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-md flex flex-col min-h-screen">
        {/* Header PWA */}
        <div className="bg-[#9D2449] p-4 text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-between">
          <span>PWA REGISTRO DE CIUDADANO - OCOTLÁN</span>
        </div>

        {/* Cuerpo del Formulario */}
        <div className="p-4 flex-1 space-y-4 overflow-y-auto pb-20">
          <div className="text-xs text-gray-400 font-mono">ID Único: {uuid}</div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Nombre Completo</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded text-sm" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Calle</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Número</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Municipio</label>
              <input type="text" value="OCOTLÁN" disabled className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-sm font-semibold text-gray-500" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Estado</label>
              <input type="text" value="JALISCO" disabled className="w-full p-2 bg-gray-100 border border-gray-300 rounded text-sm font-semibold text-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Clave de Elector</label>
              <input type="text" maxLength={18} className="w-full p-2 border border-gray-300 rounded text-sm uppercase" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Código OCR (13 dígitos)</label>
              <input type="text" maxLength={13} value={ocr} onChange={(e) => setOcr(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-sm" />
            </div>
          </div>

          {/* Extracción automática reflejada en el boceto */}
          {ocr.length >= 4 && (
            <div className="bg-gray-100 p-2 rounded text-xs text-center text-gray-700 font-medium">
              Primeros 4 dígitos OCR: <span className="font-bold text-[#9D2449]">{ocr.substring(0, 4)}</span>
            </div>
          )}

          {/* Sección de Prueba de Vida */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
            <span className="block text-xs font-bold text-gray-600 uppercase mb-2">Prueba de Vida</span>
            <p className="text-xs text-gray-500 mb-3">Complete parpadeo: (0/3)</p>
            <div className="w-full h-40 bg-black rounded flex items-center justify-center text-white text-xs">
              [ Simulador de Cámara Frontal ]
            </div>
          </div>

          <button type="button" className="w-full bg-[#9D2449] text-white py-3 rounded font-bold uppercase text-xs tracking-wider shadow">
            Guardar Registro y Enviar
          </button>
        </div>
      </div>
    </div>
  );
}