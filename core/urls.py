from core.views import *
from django.urls import path

app_name = 'core'

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('get_point/', get_point, name='points'),
    path('get_data/', DatosGeneralesList.as_view(), name='get_data_list_page'),
    path('get_data/<slug:pk>/', DatosGeneralesDetail.as_view(), name='get_data_detail_page'),
]
