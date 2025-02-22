from django.db import models
from rest_framework import serializers


class AIDrink(models.Model):
    drinkName = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    price = models.FloatField()
    instructions = models.CharField(max_length=200)

    def __str__(self):
        return self.drinkName


class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.FloatField()
    metric = models.CharField(max_length=20)
    drink = models.ForeignKey(AIDrink, on_delete=models.CASCADE, related_name='ingredients')

    def __str__(self):
        return self.name
