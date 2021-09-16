<template>
  <div>
    <base-dialog
      :show="!!isError"
      title="An error occured!"
      @close="handleError"
    >
      {{ isError }}
    </base-dialog>
    <section>
      <h2>Requests</h2>

      <base-button :mode="'dark'" @click="loadRequests"
        >Click to Refresh</base-button
      >
      <hr />
    </section>

    <section>
      <div class="loader" v-if="isLoading">
        <base-spinner></base-spinner>
      </div>

      <ul v-else-if="hasRequests">
        <li v-for="request in receievedRequests" :key="request.id">
          <request-item
            :email="request.userEmail"
            :message="request.message"
          ></request-item>
        </li>
      </ul>

      <h3 v-else>No requests!</h3>
    </section>
  </div>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";

export default {
  components: { RequestItem },
  data() {
    return {
      isError: null,
      isLoading: false,
    };
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("requests/loadRequests");
      } catch (error) {
        this.isError = error.message || "Something went wrong!";
      }

      this.isLoading = false;
    },
    handleError() {
      this.isError = false;
    },
  },
  computed: {
    receievedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return !this.isLoading && this.$store.getters["requests/hasRequests"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
}
.loader {
  display: flex;
  justify-content: center;
}
</style>
