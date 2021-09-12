<template>
  <learning-feedback @survey-submit="storeSurvey"></learning-feedback>
  <user-experience :results="savedSurveyResults"></user-experience>
</template>

<script>
import LearningFeedback from "./components/feedback/LearningFeedback.vue";
import UserExperience from "./components/feedback/UserExperience.vue";

export default {
  name: "App",
  components: {
    LearningFeedback,
    UserExperience,
  },
  data() {
    return {
      savedSurveyResults: [],
    };
  },
  methods: {
    storeSurvey(surveyData) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);
      console.log(surveyResult);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  background-color: #333;
  color: white;
}
</style>
