from rest_framework import generics
from django.shortcuts import render, get_object_or_404
from .models import Company, Vacancy
from django.http import JsonResponse
from .serializers import CompanySerializer, VacancySerializer

def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

def company_detail(request, pk):
    company = get_object_or_404(Company, pk=pk)
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data)

class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyTopTen(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer
