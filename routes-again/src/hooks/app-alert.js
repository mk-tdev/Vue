import { ref } from "vue";
import { useRouter } from "vue-router";

function useAlert(initialState = false) {
  const router = useRouter();
  const isDialogVisible = ref(initialState);

  function showDialog() {
    isDialogVisible.value = true;
  }

  function hideDialog() {
    isDialogVisible.value = false;
    router.push("/allproducts");
  }

  return {
    isDialogVisible,
    showDialog,
    hideDialog,
  };
}

export default useAlert;
