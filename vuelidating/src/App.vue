<template>
  <div class="bg-blue-400 min-h-screen flex items-center justify-center">
    <div class=" bg-blue-100 p-5 m-5 border rounded shadow-sm w-1/2">
      <h2>
        Create an Account
      </h2>

      <p class="my-2">
        <input
          v-model="formState.email"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <span class="text-red-600" v-if="v$.email.$error">{{
          v$.email.$errors[0].$message
        }}</span>
      </p>
      <p class="my-2">
        <input
          v-model="formState.password.password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <span class="text-red-600" v-if="v$.password.password.$error">{{
          v$.password.password.$errors[0].$message
        }}</span>
      </p>
      <p class="my-2">
        <input
          v-model="formState.password.confirmPassword"
          type="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
        <span class="text-red-600" v-if="v$.password.confirmPassword.$error">{{
          v$.password.confirmPassword.$errors[0].$message
        }}</span>
      </p>
      <button
        @click="submitForm"
        class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const formState = reactive({
      email: "",
      password: {
        password: "",
        confirmPassword: "",
      },
    });

    const mustLearnVue = (value) => value.includes("learnvue");

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
          mustLearnVue: helpers.withMessage(
            "Must include learnvue",
            mustLearnVue
          ),
        },
        password: {
          password: { required, minLength: minLength(6) },
          confirmPassword: {
            required,
            sameAs: sameAs(formState.password.password),
          },
        },
      };
    });

    const v$ = useValidate(rules, formState);

    return { formState, v$ };
  },
  // data() {
  //   return {
  //     v$: useValidate(),
  //     email: "",
  //     password: {
  //       password: "",
  //       confirmPassword: "",
  //     },
  //   };
  // },
  // validations() {
  //   return {
  //     email: { required },
  //     password: {
  //       password: { required },
  //       confirmPassword: { required },
  //     },
  //   };
  // },
  methods: {
    submitForm() {
      // console.log(this.v$);
      this.v$.$validate();

      if (!this.v$.$error) {
        //
      } else {
        console.log("Not valid form");
      }
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
