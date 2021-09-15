<template>
  <section>
    <coach-filter @changeFilter="setFilter"></coach-filter>
  </section>

  <section>
    <div class="controls">
      <base-button :mode="'dark'">Refresh</base-button>
      <base-link to="/register" label="Register as Coach" mode="dark" />
    </div>

    <div v-if="hasCoaches">
      <CoachItem
        v-for="(coach, index) in filteredCoaches"
        :key="index"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      />
    </div>
    <h3 v-else>No Coaches found.</h3>
  </section>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        swimming: true,
        running: true,
        football: true,
        dance: true,
        acting: true,
        wrestling: true,
      },
    };
  },
  methods: {
    setFilter(filters) {
      this.activeFilters = filters;
    },
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];

      return coaches.filter((coach) => {
        if (this.activeFilters.swimming && coach.areas.includes("swimming")) {
          return true;
        }
        if (this.activeFilters.running && coach.areas.includes("running")) {
          return true;
        }
        if (this.activeFilters.football && coach.areas.includes("football")) {
          return true;
        }
        if (this.activeFilters.dance && coach.areas.includes("dance")) {
          return true;
        }
        if (this.activeFilters.acting && coach.areas.includes("acting")) {
          return true;
        }
        if (this.activeFilters.wrestling && coach.areas.includes("wrestling")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  margin: 1rem 2rem;
  padding: 0;
}
</style>
