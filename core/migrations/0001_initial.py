# Generated by Django 3.0.4 on 2020-11-23 17:25

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DatosGenerales',
            fields=[
                ('codigo', models.CharField(max_length=150, primary_key=True, serialize=False)),
                ('pais', models.CharField(max_length=150)),
                ('monitoreo', models.CharField(max_length=150)),
                ('epoca', models.CharField(max_length=150)),
                ('anyo', models.CharField(max_length=150, verbose_name='Año')),
                ('fecha_muestra', models.DateField(blank=True, null=True)),
                ('hora_muestra', models.CharField(max_length=150)),
                ('punto_muestra', models.CharField(max_length=150)),
                ('tipo', models.CharField(max_length=150)),
                ('departamento', models.CharField(max_length=150)),
                ('latitud', models.FloatField(max_length=150)),
                ('longitud', models.FloatField(max_length=150)),
                ('zona', models.CharField(max_length=150)),
                ('parametro_basico_CE', models.FloatField(default=0)),
                ('parametro_basico_Ods', models.FloatField(default=0)),
                ('parametro_basico_PH', models.FloatField(default=0)),
                ('parametro_basico_SDT', models.FloatField(default=0)),
                ('parametro_basico_SSed', models.FloatField(default=0)),
                ('parametro_basico_SST', models.FloatField(default=0)),
                ('parametro_basico_T', models.FloatField(default=0)),
                ('parametro_basico_Turb', models.FloatField(default=0)),
                ('parametro_basico_OD', models.FloatField(default=0)),
                ('parametro_basico_TDS', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_AL', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_AS', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_B', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_CA', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_CD', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_CU', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_CRLL', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_FE', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_MN', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_HG', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_NI', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_PB', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_SE', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_NA', models.FloatField(default=0)),
                ('inorganico_metalico_metaloide_ZN', models.FloatField(default=0)),
                ('inorganico_no_metalico_NH3', models.FloatField(default=0)),
                ('inorganico_no_metalico_CL', models.FloatField(default=0)),
                ('inorganico_no_metalico_P', models.FloatField(default=0)),
                ('inorganico_no_metalico_PO43', models.FloatField(default=0)),
                ('inorganico_no_metalico_N', models.FloatField(default=0)),
                ('inorganico_no_metalico_SO42', models.FloatField(default=0)),
                ('inorganico_no_metalico_S2', models.FloatField(default=0)),
                ('organico_agregado_AYG', models.FloatField(default=0)),
                ('organico_agregado_COT', models.FloatField(default=0)),
                ('organico_agregado_C', models.FloatField(default=0)),
                ('organico_agregado_DBOS', models.FloatField(default=0)),
                ('organico_agregado_DQO', models.FloatField(default=0)),
                ('organico_agregado_SAAM', models.FloatField(default=0)),
                ('microbiologico_colifecal', models.FloatField(default=0)),
                ('microbiologico_parasito', models.FloatField(default=0)),
                ('coord', django.contrib.gis.db.models.fields.PointField(blank=True, null=True, srid=4326)),
            ],
            options={
                'verbose_name': 'Datos Generales',
                'verbose_name_plural': 'Datos Generales',
                'ordering': ('codigo',),
            },
        ),
    ]
