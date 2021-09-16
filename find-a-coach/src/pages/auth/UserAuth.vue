<template>
  <div>
    <base-dialog
      :show="!!isError"
      title="An error occured!"
      @close="handleError"
    >
      {{ isError }}
    </base-dialog>
    <base-container>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model.trim="email" />
        </div>

        <div class="form-control">
          <label for="password"> Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.trim="password"
          />
        </div>

        <p v-if="!isFormValid">Invalid data!</p>

        <div class="loader" v-if="isLoading">
          <base-spinner></base-spinner>
        </div>

        <base-button mode="dark">{{ submitCaption }}</base-button>
        <base-button type="button" mode="dark" @click="switchAuthMode">{{
          switchCaption
        }}</base-button>
      </form>
    </base-container>
  </div>
</template>

<script>
export default {
  computed: {
    submitCaption() {
      return this.mode === "login" ? "Login" : "Signup";
    },
    switchCaption() {
      return this.mode === "login" ? "Signup Instead" : "Login Instead";
    },
  },
  methods: {
    handleError() {
      this.isError = false;
    },
    async submitForm() {
      this.isLoading = true;
      this.isFormValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 7
      ) {
        this.isFormValid = false;
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
      };

      if (!this.isFormValid) return;

      try {
        await this.$store.dispatch(this.mode, formData);
        const redirectUrl = "/" + (this.$route.query.redirect || "coaches");
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.isError = error.message || "Something went wrong!";
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      this.mode = this.mode === "login" ? "signup" : "login";
    },
  },
  data() {
    return {
      email: "test@test.com",
      password: "testing",
      isFormValid: true,
      mode: "login",
      isError: null,
      isLoading: false,
    };
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.filters label {
  padding-right: 0.5rem;
}

.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  padding: 4px;
}
input:focus,
textarea:focus {
  background-color: rgb(145, 143, 143);
  outline: none;
  border-color: #333;
  color: white;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #333 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
