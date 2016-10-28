from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets
import traceback

from .models import Lead
from .serializers import LeadSerializer

from rest_framework.decorators import api_view, permission_classes



class LeadViewSet(viewsets.ModelViewSet):

	serializer_class = LeadSerializer
	# queryset = Lead.objects.all()

	def get_queryset(self):
		try:
			activity = self.kwargs['activity']
			print("Getting leads for %s"%activity)
			return Lead.objects.filter(activities__name__icontains=activity)
		except:
			# todo: send out a 404
			traceback.print_exc()
			print("No Leads found for this activity :(")
			return None