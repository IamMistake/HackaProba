from django.db import models
from django.core.exceptions import ValidationError

class User(models.Model):
    name = models.CharField(max_length=255)
    # Storing a list of life skills as a JSON list.
    skills = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.name

class StartupIdea(models.Model):
    startupName = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_startup_ideas')
    description = models.TextField()
    participants = models.ManyToManyField(User, related_name='startup_ideas')
    firstMeet = models.DateField()
    image = models.URLField(blank=True, null=True)  # New field for image URL

    def __str__(self):
        return self.startupName

class Event(models.Model):
    WEEKLY = 'weekly'
    REGULAR = 'regular'
    TYPE_CHOICES = [
        (WEEKLY, 'Weekly'),
        (REGULAR, 'Regular'),
    ]
    
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    mentor = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()
    date = models.DateField()
    image = models.URLField(blank=True, null=True)  # New field for image URL

    def clean(self):
        if self.type == self.REGULAR and not self.mentor:
            raise ValidationError({'mentor': 'Mentor is required for regular events.'})
        if self.type == self.WEEKLY and self.mentor:
            raise ValidationError({'mentor': 'Mentor must be null for weekly events.'})

    def __str__(self):
        return self.name