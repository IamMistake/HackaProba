# Generated by Django 5.1.6 on 2025-02-23 08:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('type', models.CharField(choices=[('weekly', 'Weekly'), ('regular', 'Regular')], max_length=10)),
                ('mentor', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField()),
                ('date', models.DateField()),
                ('image', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('skills', models.JSONField(blank=True, default=list)),
            ],
        ),
        migrations.CreateModel(
            name='StartupIdea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('startupName', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('firstMeet', models.DateField()),
                ('image', models.URLField(blank=True, null=True)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_startup_ideas', to='imamideja.user')),
                ('participants', models.ManyToManyField(related_name='startup_ideas', to='imamideja.user')),
            ],
        ),
    ]
