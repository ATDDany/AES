import React, { useState } from 'react';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm w-full border border-gray-200">
        {/* Encabezado Guinda */}
        <div className="bg-[#9D2449] p-6 text-center text-white">
          <h2 className="text-2xl font-bold tracking-wider">PWA</h2>
          <p className="text-xs uppercase tracking-widest opacity-80 mt-1">
            Sistema Electoral Ocotlán
          </p>
        </div>
        
        {/* Formulario */}
        <form className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Correo Electrónico</label>
            <input type="email" className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#9D2449]" placeholder="correo@ejemplo.com" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Contraseña</label>
            <input type="password" className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-[#9D2449]" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="w-full bg-[#9D2449] hover:bg-[#7d1c3a] text-white font-medium py-2.5 rounded transition duration-200 uppercase text-sm tracking-wider mt-2">
            Ingresar
          </button>
        </form>
        <div className="p-4 bg-gray-50 text-center text-xxs text-gray-400 border-t border-gray-100">
          © 2026 - Control Electoral Ocotlán
        </div>
      </div>
    </div>
  );
}