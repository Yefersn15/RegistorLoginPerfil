# Con esta instrucción definimos las rutas o URLs 
from django.urls import path, include 
from rest_framework import routers
from tasks import views 

# Versiones de APIs 
router = routers.DefaultRouter()
router.register('tasks', views.TaskView, 'tasks')
router.register('categorias', views.CategoriaViewSet, 'categorias')
router.register('marcas', views.MarcaViewSet, 'marcas')
router.register('proveedores', views.ProveedorViewSet, 'proveedores')
router.register('productos', views.ProductoViewSet, 'productos')

urlpatterns = [
    path("api/v1/", include(router.urls)),
]
