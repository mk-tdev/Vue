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
  methods: {
    saveData(data) {
      console.log(data);
    },
  },
};
</script>
