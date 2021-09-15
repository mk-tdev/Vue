<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your email</label>
      <input type="text" name="email" id="email" v-model.trim="email" />
    </div>

    <div class="form-control">
      <label for="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="3"
        v-model.trim="message"
      ></textarea>
    </div>

    <p class="errors" v-if="!isFormValid">Please enter a valid data!</p>

    <div class="actions">
      <base-button mode="dark">Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      isFormValid: true,
    };
  },
  methods: {
    submitForm() {
      this.isFormValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.isFormValid = false;
        return;
      }

      const formData = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      };

      if (!this.isFormValid) return;

      this.$store.dispatch("requests/contactCoach", formData);
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped>
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

.errors {
  color: red;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
