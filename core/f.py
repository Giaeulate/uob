import os
from django.contrib.gis.utils import LayerMapping
from .models import *
from django.contrib.gis.gdal import OGRGeomType
from django.contrib.gis.gdal.srs import SpatialReference
import pandas as pd
from django.contrib.gis.geos import GEOSGeometry, Point


df = pd.read_excel(r'./datos.xlsx', sheet_name=0)
n = len(df)
c = df.columns.values
for i in range(n):
    obj = DatosGenerales(
        codigo = df[c[0]][i],
        pais = df[c[1]][i],
        monitoreo = df[c[2]][i],
        epoca = df[c[3]][i],
        anyo = df[c[4]][i],
        fecha_muestra = df[c[5]][i],
        hora_muestra = df[c[6]][i],
        punto_muestra = df[c[7]][i],
        tipo = df[c[8]][i],
        departamento = df[c[9]][i],
        latitud = df[c[10]][i],
        longitud = df[c[11]][i],
        zona = df[c[12]][i],
        parametro_basico_CE = df[c[13]][i],
        parametro_basico_Ods = df[c[14]][i],
        parametro_basico_PH = df[c[15]][i],
        parametro_basico_SDT = df[c[16]][i],
        parametro_basico_SSed = df[c[17]][i],
        parametro_basico_SST = df[c[18]][i],
        parametro_basico_T = df[c[19]][i],
        parametro_basico_Turb = df[c[20]][i],
        parametro_basico_OD = df[c[21]][i],
        parametro_basico_TDS = df[c[22]][i],
        inorganico_metalico_metaloide_AL = df[c[23]][i],
        inorganico_metalico_metaloide_AS = df[c[24]][i],
        inorganico_metalico_metaloide_B = df[c[25]][i],
        inorganico_metalico_metaloide_CA = df[c[26]][i],
        inorganico_metalico_metaloide_CD = df[c[27]][i],
        inorganico_metalico_metaloide_CU = df[c[28]][i],
        inorganico_metalico_metaloide_CRLL = df[c[29]][i],
        inorganico_metalico_metaloide_FE = df[c[30]][i],
        inorganico_metalico_metaloide_MN = float(df[c[31]][i]),
        inorganico_metalico_metaloide_HG = df[c[32]][i],
        inorganico_metalico_metaloide_NI = df[c[33]][i],
        inorganico_metalico_metaloide_PB = df[c[34]][i],
        inorganico_metalico_metaloide_SE = df[c[35]][i],
        inorganico_metalico_metaloide_NA = df[c[36]][i],
        inorganico_metalico_metaloide_ZN = df[c[37]][i],
        inorganico_no_metalico_NH3 = df[c[38]][i],
        inorganico_no_metalico_CL = df[c[39]][i],
        inorganico_no_metalico_P = df[c[40]][i],
        inorganico_no_metalico_PO43 = df[c[41]][i],
        inorganico_no_metalico_N = df[c[42]][i],
        inorganico_no_metalico_SO42 = df[c[43]][i],
        inorganico_no_metalico_S2 = df[c[44]][i],
        organico_agregado_AYG = df[c[45]][i],
        organico_agregado_COT = df[c[46]][i],
        organico_agregado_C = df[c[47]][i],
        organico_agregado_DBOS = df[c[48]][i],
        organico_agregado_DQO = df[c[49]][i],
        organico_agregado_SAAM = df[c[50]][i],
        microbiologico_colifecal = df[c[51]][i],
        microbiologico_parasito = df[c[52]][i],
        coord = Point(df[c[11]][i], df[c[10]][i], srid=4326)
    )
    obj.save()
print("success")