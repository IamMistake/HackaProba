# restaurant/urls.py
from django.urls import path
from .views import get_all_products, generate_merch, order_merch, get_all_ai_products, populate

urlpatterns = [
    path('merch/products', get_all_products, name='all_products'),
    path('merch/generate', generate_merch, name='all_products'),
    path('merch/order', order_merch, name='all_products'),
    path('merch/aiproducts', get_all_ai_products, name='all_products'),
    path('merch/populate', populate, name='all_products'),
]


