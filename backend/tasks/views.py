from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializer import CategoriaSerializer, MarcaSerializer, ProveedorSerializer, ProductoSerializer, TaskSerializer
from .models import Categoria, Marca, Proveedor, Producto, Task


# ViewSet para Categorías
class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
    # Filtrar por activos
    def get_queryset(self):
        queryset = Categoria.objects.all()
        activo = self.request.query_params.get('activo')
        if activo is not None:
            queryset = queryset.filter(activo=activo.lower() == 'true')
        return queryset


# ViewSet para Marcas
class MarcaViewSet(viewsets.ModelViewSet):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer
    
    def get_queryset(self):
        queryset = Marca.objects.all()
        activo = self.request.query_params.get('activo')
        if activo is not None:
            queryset = queryset.filter(activo=activo.lower() == 'true')
        return queryset


# ViewSet para Proveedores
class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
    
    def get_queryset(self):
        queryset = Proveedor.objects.all()
        activo = self.request.query_params.get('activo')
        if activo is not None:
            queryset = queryset.filter(activo=activo.lower() == 'true')
        return queryset


# ViewSet para Productos
class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    
    def get_queryset(self):
        queryset = Producto.objects.all()
        activo = self.request.query_params.get('activo')
        if activo is not None:
            queryset = queryset.filter(activo=activo.lower() == 'true')
        
        # Filtrar por categoría
        categoria = self.request.query_params.get('categoria')
        if categoria:
            queryset = queryset.filter(categoria_id=categoria)
        
        # Filtrar por marca
        marca = self.request.query_params.get('marca')
        if marca:
            queryset = queryset.filter(marca_id=marca)
        
        # Filtrar por proveedor
        proveedor = self.request.query_params.get('proveedor')
        if proveedor:
            queryset = queryset.filter(proveedor_id=proveedor)
        
        return queryset


# ViewSet para Tareas (original)
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
