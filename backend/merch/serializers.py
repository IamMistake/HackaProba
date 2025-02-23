from rest_framework import serializers
from .models import Product, AIProduct

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'productName', 'type', 'size', 'price', 'color', 'imageUrl']

class AIProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIProduct
        fields = "__all__"


