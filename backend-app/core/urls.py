from rest_framework_cache.registry import cache_registry
from django.conf.urls import url, include
from django.contrib import admin

cache_registry.autodiscover()

urlpatterns = [
    url(r'^api/', include('apps.common.urls')),
    url(r'^admin/', admin.site.urls),
]
