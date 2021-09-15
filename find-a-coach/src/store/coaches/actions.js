export default {
  registerCoach(context, payload) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description: payload.description,
      hourlyRate: payload.rate,
    };

    context.commit('registerCoach', coachData);
  },
};
