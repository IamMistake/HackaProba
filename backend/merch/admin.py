from django.contrib import admin
from .models import Product, AIProduct  # Replace with your actual model name

# Register the model to the admin panel
admin.site.register(Product)
admin.site.register(AIProduct)
