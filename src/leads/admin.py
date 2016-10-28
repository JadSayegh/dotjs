from django.contrib import admin

from .models import Lead


class LeadAdmin(admin.ModelAdmin):
	list_display = ['__str__']

	class Meta:
		model = Lead

# Register your models here.		
admin.site.register(Lead)


