from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password
from django.core.files import File
from datetime import datetime


# Create your models here.
class Posts(models.Model):
    title = models.CharField(max_length=100)
    tag = models.CharField(max_length=50)
    cbuid = models.CharField(max_length=50)
    body = models.CharField(max_length=1000000)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    image1 = models.TextField(blank=True, null=True)
    image2 = models.ImageField(upload_to='images/')

class Cosmobloguser(AbstractUser):
    expertise = models.CharField(max_length=100)
    cbuid = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    profile_image_base64 = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.username

    def save(self, *args,**kwargs):
        self.password = make_password(self.password)
        super(Cosmobloguser, self).save(*args, **kwargs)
