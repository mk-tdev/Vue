<template>
  <section>
    <h2>Requests</h2>
    <hr />
  </section>

  <section>
    <ul v-if="hasRequests">
      <li v-for="request in receievedRequests" :key="request.id">
        <request-item
          :email="request.userEmail"
          :message="request.message"
        ></request-item>
      </li>
    </ul>

    <h3 v-else>No requests!</h3>
  </section>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";

export default {
  components: { RequestItem },
  computed: {
    receievedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
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
</style>
