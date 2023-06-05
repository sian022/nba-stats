from django.urls import path
from .views import get_player_career_stats

urlpatterns = [
    path('player-career-stats/', get_player_career_stats, name='player_career_stats'),
]
