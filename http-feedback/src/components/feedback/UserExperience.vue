<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >

        <p v-if="isLoading">Loading...</p>
      </div>

      <p v-if="!isLoading && results && results.length === 0">No data!</p>

      <ul v-else>
        <feedback-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></feedback-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import FeedbackResult from "./FeedbackResult.vue";

export default {
  // props: ["results"],
  mounted() {
    this.loadExperiences();
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch("https://xxxx.firebaseio.com/feedback.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          const res = [];
          for (const id in data) {
            res.push({ id: id, name: data[id].name, rating: data[id].rating });
          }

          this.results = res;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error: ", error);
          this.isLoading = false;
        });
    },
  },
  components: {
    FeedbackResult,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
