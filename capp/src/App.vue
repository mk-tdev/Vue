<template>
  <div style="display: flex; align-items: center" class="head">
    <img alt="Vue logo" height="50" src="./assets/logo.png" />
    <h1>{{ title }}</h1>
  </div>

  <h2>Username: {{ user.userName }}</h2>
  <h3>Email: {{ user.email }}</h3>

  <p>{{ fav.fruits }}</p>
  <p>{{ fav.color }}</p>

  <button @click="setNewData">Change Email</button>

  <div>
    <input
      type="text"
      placeholder="First Name"
      name="firstName"
      id="firstName"
      @input="setFirstName"
    />
    <input
      type="text"
      placeholder="Last Name"
      name="lastName"
      id="lastName"
      @input="setLastName"
    />
  </div>

  <p>Fullname: {{ fullName }}</p>

  <div>
    <input
      type="text"
      placeholder="Greeting"
      name="greeting"
      id="greeting"
      v-model="greeting"
    />
  </div>
  <p>{{ greeting }}</p>
</template>

<script>
import { ref, reactive, isReactive, isRef, computed, watch } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const title = ref("Composition API");
    const firstName = ref("");
    const lastName = ref("");
    const greeting = ref("");
    const user = ref({
      userName: "Mkumar",
      email: "mk@mk.com",
    });
    const fav = reactive({
      fruits: "Sour",
      color: "Blue",
    });

    const fullName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    console.log(isRef(title));
    console.log(isReactive(fav));

    watch([fullName, greeting], (newVs, oldVs) => {
      console.log(newVs, oldVs);
    });

    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    function setLastName(event) {
      lastName.value = event.target.value;
    }
    // function setGreeting(event) {

    // }

    function setNewData() {
      title.value = "Composition API!";
      user.value.userName = "Mkumar";
      user.value.email = "Mkumar@mk.com";
      fav.fruits = "Sweet & Sour";
      fav.color = "Blue and Green";
    }

    return {
      title,
      user,
      fav,
      setNewData,
      setFirstName,
      setLastName,
      fullName,
      greeting,
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

button {
  padding: 8px;
  background-color: rgb(6, 107, 107);
  color: white;
  border: 0;
}

input {
  padding: 8px;
  color: rgb(6, 107, 107);
  display: block;
  margin: 10px 0;
}
</style>
