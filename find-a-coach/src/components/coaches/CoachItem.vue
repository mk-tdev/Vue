<template>
  <base-container mode="left">
    <div class="coach-item">
      <h2>{{ fullName }}</h2>

      <div>${{ rate }}/hour</div>

      <div class="areas">
        <base-badge
          v-for="(area, index) in areas"
          :key="index"
          :label="area"
          :type="area"
        ></base-badge>
      </div>

      <div class="actions">
        <base-link :to="coachContactLink" label="Contact" mode="dark" />
        <base-link :to="coachDetailsLink" label="View Details" mode="dark" />
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    coachDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>

<style scoped>
.coach-item {
  display: flex;
  flex-direction: column;
}
.areas {
  display: flex;
  justify-content: flex-start;
  height: 100%;
}
.area {
  margin-right: 0.3rem;
}

.actions {
  margin: 0.5rem 0;
}
</style>
