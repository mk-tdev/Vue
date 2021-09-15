<template>
  <section>
    Detail of Coaches

    <router-link to="/coaches/c1/contact">Contact</router-link>

    <router-view></router-view>
  </section>

  <section>
    <base-container>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
      <base-badge
        v-for="(area, index) in areas"
        :key="index"
        :label="area"
        :type="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-container>
  </section>

  <section>
    <base-container>
      <h2>Interested? Reach out now!</h2>
      <base-link :to="coachContactLink" label="Contact" mode="dark" />

      <router-view></router-view>
    </base-container>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (c) => c.id === this.id
    );
  },
};
</script>

<style scoped></style>
