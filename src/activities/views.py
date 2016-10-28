from django.shortcuts import render
from django.views.generic.list import ListView

from rest_framework import viewsets

from .models import Activity
from .serializers import ActivitySerializer


class ArticleViewSet(viewsets.ModelViewSet):
	queryset = Activity.objects.all()
	serializer_class = ActivitySerializer

# class ActivityListView(ListView):

# 	paginate_by = 15
# 	model = Activity
# 	template_name = "activity/activity_list.html" 

# 	def get_context_data(self, **kwargs):
# 		context = super().get_context_data(**kwargs)
# 		# todo: check not too many
# 		return context


