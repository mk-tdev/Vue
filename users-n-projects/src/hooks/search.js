import { ref, computed, watch } from "vue";

export default function useSearch(items, searchParam) {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchParam]
          .toUpperCase()
          .includes(activeSearchTerm.value.toUpperCase())
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  watch(enteredSearchTerm, (newV) => {
    setTimeout(() => {
      if (newV === enteredSearchTerm.value) {
        activeSearchTerm.value = newV;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
}
