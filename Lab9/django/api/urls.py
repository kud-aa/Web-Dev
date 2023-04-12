from django.urls import path
from .views import CompanyList, CompanyDetail, VacancyList, VacancyDetail, VacancyTopTen

urlpatterns = [
    path('companies/', CompanyList.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:pk>/vacancies/', VacancyList.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', VacancyTopTen.as_view(), name='vacancy-top-ten'),
]
