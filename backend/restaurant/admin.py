from django.contrib import admin
from .models import AIDrink,Ingredient  # Replace with your actual model name

# Register the model to the admin panel
admin.site.register(AIDrink)
admin.site.register(Ingredient)
# admin.site.register(AIDrinkIngredientRelation)
