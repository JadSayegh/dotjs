# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-10-13 02:35
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20161013_0117'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogpost',
            old_name='text',
            new_name='content',
        ),
    ]
