import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:6969/'
});

const team = {
    getAll: async() => {
        const response = await api.get('teams')
        return response.data;
    },
    getById: async(teamId) => {
        const response = await api.get(`teams/${teamId}`)
        return response.data
    },
}

const activity = {
    update: async(teamId, activityId, updatedActivity) => {
        const response = await api.put(`teams/${teamId}/activities/${activityId}`, updatedActivity)
        return response.data
    }
}

const agent = {
    team,
    activity
}

export default agent;