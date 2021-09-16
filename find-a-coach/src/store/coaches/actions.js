import apiConfig from "../apiConfig";
const apiUrl = apiConfig.apiUrl;

export default {
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(`${apiUrl}/coaches.json`);

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
      };

      coaches.push(coach);
    }
    context.commit("setCoaches", coaches);
    context.commit("setFetchTimestamp");
  },
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description: payload.description,
      hourlyRate: payload.rate,
    };

    const response = await fetch(`${apiUrl}/coaches/${userId}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coachData),
    });

    // const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    context.commit("registerCoach", { ...coachData, id: userId });
  },
};
