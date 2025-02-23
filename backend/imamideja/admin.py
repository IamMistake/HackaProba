from django.contrib import admin
from .models import User, StartupIdea, Event

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(StartupIdea)
class StartupIdeaAdmin(admin.ModelAdmin):
    # Include 'image' in list_display so it’s visible in the admin list view
    list_display = ('id', 'startupName', 'creator', 'firstMeet', 'image')
    list_filter = ('firstMeet',)
    search_fields = ('startupName', 'description')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    # Likewise, include 'image' for Event
    list_display = ('id', 'name', 'type', 'mentor', 'date', 'image')
    list_filter = ('type', 'date')
    search_fields = ('name', 'description')