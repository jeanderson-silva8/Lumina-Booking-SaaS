"""
URL configuration for core project.
═══════════════════════════════════════════════════════
🛡️ PROTOCOLO DE SEGURANÇA ENTERPRISE — ROTAS
═══════════════════════════════════════════════════════
"""
import os
from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

# [SEGURANÇA] GraphiQL (interface interativa) desabilitado em produção
# Em produção, a API aceita apenas queries programáticas
is_debug = os.environ.get('DEBUG', '0') == '1'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=is_debug))),
]
