# restaurant/urls.py
from django.urls import path
from .views import get_all_products, generate_merch

urlpatterns = [
    path('merch/products', get_all_products, name='all_products'),
    path('merch/generate', generate_merch, name='all_products'),
]


