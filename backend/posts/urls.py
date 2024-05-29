from django.urls import path
from . import views
from .views import PostsView, RegisterView, userPosts, searchPosts, searchPostsTag, SetUser, SetAuthor, MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # path('', views.index, name = 'index'),
    # path('post/<str:pk>', views.post, name = 'post'),
    path('', PostsView.as_view(), name='posts'),
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