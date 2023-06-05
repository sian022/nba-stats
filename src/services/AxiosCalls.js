import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:8000'

export const getPlayerStatsByName = (playerName) => {
    return (
        axios.get(`/nba/api/player-career-stats/${playerName}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error.message)
        })
    )
} 

export const getPlayerStatsByNameLatestSeason = (playerName) => {
    return (
        axios.get(`/nba/api/player-career-stats/${playerName}`)
        .then(response => {
            return response.data[response.data.length-1]
        })
        .catch(error => {
            console.log(error.message)
        })
    )
} 