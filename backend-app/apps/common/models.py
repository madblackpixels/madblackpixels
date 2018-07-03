from django.contrib.postgres.fields import JSONField
from django.db import models


class Langs(models.Model):
    ru = JSONField()
    en = JSONField()


class Pages(models.Model):
    name = models.CharField(max_length=100, blank=False)
    data = models.ForeignKey(Langs, on_delete=models.CASCADE)


class Lead(models.Model):
    name = models.CharField(max_length=100, blank=False)
    mail = models.CharField(max_length=140, blank=False)
    text = models.TextField()

