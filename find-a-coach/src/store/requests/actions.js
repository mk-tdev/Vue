import apiConfig from "../apiConfig";
const apiUrl = apiConfig.apiUrl;

export default {
  async loadRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`${apiUrl}/requests/${coachId}.json`);

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch requests!"
      );
      throw error;
    }

    const requestsData = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };

      requestsData.push(request);
    }
    context.commit("setRequests", requestsData);
  },
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(`${apiUrl}/requests/${payload.coachId}.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRequest),
    });

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request!"
      );
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit("addRequest", newRequest);
  },
};
