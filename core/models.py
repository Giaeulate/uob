from __future__ import unicode_literals
from django.contrib.gis.db.models import *
from django.db.models.signals import pre_save


class DatosGenerales(Model):
    codigo = CharField(max_length=150, primary_key=True)
    pais = CharField(max_length=150)
    monitoreo = CharField(max_length=150)
    epoca = CharField(max_length=150)
    anyo = CharField(max_length=150, verbose_name="Año")
    fecha_muestra = DateField(blank=True, null=True)
    hora_muestra = CharField(max_length=150)
    punto_muestra = CharField(max_length=150)
    tipo = CharField(max_length=150)
    departamento = CharField(max_length=150)
    latitud = FloatField(max_length=150)
    longitud = FloatField(max_length=150)
    zona = CharField(max_length=150)
    parametro_basico_CE = FloatField(default=0)
    parametro_basico_Ods = FloatField(default=0)
    parametro_basico_PH = FloatField(default=0)
    parametro_basico_SDT = FloatField(default=0)
    parametro_basico_SSed = FloatField(default=0)
    parametro_basico_SST = FloatField(default=0)
    parametro_basico_T = FloatField(default=0)
    parametro_basico_Turb = FloatField(default=0)
    parametro_basico_OD = FloatField(default=0)
    parametro_basico_TDS = FloatField(default=0)
    inorganico_metalico_metaloide_AL = FloatField(default=0)
    inorganico_metalico_metaloide_AS = FloatField(default=0)
    inorganico_metalico_metaloide_B = FloatField(default=0)
    inorganico_metalico_metaloide_CA = FloatField(default=0)
    inorganico_metalico_metaloide_CD = FloatField(default=0)
    inorganico_metalico_metaloide_CU = FloatField(default=0)
    inorganico_metalico_metaloide_CRLL = FloatField(default=0)
    inorganico_metalico_metaloide_FE = FloatField(default=0)
    inorganico_metalico_metaloide_MN = FloatField(default=0)
    inorganico_metalico_metaloide_HG = FloatField(default=0)
    inorganico_metalico_metaloide_NI = FloatField(default=0)
    inorganico_metalico_metaloide_PB = FloatField(default=0)
    inorganico_metalico_metaloide_SE = FloatField(default=0)
    inorganico_metalico_metaloide_NA = FloatField(default=0)
    inorganico_metalico_metaloide_ZN = FloatField(default=0)
    inorganico_no_metalico_NH3 = FloatField(default=0)
    inorganico_no_metalico_CL = FloatField(default=0)
    inorganico_no_metalico_P = FloatField(default=0)
    inorganico_no_metalico_PO43 = FloatField(default=0)
    inorganico_no_metalico_N = FloatField(default=0)
    inorganico_no_metalico_SO42 = FloatField(default=0)
    inorganico_no_metalico_S2 = FloatField(default=0)
    organico_agregado_AYG = FloatField(default=0)
    organico_agregado_COT = FloatField(default=0)
    organico_agregado_C = FloatField(default=0)
    organico_agregado_DBOS = FloatField(default=0)
    organico_agregado_DQO = FloatField(default=0)
    organico_agregado_SAAM = FloatField(default=0)
    microbiologico_colifecal = FloatField(default=0)
    microbiologico_parasito = FloatField(default=0)
    coord = PointField(blank=True, null=True)

    class Meta:
        ordering = ('codigo',)
        verbose_name = 'Datos Generales'
        verbose_name_plural = 'Datos Generales'

    def __str__(self):
        return self.codigo