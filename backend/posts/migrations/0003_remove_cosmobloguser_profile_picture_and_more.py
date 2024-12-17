# Generated by Django 5.0.6 on 2024-12-15 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_cosmobloguser_profile_picture_posts_image1_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cosmobloguser',
            name='profile_picture',
        ),
        migrations.AddField(
            model_name='cosmobloguser',
            name='profile_image_base64',
            field=models.TextField(blank=True, null=True),
        ),
    ]