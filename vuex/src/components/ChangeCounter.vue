<template>
  <!-- <base-button @click="addOne">
    Add
  </base-button> -->
  <base-button @click="inc">
    Increment - Async
  </base-button>
  <base-button @click="incr({ value: 3 })">
    Increase 3
  </base-button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // addOne() {
    //   // this.$store.commit("increase", { value: 3 });
    //   // this.$store.commit({ type: "increase", value: 3 });
    //   this.$store.dispatch("increment");
    // },
    // ...mapActions(["increment", "increase"]),
    ...mapActions({
      inc: "increment",
      incr: "increase",
    }),
  },
};
</script>
