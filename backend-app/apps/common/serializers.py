from rest_framework import serializers

# Cache
from rest_framework_cache.serializers import CachedSerializerMixin
from rest_framework_cache.registry import cache_registry

# Models
from apps.common.models import Page, Lead

# Other
import re


# Site serializer
# -------------------------------------------------------------- >
class PagesSerializer(CachedSerializerMixin):

    data_ru = serializers.JSONField(source='data.ru', read_only=True)
    data_en = serializers.JSONField(source='data.en', read_only=True)

    class Meta:
        model = Page
        fields = ('id', 'data_ru', 'data_en')


cache_registry.register(PagesSerializer)


# System serializer
# -------------------------------------------------------------- >
class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = ('name', 'mail', 'text')

    def create(self, validated_data):
        data = {
            validated_data['name']: re.compile('[А-яA-z ]+'),
            validated_data['mail']: re.compile('([\w.%+-]+)@([\w-]+\.)+([\w]{2,})'),
            validated_data['text']: re.compile('[^><`]+'),
        }

        for key, val in data.items():
            if val.match(key):
                continue
            else:
                raise serializers.ValidationError({
                    'error': 'Validation error!'
                }); break

        return Lead.objects.create(**validated_data)

