<template>
  <base-dialog v-if="formIsInValid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>At least one inout value is invalid</p>
      <p>Make sure to enter proper values</p>
    </template>

    <template #actions>
      <base-button :mode="'flat'" @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          ref="descriptionInput"
          name="description"
          id="description"
          cols="30"
          rows="3"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="linkInput" />
      </div>

      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      formIsInValid: false,
    };
  },
  inject: ["addResource"],
  methods: {
    confirmError() {
      this.formIsInValid = false;
    },
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === "" ||
        enteredDescription.trim() === "" ||
        enteredLink.trim() === ""
      ) {
        this.formIsInValid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #fefcff;
  background-color: #747375;
}

.form-control {
  margin: 1rem 0;
}
</style>
