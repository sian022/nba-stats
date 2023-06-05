from django.shortcuts import render

from django.http import JsonResponse
from django.utils.text import slugify
from nba_api.stats.endpoints import PlayerCareerStats
from nba_api.stats.static import players


def get_player_career_stats(request, name):
    #slug_name = slugify(name)
    player_data = players.find_players_by_full_name(name)
    if player_data:
        career = PlayerCareerStats(player_id=player_data[0]['id'])
        career_stats = career.get_data_frames()[0].to_dict('records')
        return JsonResponse(career_stats, safe=False)
    else:
        return JsonResponse({'Error': 'Player not found'}, status=404)
    
def get_all_players_career_stats():
    players_data = players.get_active_players()
    players_stats = []
    for i in range(len(players_data)):
        career = PlayerCareerStats(players_data[i]['id'])
        career_stats = career.get_data_frames()[0].to_dict('records')
        print(career_stats)
    return 