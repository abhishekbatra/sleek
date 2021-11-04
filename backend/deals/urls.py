from django.urls import path

from . import views

urlpatterns = [
    path('<str:url>/', views.index, name='index'),
    path('<str:deal_id>/activate_deal', views.activate_deal, name="activate_deal")
]
