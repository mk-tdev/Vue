<template>
  <div style="display: flex; align-items: center" class="head">
    <img alt="Vue logo" height="50" src="../assets/logo.png" />
    <h1>Composition API - Refs</h1>
  </div>

  <section>
    <div>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        id="firstName"
        v-model="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        id="lastName"
        ref="lastNameInput"
      />

      <button @click="setLastName">Set Last Name</button>
    </div>

    <user-data
      @confirm="customEvent"
      :fullName="fullName"
      :class="'test'"
    ></user-data>
  </section>
</template>

<script>
import { ref, computed, provide } from "vue";
import UserData from "./UserData.vue";

export default {
  name: "App",
  components: {
    UserData,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);

    const fullName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    // watch([fullName], (newVs, oldVs) => {
    //   console.log(newVs, oldVs);
    // });

    function setNewData() {}

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    function customEvent() {
      lastName.value = "";
      lastNameInput.value.value = "";
    }

    provide("firstName", firstName);

    return {
      firstName,
      lastName,
      fullName,
      setNewData,
      lastNameInput,
      setLastName,
      customEvent,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  color: #333;
}

.head {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px;
}

section {
  padding: 1rem;
}

button {
  padding: 8px;
  background-color: rgb(6, 107, 107);
  color: white;
  border: 0;
  cursor: pointer;
}

input {
  padding: 8px;
  color: rgb(6, 107, 107);
  display: block;
  margin: 10px 0;
}
</style>
