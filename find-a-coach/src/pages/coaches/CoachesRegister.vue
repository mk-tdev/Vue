<template>
  <section>
    <base-container>
      <h2>Register as a Coach!</h2>

      <CoachForm @save-data="saveData" />
    </base-container>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
  components: { CoachForm },
  computed: {},
  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);

      this.$router.replace("/coaches");
    },
  },
};
</script>
