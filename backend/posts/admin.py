from django.contrib import admin
from django.contrib.auth.admin import UserAdmin 
from .forms import CosmobloguserCreationForm, CosmobloguserChangeForm 
from .models import Posts, Cosmobloguser

# Register your models here.
class CosmobloguserAdmin(UserAdmin):     
    add_form = CosmobloguserCreationForm     
    form = CosmobloguserChangeForm     
    model = Cosmobloguser     
    list_display = ["email", "username",] 

admin.site.register(Posts)
admin.site.register(Cosmobloguser, CosmobloguserAdmin)