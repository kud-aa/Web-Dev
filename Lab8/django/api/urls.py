from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products, name='products'),
    path('products/<int:pk>/', views.product, name='product'),
    path('categories/', views.categories, name='categories'),
    path('categories/<int:pk>/', views.category, name='category'),
    path('categories/<int:pk>/products/', views.products_by_category, name='products_by_category'),
]
