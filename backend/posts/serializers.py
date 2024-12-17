from rest_framework import serializers
from .models import Posts, Cosmobloguser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model =   Posts
        fields = (
            'title', 'tag', 'cbuid', 'body', 'created_at', "image1"
        )

class CosmobloguserSerializer(serializers.ModelSerializer):       
    class Meta:
        model =   Cosmobloguser
        fields = (
            'first_name', 'last_name' , 'username' , 'email', 'expertise', 'cbuid', 'password', 'description','profile_image_base64'
        )


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token