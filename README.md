# Pizzería Mamma Mia! - Hito 8

Proyecto del Hito 8 de la Academia Desafío Latam - Autenticación con JWT.

## Descripción

Aplicación web desarrollada con **React** y **Vite.js** que incorpora autenticación real con JWT, rutas protegidas y checkout autenticado.

## Componentes

- **Navbar**: menú de navegación con opciones de Inicio, Iniciar sesión/Registrarse o Perfil/Cerrar sesión (según el estado de la variable `token`), y el total de la compra formateado.
- **Header**: título y descripción de bienvenida sobre una imagen de fondo.
- **Home**: página principal que consume la API de pizzas y renderiza el listado.
- **CardPizza**: card reutilizable que recibe por props el nombre, precio, ingredientes e imagen de cada pizza, renderizando cada ingrediente en una lista.
- **Pizza**: vista de detalle que consume la API para mostrar una pizza por id.
- **Cart**: carrito de compras que permite aumentar y disminuir cantidades, elimina productos con cantidad cero y calcula el total.
- **Registro**: formulario de registro con correo electrónico, contraseña, confirmación de contraseña y validaciones.
- **InicioSesion**: formulario de inicio de sesión con correo electrónico, contraseña y validaciones.
- **Perfil**: vista de perfil con correo estático y botón de cerrar sesión.
- **NoEncontrado**: vista 404 con enlace de regreso al inicio.
- **CartContext**: estado global para agregar productos, modificar cantidades y calcular el total.
- **UserContext**: token simulado y método para cerrar sesión.
- **UserContext**: login, registro, perfil autenticado, token JWT y cierre de sesión.
- **Footer**: pie de página con la información de derechos reservados.

## Tecnologías utilizadas

- React
- Vite.js
- Bootstrap (vía CDN)

## Instalación y ejecución

Clona el repositorio e instala las dependencias:

```bash
npm install
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Genera la versión de producción:

```bash
npm run build
```

## Estructura del proyecto

```
src/
├── assets/          
├── componentes/      
├── utils/            
├── App.jsx
└── main.jsx
```

## Autor

Proyecto individual desarrollado como parte del Bootcamp de Desafío Latam.
