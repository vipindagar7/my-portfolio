from django.urls import path 
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('download/', views.download_resume, name='download_file'),
]
