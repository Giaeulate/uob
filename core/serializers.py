from rest_framework.serializers import ModelSerializer
from .models import *



class DatosGeneralesSerializer(ModelSerializer):
    class Meta:
        model = DatosGenerales
        fields = '__all__'