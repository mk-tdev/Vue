import { ref } from "vue";
export default {
  setup() {
    const isDialogVisible = ref(false);

    function showDialog() {
      isDialogVisible.value = true;
    }
    function hideDialog() {
      console.log(hideDialog);
      isDialogVisible.value = false;
    }

    return {
      isDialogVisible,
      showDialog,
      hideDialog,
    };
  },
};
