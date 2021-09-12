<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button @click="activate('poor')" type="button">
        Poor
      </button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button @click="activate('average')" type="button">
        Average
      </button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button @click="activate('great')" type="button">
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emit: ["update:modelValue"],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: aquamarine;
}

.active button {
  color: red;
}

ul {
  display: flex;
  margin: 0.5rem 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

button {
  font: inherit;
  border: 1px solid #ccc;
  background-color: transparent;
  cursor: pointer;
  padding: 0.6rem;
}
</style>
