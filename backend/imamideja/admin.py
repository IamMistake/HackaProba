from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import User, StartupIdea, Event

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(StartupIdea)
class StartupIdeaAdmin(admin.ModelAdmin):
    list_display = ('id', 'startupName', 'creator', 'firstMeet')
    list_filter = ('firstMeet',)
    search_fields = ('startupName', 'description')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'type', 'mentor', 'date')
    list_filter = ('type', 'date')
    search_fields = ('name', 'description')