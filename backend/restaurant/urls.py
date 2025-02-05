# restaurant/urls.py
from django.urls import path
from .views import HelloRestaurant

urlpatterns = [
    path('api/hello/', HelloRestaurant.as_view(), name='hello-restaurant'),
    path('api/hack/', HelloRestaurant.as_view(), name='hello-restaurant'),
]
