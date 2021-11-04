from django.db import models

# Create your models here.

class DealActivation(models.Model):
    deal_id: models.CharField(36)
    date_activated: models.DateTimeField(auto_now_add=True)
    user_id: models.CharField(36, blank=True)