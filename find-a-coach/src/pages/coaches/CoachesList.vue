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
      <coach-filter @changeFilter="setFilter"></coach-filter>
    </section>

    <section>
      <div class="controls">
        <base-button :mode="'dark'" @click="loadCoaches(true)"
          >Click to Refresh</base-button
        >
        <base-link
          to="/register"
          label="Register as Coach"
          mode="dark"
          v-if="!isCoach && !isLoading"
        />
      </div>

      <div class="loader" v-if="isLoading">
        <base-spinner></base-spinner>
      </div>

      <div v-else-if="hasCoaches">
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
  </div>
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
      isLoading: false,
      isError: null,
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
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilter(filters) {
      this.activeFilters = filters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh,
        });
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
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
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
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
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
.loader {
  display: flex;
  justify-content: center;
}
</style>
