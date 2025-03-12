from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('certifications/', views.certifications, name='certifications'),
    path('dashboards/', views.dashboards, name='dashboards'),
    path('writing/', views.writing, name='writing'),
    path('coding/', views.coding, name='coding'),
    path('projects/', views.projects, name='projects'),
]
