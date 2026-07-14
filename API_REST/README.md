# API REST

Este directorio contiene la API REST del proyecto RegistorLoginPerfil. Está desarrollada con Node.js, Express y MongoDB mediante Mongoose.

## ¿Qué ofrece?

La API expone servicios para gestionar entidades como usuarios, categorías, proveedores, productos, clientes, pedidos y otros módulos del sistema.

## Requisitos

- Node.js 18 o superior
- MongoDB Atlas o una instancia local de MongoDB

## Instalación

```bash
npm install
cp .env.example .env
npm run dev
```

## Variables de entorno

Crea un archivo .env con las siguientes variables:

- PORT: puerto en el que correrá la API
- MONGODB_URI: cadena de conexión a MongoDB
- JWT_SECRET: clave secreta para firmar tokens

## Scripts disponibles

- npm run dev: inicia la API en modo desarrollo
- npm run start: inicia la API en modo producción

## ¿Qué aprendí?

Durante el desarrollo de esta API aprendí a:

- crear rutas y controladores en Express;
- conectar una aplicación Node.js con MongoDB usando Mongoose;
- trabajar con autenticación y tokens JWT;
- organizar endpoints REST de forma modular;
- manejar variables de entorno para proteger datos sensibles.
