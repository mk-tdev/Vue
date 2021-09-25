<template>
  <header>
    <img alt="Vue logo" height="60" src="./assets/logo.png" />
    <div class="title">Drag and Drop To Do List</div>
  </header>
  <h3>{{ activeItem }}</h3>
  <main>
    <div
      class="drop-zone"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <h2>Todo</h2>
      <div
        v-for="item in getList(1)"
        :key="item.id"
        class="drag-el"
        draggable="true"
        :class="{ 'drag-el-complete': item.complete }"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>

    <div
      class="drop-zone"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <h2>Completed</h2>
      <div
        v-for="item in getList(2)"
        :key="item.id"
        class="drag-el"
        :class="{ 'drag-el-complete': item.complete }"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </main>
  <DnD msg="Welcome to Your Vue.js App" />
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import DnD from "./components/DnD.vue";

export default {
  name: "App",
  components: {
    DnD,
  },
  setup() {
    const items = ref([
      { id: 0, title: "I am number 1", list: 1, complete: false },
      { id: 1, title: "I am number 2", list: 1, complete: false },
      { id: 2, title: "I am number 3", list: 1, complete: false },
      { id: 3, title: "I am number 4", list: 2, complete: true },
      { id: 4, title: "I am number 5", list: 2, complete: true },
    ]);

    const activeItem = ref(null);

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemId", item.id);
    };

    const onDrop = (event, list) => {
      const itemId = event.dataTransfer.getData("itemId");
      const item = items.value.find((i) => i.id === +itemId);
      activeItem.value = item;

      item.list = list;
      item.complete = list !== 1;
    };

    const getList = (list) => {
      return items.value.filter((i) => i.list === list);
    };

    const getCompletionState = computed(() => {
      console.log({ activeItem });
      return activeItem && activeItem.complete ? "drag-el-complete" : "";
    });

    return { activeItem, getList, getCompletionState, startDrag, onDrop };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px;
}

header .title {
  font-size: 1.5rem;
  color: #333;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.drop-zone {
  width: 50%;
  margin: 50px auto;
  padding: 10px;
  background-color: #ecf0f1;
  min-height: 10px;
}

.drag-el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
  cursor: grab;
}

.drag-el-complete {
  background-color: #027e17;
}

.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>
