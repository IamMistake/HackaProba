# Generated by Django 5.1.6 on 2025-02-22 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('imamideja', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='startupidea',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
    ]
