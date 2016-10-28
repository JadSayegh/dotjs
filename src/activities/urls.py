from django.conf.urls import url, include


from .views import ActivityListView

urlpatterns = [
	url(r'^list', ActivityListView.as_view() , name="activity-list")
	]