from django.contrib.gis import admin
from leaflet.admin import LeafletGeoAdmin
from core.models import *


class DatosGeneralesAdmin(LeafletGeoAdmin):
    list_display = [x.name for x in DatosGenerales._meta.fields if x.name != 'coord']
admin.site.register(DatosGenerales, DatosGeneralesAdmin)