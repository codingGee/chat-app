from django.urls import path 
from . import views
app_name = 'chat'

urlpatterns = [
    path('join', views.init, name='join')
]
