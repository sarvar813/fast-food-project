from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('send-verification', views.send_verification, name='send_verification'),
    path('send-message', views.send_message, name='send_message'),
    path('customers', views.get_customers, name='get_customers'),
    path('broadcast', views.broadcast, name='broadcast'),
    path('check-phone/<str:phone>', views.check_phone, name='check_phone'),
    path('subscriptions', views.subscriptions, name='subscriptions'),
    path('subscriptions/', views.subscriptions, name='subscriptions_list'),
    path('subscriptions/action', views.sub_action, name='sub_action'),
    path('subscriptions/action/', views.sub_action, name='sub_action_slash'),
    path('reviews', views.reviews, name='reviews'),
    path('reviews/', views.reviews, name='reviews_list'),
    path('reservations', views.reservations, name='reservations'),
    path('reservations/', views.reservations, name='reservations_list'),
    path('reservations/action', views.res_action, name='res_action'),
    path('reservations/action/', views.res_action, name='res_action_slash'),
    path('careers', views.careers, name='careers'),
    path('careers/', views.careers, name='careers_list'),
    path('careers/action', views.career_action, name='career_action'),
    path('careers/action/', views.career_action, name='career_action_slash'),
]
