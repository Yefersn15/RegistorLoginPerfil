# Backend Django

Este directorio contiene el backend del proyecto desarrollado con Django REST Framework.

## ¿Qué incluye?

- API REST para consumir datos desde el frontend
- autenticación con JWT
- modelos de usuarios y tareas
- soporte para CORS y filtros

## Requisitos

- Python 3.10 o superior
- pip

## Instalación

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Variables de entorno

Puedes usar un archivo .env con valores como:

- SECRET_KEY
- DEBUG
- ALLOWED_HOSTS
- CORS_ALLOWED_ORIGINS

## ¿Qué aprendí?

Con este backend aprendí a:

- construir una API REST con Django REST Framework;
- implementar autenticación JWT en un proyecto real;
- trabajar con modelos, vistas y serializadores;
- configurar CORS y permisos de acceso;
- organizar un proyecto backend de forma limpia y escalable.

