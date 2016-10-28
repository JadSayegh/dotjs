from rest_framework import serializers

from .models import BlogPost

class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = BlogPost
		fields = ['title', 'content']

	