from django.shortcuts import render

# Create your views here.
def index(request):
    post = Posts.objects.all
    return render (request, 'index.html', {'post': post})
    
'''def post(request,pk):
    post = Posts.objects.get(id=pk)
    return render (request, 'posts.html', {'post': post})'''
