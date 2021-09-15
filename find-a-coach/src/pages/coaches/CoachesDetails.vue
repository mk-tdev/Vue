<template>
  <section>
    <router-link :to="'/coaches'">Back</router-link>
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
      <base-link
        :to="coachContactLink"
        label="Contact"
        mode="dark"
        v-if="!$route.path.includes('contact')"
      />

      <div class="contact">
        <router-view></router-view>
      </div>
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
      return `${this.$route.path}/contact`;
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

<style scoped>
.contact {
  padding: 1rem 0;
}
</style>
