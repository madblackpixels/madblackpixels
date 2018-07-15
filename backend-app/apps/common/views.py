from apps.common.models      import Page, Lead
from apps.common.serializers import PagesSerializer, LeadSerializer

# Permissions
from rest_framework.permissions import AllowAny

from rest_framework.generics import (
    CreateAPIView,
    ListAPIView
)


# Site views
# -------------------------------------------------------------- >
class IntroPage(ListAPIView):
    serializer_class = PagesSerializer
    queryset = Page.objects.filter(name='IntroPage')


# System views
# -------------------------------------------------------------- >
class LeadCreate(CreateAPIView):
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()

    permission_classes = (AllowAny, )


