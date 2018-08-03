from rest_framework_cache.registry import cache_registry
from django.conf.urls import url, include
from django.contrib import admin

# dor static / media
from django.conf import settings
from django.conf.urls.static import static

cache_registry.autodiscover()

if settings.DEBUG:
    urlpatterns = [
        url(r'^api/', include('apps.common.urls')),
        url(r'^admin/', admin.site.urls),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

else:
    urlpatterns = [
        url(r'^api/', include('apps.common.urls')),
        url(r'^admin/', admin.site.urls),
    ]