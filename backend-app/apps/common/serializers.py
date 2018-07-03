from rest_framework import serializers

#cache
from rest_framework_cache.serializers import CachedSerializerMixin
from rest_framework_cache.registry import cache_registry

#models
from apps.common.models import Pages


class PagesSerializer(CachedSerializerMixin):

    data_ru = serializers.JSONField(source='data.ru', read_only=True)
    data_en = serializers.JSONField(source='data.en', read_only=True)

    class Meta:
        model = Pages
        fields = ('id', 'data_ru', 'data_en')


cache_registry.register(PagesSerializer)
