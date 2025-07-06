# ✅ To Do List

Aplicación web interactiva para crear, visualizar y gestionar tareas en diferentes estados: **Por hacer**, **En progreso** y **Hecho**.

![image](https://github.com/user-attachments/assets/68533209-5a01-4aca-9cc4-128ae6f40583)


## 📋 Descripción

Esta aplicación permite a los usuarios organizar sus tareas diarias de manera sencilla y visual. Puedes agregar nuevas tareas, moverlas entre diferentes estados mediante drag and drop, y eliminar una o varias tareas seleccionándolas. El diseño es moderno, responsivo y agradable a la vista, adaptándose a cualquier dispositivo.

## ✨ Características principales

- Interfaz limpia y centrada con fondo degradado.
- Campo para ingresar nuevas tareas y botón para registrarlas.
- Visualización de tareas por estado en tres columnas: `Por hacer`, `En progreso`, `Hecho`.
- Mover tareas entre estados arrastrando y soltando.
- Modo de eliminación múltiple: selecciona y elimina varias tareas a la vez.
- Diseño completamente responsivo para móviles y escritorio.
- Footer con copyright.

## 🛠️ Tecnologías

- **React** + **Vite**
- **HTML5**
- **CSS3** (con estilos personalizados y diseño centrado)
- **JavaScript**

## 🖥️ Estructura del Proyecto

/to-do-list/
├── public/
├── src/
│   ├── assets/
│   │   └── image.png               # Imagen (screenshot)
│   ├── components/
│   │   ├── StatusTarea.jsx         # Componente de tareas por estado
│   │   └── StatusTarea.css         # Estilos del componente de estado
│   ├── App.jsx                     # Componente principal de la aplicación
│   ├── App.css                     # Estilos generales de App
│   ├── index.css                   # Estilos globales
│   └── main.jsx                    # Punto de entrada de React
│
├── .gitignore                      # Archivos ignorados por Git
├── eslint.config.js               # Configuración de ESLint
├── index.html                      # HTML principal
├── package.json                    # Configuración del proyecto y dependencias
├── package-lock.json               # Registro exacto de dependencias
├── vite.config.js                  # Configuración de Vite
└── README.md                       # Documentación del proyecto



---

## 🧑‍💻 Instalación y uso

1. Clona el repositorio:

```bash
git clone https://github.com/RoDanSS/To-Do-List.git
cd to-do-list
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación en modo desarrollo:

```bash
npm run dev
```

4. Abre tu navegador y visita:

```
http://localhost:5173
```

¡Listo! Ya puedes comenzar a gestionar tus tareas.



