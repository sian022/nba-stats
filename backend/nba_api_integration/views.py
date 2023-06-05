from django.shortcuts import render

from django.http import JsonResponse
from nba_api.stats.endpoints import PlayerCareerStats
from nba_api.stats.static import players

def get_player_career_stats(request):
    player_data = players.find_players_by_full_name("Nikola Jokic")
    career = PlayerCareerStats(player_id=player_data[0]['id'])
    career_stats = career.get_data_frames()[0].to_dict('records')
    return JsonResponse(career_stats, safe=False)