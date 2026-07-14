# RegistorLoginPerfil

Este proyecto reúne una aplicación de registro, login y gestión de usuarios, organizada en tres partes principales para separar la lógica del frontend y los distintos backends.

## Descripción general

RegistorLoginPerfil está compuesto por:

- API_REST: backend desarrollado con Node.js, Express y MongoDB.
- backend: servicio adicional basado en Django REST Framework.
- usuarios: interfaz de usuario desarrollada con React y Vite.

La idea del proyecto es mostrar cómo integrar diferentes tecnologías para construir una solución completa de autenticación y gestión de usuarios.

## Estructura del proyecto

- API_REST/: contiene la API principal del sistema.
- backend/: incluye un backend alternativo con Django.
- usuarios/: contiene la aplicación frontend.

## Tecnologías usadas

- Node.js
- Express
- MongoDB y Mongoose
- Django REST Framework
- React
- Vite
- JWT para autenticación
- CSS para la interfaz

## Requisitos previos

Asegúrate de tener instalado:

- Node.js 18 o superior
- Python 3.10 o superior
- npm
- pip
- MongoDB o una cuenta en MongoDB Atlas

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Yefersn15/RegistorLoginPerfil.git
cd RegistorLoginPerfil
```

### 2. Configurar las variables de entorno

Cada subproyecto tiene un archivo de ejemplo para configurar el entorno:

- API_REST/.env.example
- backend/.env.example

### 3. Ejecutar la API REST

```bash
cd API_REST
npm install
cp .env.example .env
npm run dev
```

### 4. Ejecutar el backend Django

```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 5. Ejecutar el frontend

```bash
cd usuarios
npm install
npm run dev
```

## Funcionalidades principales

- Registro de usuarios
- Inicio de sesión
- Gestión de perfil
- Integración con servicios backend
- Autenticación con tokens

## ¿Qué aprendí?

Al desarrollar este proyecto aprendí a:

- integrar frontend y backend en una misma solución;
- trabajar con distintos stacks tecnológicos como Node.js, Express, Django y React;
- implementar autenticación y manejo de usuarios;
- organizar un proyecto con múltiples módulos y servicios;
- documentar y estructurar mejor un repositorio para facilitar su uso y mantenimiento.

## Nota

Este proyecto está pensado como una práctica de aprendizaje y demostración de integración entre diferentes tecnologías.
