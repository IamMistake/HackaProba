from django.db import models


# Create your models here.

class Product(models.Model):
    productName = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    size = models.CharField(max_length=50, null=True, blank=True)  # Can be null or empty string
    price = models.DecimalField(max_digits=10, decimal_places=2)
    color = models.CharField(max_length=50)
    imageUrl = models.CharField(max_length=500)

    def __str__(self):
        return self.productName


class AIProduct(models.Model):
    punchLine = models.CharField(max_length=200)
    imageUrl = models.CharField(max_length=500)
