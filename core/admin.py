from django.contrib.gis import admin
from leaflet.admin import LeafletGeoAdmin
from core.models import *


class DatosGeneralesAdmin(LeafletGeoAdmin):
    list_display = [x.name for x in DatosGenerales._meta.fields if x.name != 'coord']
    list_filter = ["punto_muestra", "anyo",]
    search_fields = ['codigo', 'punto_muestra',]
admin.site.register(DatosGenerales, DatosGeneralesAdmin)
