from rest_framework import serializers
from .models import Categoria, Marca, Proveedor, Producto, Task


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nombre', 'descripcion', 'codigoUnico', 'activo']


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = ['id', 'nombre', 'descripcion', 'codigoUnico', 'activo', 'proveedorId']


class ProveedorSerializer(serializers.ModelSerializer):
    # Incluir marcas relacionadas como IDs
    marcas = serializers.PrimaryKeyRelatedField(
        many=True, 
        queryset=Marca.objects.all(), 
        required=False
    )
    
    class Meta:
        model = Proveedor
        fields = ['id', 'nombre', 'nit', 'telefono', 'email', 'direccion', 'ciudad', 'activo', 'marcas']


class ProductoSerializer(serializers.ModelSerializer):
    # Incluir nombres de relaciones para mejor lectura
    categoriaNombre = serializers.CharField(source='categoria.nombre', read_only=True)
    marcaNombre = serializers.CharField(source='marca.nombre', read_only=True)
    proveedorNombre = serializers.CharField(source='proveedor.nombre', read_only=True)
    
    class Meta:
        model = Producto
        fields = [
            'id', 'nombre', 'descripcion', 'precioUnitario', 'stockDisponible',
            'codigoUnico', 'fotoUrl', 'activo', 'minStock', 'barcode',
            'categoria', 'marca', 'proveedor',
            'categoriaNombre', 'marcaNombre', 'proveedorNombre'
        ]


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'done']
