from rest_framework import generics
from .models import StartupIdea, Event
from .serializers import StartupIdeaSerializer, EventSerializer
from .models import User
from .serializers import UserSerializer

# Startup Idea Endpoints

class StartupIdeaListCreateAPIView(generics.ListCreateAPIView):
    """
    GET: List all startup ideas.
    POST: Create a new startup idea.
    In the POST logic, the serializer can automatically add the creator to the participants list.
    """
    queryset = StartupIdea.objects.all()
    serializer_class = StartupIdeaSerializer

class StartupIdeaRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve details for a specific startup idea.
    PUT/PATCH: Update a specific startup idea.
    DELETE: Delete a specific startup idea.
    """
    queryset = StartupIdea.objects.all()
    serializer_class = StartupIdeaSerializer

# Event Endpoints

class EventListCreateAPIView(generics.ListCreateAPIView):
    """
    GET: List all events.
    POST: Create a new event.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve details for a specific event.
    PUT/PATCH: Update a specific event.
    DELETE: Delete a specific event.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    

class UserListAPIView(generics.ListAPIView):
    """
    GET: List all users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRetrieveAPIView(generics.RetrieveAPIView):
    """
    GET: Retrieve details for a specific user.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer