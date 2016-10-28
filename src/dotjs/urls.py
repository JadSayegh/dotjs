"""DotJS URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static

from django.contrib import admin
from django.views.generic.base import TemplateView

from rest_framework import routers
import activities.views
import blog.views
import leads.views

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'blog-posts-list', blog.views.BlogPostViewSet)
router.register(r'activity-list', activities.views.ArticleViewSet)
router.register(r'lead-list/(?P<activity>\w+)', leads.views.LeadViewSet, base_name="Lead List")

urlpatterns = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [

    url(r'^admin/?', admin.site.urls),

	# url(r'^accounts/', include('allauth.urls')),

    url(r'^api/?', include(router.urls, namespace='api')),
    # url(r'^', include(router.urls)),



    # Base/default URL, when all else fails
   url(r'^.*$', TemplateView.as_view(template_name='index.html'))
]

# urlpatterns += router.urls

