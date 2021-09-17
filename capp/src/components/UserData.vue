<template>
  <div>
    <h2>Fullname: {{ displayName }}</h2>

    <h3>First name: {{ fName }}</h3>

    <button @click="customEvent">Confirm</button>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  props: ["fullName"],
  emits: ["confirm"],
  setup(props, context) {
    const displayName = computed(() => {
      return "Good Morning " + props.fullName + "!";
    });

    // Life cycle
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    function customEvent() {
      context.emit("confirm");
    }

    const fName = inject("firstName");

    return {
      fName,
      displayName,
      customEvent,
    };
  },
  // computed: {
  //   displayName() {
  //     return "Good Morning " + this.fullName + '!';
  //   },
  // },
};
</script>
