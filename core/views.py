from django.views.generic import TemplateView
from .models import *
from .serializers import *
from django.shortcuts import render
import json
from django.http import HttpResponse
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import get_object_or_404, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated


class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return None


class CustomAuthToken(ObtainAuthToken):
    authentication_classes = (
        CsrfExemptSessionAuthentication, BasicAuthentication)


class HomePageView(TemplateView):
    template_name = 'core/index.html'

    def get(self, request, *args, **kwargs):
        data = [x for x in DatosGenerales.objects.all()]
        return render(request, self.template_name, {
            'data': data
        })


class DatosGeneralesList(ListCreateAPIView):
    queryset = DatosGenerales.objects.all()
    serializer_class = DatosGeneralesSerializer
    authentication_classes = (
        CsrfExemptSessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)


class DatosGeneralesDetail(RetrieveUpdateDestroyAPIView):
    queryset = DatosGenerales.objects.all()
    serializer_class = DatosGeneralesSerializer
    authentication_classes = (
        CsrfExemptSessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)


@csrf_exempt
def get_point(request):
    resp = DatosGenerales.objects.all()
    datos = {}
    geoest = serialize('geojson', resp)

    # datos = json.dumps(datos)

    return HttpResponse(geoest, content_type='json')
