from django.urls import path
from .views import (
    StartupIdeaListCreateAPIView,
    StartupIdeaRetrieveUpdateDestroyAPIView,
    EventListCreateAPIView,
    EventRetrieveUpdateDestroyAPIView,
    UserListAPIView,
    UserRetrieveAPIView,
)

urlpatterns = [
    # Startup Ideas endpoints
    path('api/startup-ideas/', StartupIdeaListCreateAPIView.as_view(), name='startup-idea-list-create'),
    path('api/startup-ideas/<int:pk>/', StartupIdeaRetrieveUpdateDestroyAPIView.as_view(), name='startup-idea-detail'),
    
    # Events endpoints
    path('api/events/', EventListCreateAPIView.as_view(), name='event-list-create'),
    path('api/events/<int:pk>/', EventRetrieveUpdateDestroyAPIView.as_view(), name='event-detail'),
    
    # User endpoints
    path('api/users/', UserListAPIView.as_view(), name='user-list'),
    path('api/users/<int:pk>/', UserRetrieveAPIView.as_view(), name='user-detail'),
]