<template>
  <label class="container-checkbox"
    >{{ labelTxt }}
    <input
      type="checkbox"
      :id="id"
      :checked="checkState"
      @change="checkFilter"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  props: ["id", "labelTxt", "checkState"],
  emits: ["check-change"],
  methods: {
    checkFilter(e) {
      this.$emit("check-change", e);
    },
  },
};
</script>

<style scoped>
.container-checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}
/* Hide the browser's default checkbox */
.container-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom checkbox */
.container-checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container-checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container-checkbox input:checked ~ .checkmark {
  background-color: #48484b;
}

/* Create the checkmark/indicator (hidden when not checked) */
.container-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container-checkbox .checkmark:after {
  left: 9px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
