from rest_framework import serializers

from activities.serializers import ActivitySerializer
from .models import Lead

class LeadSerializer(serializers.HyperlinkedModelSerializer):
	user  = serializers.StringRelatedField()
	activities = ActivitySerializer(read_only=True, many=True)
	class Meta:
		model = Lead
		fields = ['id','user', 'activities', 'lead_contact']

	