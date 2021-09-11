<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="nameEntered" />
    </div>
    <div>
      <label for="">Year</label>
      <input type="number" v-model="yearEntered" />
    </div>
    <div>
      <label for="">Director</label>
      <input type="text" v-model="directorEntered" />
    </div>

    <button>Add Movie</button>
  </form>
</template>

<script>
export default {
  name: "NewMovie",
  emits: ["add-movie"],
  data() {
    return {
      nameEntered: "",
      yearEntered: "",
      directorEntered: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-movie",
        this.nameEntered,
        this.yearEntered,
        this.directorEntered
      );
    },
  },
};
</script>

<style>
form {
  border: 1px solid gray;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  width: 50%;
}

form div {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
  margin: 1rem 0;
}

form button {
  margin: 1rem 0;
}
</style>
