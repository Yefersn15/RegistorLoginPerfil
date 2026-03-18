from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    codigoUnico = models.CharField(max_length=50, unique=True)
    activo = models.BooleanField(default=True)
    
    def __str__(self):
        return self.nombre


class Marca(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    codigoUnico = models.CharField(max_length=50, unique=True)
    activo = models.BooleanField(default=True)
    proveedorId = models.CharField(max_length=50, blank=True, null=True)
    
    def __str__(self):
        return self.nombre


class Proveedor(models.Model):
    nombre = models.CharField(max_length=200)
    nit = models.CharField(max_length=50, unique=True)
    telefono = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    direccion = models.TextField(blank=True)
    ciudad = models.CharField(max_length=100, blank=True)
    activo = models.BooleanField(default=True)
    # Relación many-to-many con marcas
    marcas = models.ManyToManyField(Marca, related_name='proveedores', blank=True)
    
    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    precioUnitario = models.DecimalField(max_digits=12, decimal_places=2)
    stockDisponible = models.IntegerField(default=0)
    codigoUnico = models.CharField(max_length=50, unique=True)
    fotoUrl = models.URLField(blank=True)
    activo = models.BooleanField(default=True)
    minStock = models.IntegerField(default=1)
    barcode = models.CharField(max_length=100, blank=True)
    # Relaciones
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, blank=True, related_name='productos')
    marca = models.ForeignKey(Marca, on_delete=models.SET_NULL, null=True, blank=True, related_name='productos')
    proveedor = models.ForeignKey(Proveedor, on_delete=models.SET_NULL, null=True, blank=True, related_name='productos')
    
    def __str__(self):
        return self.nombre


# Modelo original de tareas (opcional, se puede mantener)
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title
