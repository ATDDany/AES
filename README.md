# 🗳️ Proyecto AES - Dieguito

## 📌 Descripción del Proyecto
Este proyecto es una **Aplicación Web Progresiva (PWA)** diseñada para la captura, validación y monitoreo de datos electorales. La plataforma permite el registro estructurado de ciudadanos, incluye un módulo avanzado de **prueba de vida con reconocimiento biométrico por cámara**, y ofrece un potente panel analítico con **gráficos temporales y un mapa geopolítico seccionado** para el seguimiento de metas en tiempo real.

El sistema implementa un esquema estricto de **Control de Acceso Basado en Roles (RBAC)** enfocado en la seguridad de los datos, garantizando que la información sensible sea visible pero no copiable o exportable por los usuarios operativos.

---

## 🛠️ Stack Tecnológico
*   **Base de Datos:** PostgreSQL (Diseño relacional optimizado, indexación geoespacial y por secciones).
*   **Frontend (PWA):** React.js (TypeScript) + Tailwind CSS (v4) (Interfaz responsiva con soporte offline y consumo de cámara nativa).
*   **Backend:** Node.js / Express (Arquitectura desacoplada en capas, Middlewares de seguridad y logs estructurados).
*   **Mapas y Gráficos:** Leaflet.js / React-Leaflet (Mapeo por polígonos de secciones electorales) + Chart.js / Recharts.

---

## ⚙️ Arquitectura del Sistema (Clean Code)
El proyecto se rige bajo principios de código limpio y separación de responsabilidades:
*   **Frontend:** Arquitectura basada en componentes reutilizables, hooks personalizados para el manejo del estado del mapa/formulario, y servicios aislados para el consumo de la API.
*   **Backend:** Diseño multicapa (Rutas -> Controladores -> Capa de Datos/Modelos).
*   **Seguridad:** Restricción de eventos del DOM (`copy`, `contextmenu`, `selectstart`) para mitigar la fuga de información sensible en los roles operativos.

---

## 📋 Requerimientos y Funcionalidades

### 1. Módulo de Captura Ciudadana
Permite el almacenamiento estructurado de la siguiente información:
*   **Datos Personales:** Nombre Completo y Teléfono.
*   **Dirección / Geolocalización:** Calle, Número, Colonia, Municipio, Estado.
*   **Datos Electorales:** Clave de Elector y Código OCR (13 dígitos de la parte trasera de la INE, comenzando con la sección).
*   **Metadatos Automatizados:** 
    *   Usuario que realiza la captura.
    *   Primeros 4 dígitos del Código OCR (Extracción automática para indexación rápida).

### 2. Módulo de Prueba de Vida (Biometría Cam)
Al terminar la captura de texto, el sistema exige una validación obligatoria:
*   Uso de la cámara del dispositivo para verificar la presencia física del ciudadano.
*   Instrucción dinámica: Solicita al usuario **abrir y cerrar los ojos 3 veces**.
*   **Captura Final:** Al validar la acción, el sistema toma una fotografía automática que se vincula de forma segura al registro.

### 3. Panel de Analítica y Dashboard Visual
*   **Métricas Temporales:** Gráficos de barras/líneas distribuidos por:
    *   Registros diarios (Histórico a 7 días).
    *   Registros semanales (Acumulado al mes).
    *   Registros mensuales (Rendimiento por cuatrimestre).
*   **Métricas Geopolíticas:** Gráficos de distribución por Sección Electoral / Código OCR.
*   **Mapa Seccional Interactivo:** Mapa digital de Ocotlán vectorizado por secciones electorales que muestra la densidad y cantidad exacta de registros capturados en cada zona geográfica.

---

## 👥 Matriz de Roles y Permisos (RBAC)

El sistema cuenta con 5 niveles de acceso bien definidos. Todos los roles (excepto el Administrador) tienen **estrictamente prohibido copiar, arrastrar texto o exportar** cualquier dato de la pantalla.

| Funcionalidad / Permiso | 👤 Usuario | 🏙️ Cabeza Municipio | 🗺️ Distrital | 🏛️ Estatal | ⚡ Administrador |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Generar nuevos registros | ✅ | ✅ | ✅ | ✅ | ✅ |
| Ver gráficas (Totales generales) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Consultar perfil propio (Sin editar) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Desglose analítico por Seccional | ❌ | ✅ | ✅ | ✅ | ✅ |
| Ver usuarios bajo su jurisdicción | ❌ | ✅ (Municipio) | ❌ | ✅ (Estado) | ✅ |
| Ver métricas de municipios asignados | ❌ | ❌ | ✅ | ❌ | ✅ |
| Generar reportes y exportar datos | ❌ | ❌ | ❌ | ❌ | ✅ |

### Filtros de Reportes (Exclusivos del Administrador):
El Administrador puede exportar reportes ejecutivos agrupados por:
*   Seccional Electoral.
*   Municipio.
*   Cabeza de Proyecto.

---

## 🚀 Instalación y Despliegue Local

### Prerrequisitos
*   Node.js (Versión LTS recomendada)
*   PostgreSQL (Servidor activo y base de datos creada)

### Configuración del Frontend
1. Navega a la carpeta correspondiente:
```bash
   cd frontend
