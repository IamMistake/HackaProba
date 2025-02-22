from rest_framework import serializers
from .models import StartupIdea, Event, User

class StartupIdeaSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = StartupIdea
        fields = ['id', 'startupName', 'creator', 'description', 'participants', 'firstMeet']
        read_only_fields = ['id', 'participants']

    def create(self, validated_data):
        instance = StartupIdea.objects.create(**validated_data)
        # Automatically add the creator as a participant
        instance.participants.add(validated_data['creator'])
        return instance

class EventSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    eventName = serializers.CharField(source='name')
    
    class Meta:
        model = Event
        fields = ['id', 'eventName', 'type', 'mentor', 'description', 'date']
        read_only_fields = ['id']

class UserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    # Ensure that skills is always a list of strings
    skills = serializers.ListField(child=serializers.CharField(), allow_empty=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'skills']