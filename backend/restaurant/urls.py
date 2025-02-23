# restaurant/urls.py
from django.urls import path
from .views import generate_drink, order_drink, get_all_ai_drinks

urlpatterns = [
    path('aibartender/generate', generate_drink, name='generate_drink'),
    path('aibartender/order', order_drink, name='generate_drink'),
    path('aibartender/drinks', get_all_ai_drinks, name='generate_drink'),
]


