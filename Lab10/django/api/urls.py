from django.urls import path
from .views import company_list, company_detail, VacancyList, VacancyDetail, VacancyTopTen

urlpatterns = [
    path('companies/', company_list, name='company-list'),
    path('companies/<int:pk>/', company_detail, name='company-detail'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', VacancyTopTen.as_view(), name='vacancy-top-ten'),
]
