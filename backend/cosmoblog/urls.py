"""
URL configuration for cosmoblog project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import PostsView, RegisterView, userPosts, searchPosts, searchPostsTag, SetUser, SetAuthor, MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', include('posts.urls')),
    path('', PostsView.as_view(), name='posts'),
    path('api-auth', include('rest_framework.urls')),
    path('posts', PostsView.as_view(), name='posts'),
    path('register', RegisterView.as_view(), name='register'),
    path('userposts/', userPosts, name='user-posts'),
    path('searchposts/', searchPosts, name='search-posts'),
    path('searchpoststag/', searchPostsTag, name='search-posts-tag'),
    path('setuser/', SetUser, name='set-user'),
    path('setauthor/', SetAuthor, name='set-author'),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]
