from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def certifications(request):
    return render(request, 'main/certifications.html')

def dashboards(request):
    return render(request, 'main/dashboards.html')

def writing(request):
    return render(request, 'main/writing.html')

def coding(request):
    return render(request, 'main/coding.html')

def projects(request):
    return render(request, 'main/projects.html')
