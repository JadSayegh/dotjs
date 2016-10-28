from django.db import models
# Create your models here.


class Activity(models.Model):
	# add a picture
	name = models.CharField(max_length=30)
	image = models.ImageField(blank=True, null=True, upload_to="activities")

	def __str__(self):
		return self.name

