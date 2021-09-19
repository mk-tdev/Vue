<template>
  <section>
    <base-dialog
      v-if="isDialogVisible"
      :title="'Do you want to add?'"
      @close="hideDialog"
    >
      <p>Are you sure about that?</p>
    </base-dialog>
    <h2>Add a product</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model.trim="enteredTitle" />
      </div>
      <div>
        <label for="price">Price</label>
        <input type="number" id="price" v-model.number="enteredPrice" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea
          rows="5"
          id="description"
          v-model.trim="enteredDescription"
        ></textarea>
      </div>
      <base-button mode="g">Add Product</base-button>
    </form>
  </section>
</template>

<script>
import BaseDialog from "../BaseDialog.vue";

import { ref, inject } from "vue";

import useAlert from "../../hooks/app-alert";

export default {
  components: { BaseDialog },
  setup() {
    const addProduct = inject("addProduct");

    const enteredTitle = ref("Product Name");
    const enteredPrice = ref(10);
    const enteredDescription = ref("Good product");

    const { isDialogVisible, showDialog, hideDialog } = useAlert();

    function submitForm() {
      showDialog();
      addProduct({
        title: enteredTitle,
        description: enteredDescription,
        price: enteredPrice,
      });

      showDialog();
    }

    return {
      isDialogVisible,
      hideDialog,
      enteredTitle,
      enteredPrice,
      enteredDescription,
      submitForm,
    };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

input,
label,
textarea {
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}

input,
textarea {
  font: inherit;
  margin-bottom: 0.5rem;
}
</style>
