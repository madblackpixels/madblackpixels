from django.contrib.postgres.fields import JSONField
from django.db import models

from datetime import date


# -------------------------------------------------------------- >
# Site models
class Lang(models.Model):
    ru = JSONField()
    en = JSONField()


class Page(models.Model):
    name = models.CharField(max_length=100, blank=False)
    data = models.ForeignKey(Lang, on_delete=models.CASCADE)


# -------------------------------------------------------------- >
# System models
class Lead(models.Model):
    name = models.CharField(max_length=100, blank=False)
    mail = models.EmailField()
    text = models.TextField()

    system_date = models.DateField(default=date.today, blank=False)

    def __str__(self):
        return self.name


