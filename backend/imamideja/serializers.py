from rest_framework import serializers
from .models import StartupIdea, Event, User

class StartupIdeaSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    image = serializers.URLField(required=False, allow_null=True)  # Add this line

    class Meta:
        model = StartupIdea
        fields = ['id', 'startupName', 'creator', 'description', 'participants', 'firstMeet', 'image']
        read_only_fields = ['id', 'participants']

    def create(self, validated_data):
        instance = StartupIdea.objects.create(**validated_data)
        # Automatically add the creator as a participant
        instance.participants.add(validated_data['creator'])
        return instance
    
class EventSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    eventName = serializers.CharField(source='name')
    image = serializers.URLField(required=False, allow_null=True)
    
    class Meta:
        model = Event
        fields = ['id', 'eventName', 'type', 'mentor', 'description', 'date', 'image']
        read_only_fields = ['id']

class UserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    skills = serializers.ListField(child=serializers.CharField(), allow_empty=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'skills']