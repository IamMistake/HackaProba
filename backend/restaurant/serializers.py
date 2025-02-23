from rest_framework import serializers
from .models import AIDrink, Ingredient


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name', 'quantity', 'metric', 'drink']  # Adjust the fields based on your needs


class AIDrinkSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)  # Nested serializer for ingredients

    class Meta:
        model = AIDrink
        fields = ['drinkName', 'type', 'ingredients', 'instructions', 'price']  # Include ingredients in the response
