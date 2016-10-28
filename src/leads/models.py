from django.db import models
from django.conf import settings

# Create your models here.
from activities.models import Activity



class Lead(models.Model):
	user = models.OneToOneField(settings.AUTH_USER_MODEL, unique=True)
	lead_contact = models.CharField(max_length=30)
	activities = models.ManyToManyField(Activity)

	def __str__(self):
		return str(self.user.username)