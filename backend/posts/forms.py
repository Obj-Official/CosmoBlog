from django.contrib.auth.forms import UserCreationForm, UserChangeForm 
from .models import Cosmobloguser 

class CosmobloguserCreationForm(UserCreationForm): 
 
    class Meta:         
        model = Cosmobloguser         
        fields = ("username", "email") 
 
class CosmobloguserChangeForm(UserChangeForm): 
 
    class Meta:         
        model = Cosmobloguser         
        fields = ("username", "email")

