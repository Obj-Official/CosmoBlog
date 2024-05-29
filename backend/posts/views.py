from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import auth
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer, PostsSerializer, CosmobloguserSerializer 
from .models import Posts, Cosmobloguser
# Create your views here.

class PostsView(APIView):
    def __init__(self):
        pass

    #get all posts from the data base and return it as response
    def get(self, request, *args, **kwargs):
        qs = Posts.objects.all()
        #Post1 = qs.first() #for one post
        postSerializer = PostsSerializer(qs, many=True)
        return Response(postSerializer.data)

    #Receive data from the Client when a blog post is made and save to database
    def post(self, request, *args, **kwargs):
        serializer = PostsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error)


class RegisterView(APIView):
    def __init__(self):
        pass

    def get(self, request, *args, **kwargs):
        qs = Cosmobloguser.objects.all()
        #Post1 = qs.first() #for one post
        userSerializer = CosmobloguserSerializer(qs, many=True)
        return Response(userSerializer.data)

    def post(self, request, *args, **kwargs):
        requestdata = request.data
        requestdata['cbuid'] = generateCBUID(requestdata['cbuid'])
        serializer = CosmobloguserSerializer(data=requestdata)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error)

class SetUser2(APIView):
    def __init__(self):
        pass

    def get(self, request, *args, **kwargs):
        query_item = request.GET.get('query','')
        userdata = Cosmobloguser.objects.filter(username__icontains=query_item)
        userSerializer = CosmobloguserSerializer(userdata, many=True)
        return Response(userSerializer.data)


class MyTokenObtainPairView(TokenObtainPairView, APIView):
    serializer_class = MyTokenObtainPairSerializer
    '''def perform_create(self, request, serializer_class, **kwargs):
        kwargs['user'] = self.request.user
        serializer_class.save(**kwargs)'''

def generateCBUID(handle):
    alluser = Cosmobloguser.objects.all()
    cbuid = ''
    index = 0
    for i in range(0,len(alluser)):
        index += 1 
    cbuid = 'cbu' + str(index+1).zfill(9)
    return cbuid

@api_view(['GET'])#get the user details from user name that as been authenticated
def SetUser(request):
    query_item = request.GET.get('query','')
    if str(query_item) != 'undefined':
        userdata = Cosmobloguser.objects.get(username=query_item)
        userSerializer = CosmobloguserSerializer(userdata)
        return Response(userSerializer.data)
    else:
        pass

@api_view(['GET'])#get all posts by the user's id
def userPosts(request):
    query_item = request.GET.get('query','')
    postsdata = Posts.objects.filter(cbuid=query_item)
    postsSerializer = PostsSerializer(postsdata, many=True)
    return Response(postsSerializer.data)

@api_view(['GET'])#get all posts where title contains the search parameter entered in frontend
def searchPosts(request):
    query_item = request.GET.get('query','')
    allpost = Posts.objects.all()
    query_set =[]
    for i in range(0, len(allpost)):
        if query_item.lower() in allpost[i].title.lower():
            query_set.append(allpost[i])
    postsSerializer = PostsSerializer(query_set, many=True)
    return Response(postsSerializer.data)

@api_view(['GET'])#get all posts with the tag selected
def searchPostsTag(request):
    query_item = request.GET.get('query','')
    postsdata = Posts.objects.filter(tag=query_item)
    postsSerializer = PostsSerializer(postsdata, many=True)
    return Response(postsSerializer.data)

@api_view(['GET'])#get the user details for a given post
def SetAuthor(request):
    query_item = request.GET.get('query','')
    if str(query_item) != 'undefined':
        userdata = Cosmobloguser.objects.get(cbuid=query_item)
        userSerializer = CosmobloguserSerializer(userdata)
        return Response(userSerializer.data)
    else:
        pass