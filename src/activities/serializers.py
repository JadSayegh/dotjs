from rest_framework import serializers

from .models import Activity

class ActivitySerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Activity
		fields = ['id','name', 'image']
		readonly_fields = ('image')

	