<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        v-model.trim="firstName"
      />
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        v-model.trim="lastName"
      />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="3"
        v-model.trim="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" name="rate" id="rate" v-model="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of expertice</h3>

      <div class="filters">
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.swimming"
          id="swimming"
          labelTxt="Swimming"
          v-model="areas"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.running"
          id="running"
          labelTxt="Running"
          v-model="areas"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.football"
          id="football"
          labelTxt="Football"
          v-model="areas"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.dance"
          id="dance"
          labelTxt="Dance"
          v-model="areas"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.acting"
          id="acting"
          labelTxt="Acting"
          v-model="areas"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.wrestling"
          id="wrestling"
          labelTxt="Wrestling"
          v-model="areas"
        ></base-checkbox>
      </div>
    </div>

    <base-button mode="dark">Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      rate: null,
      description: "",
      areas: [],
      filters: {
        swimming: true,
        running: true,
        football: true,
        dance: true,
        acting: true,
        wrestling: true,
      },
    };
  },
  emits: ["save-data"],
  methods: {
    submitForm() {
      const parsed = Object.keys(this.filters).filter((a) => this.filters[a]);

      const formData = {
        first: this.firstName,
        last: this.lastName,
        rate: this.rate,
        description: this.description,
        areas: parsed,
      };

      this.$emit("save-data", formData);
    },
    checkFilter(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };

      this.filters = updatedFilters;
    },
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
