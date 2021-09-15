<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="3"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        name="rate"
        id="rate"
        v-model="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Rate must be valid</p>
    </div>
    <div class="form-control">
      <h3>Areas of expertice</h3>

      <div class="filters" :class="{ invalid: !areas.isValid }">
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.swimming"
          id="swimming"
          labelTxt="Swimming"
          v-model="areas.val"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.running"
          id="running"
          labelTxt="Running"
          v-model="areas.val"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.football"
          id="football"
          labelTxt="Football"
          v-model="areas.val"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.dance"
          id="dance"
          labelTxt="Dance"
          v-model="areas.val"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.acting"
          id="acting"
          labelTxt="Acting"
          v-model="areas.val"
        ></base-checkbox>
        <base-checkbox
          @checkChange="checkFilter"
          :checkState="filters.wrestling"
          id="wrestling"
          labelTxt="Wrestling"
          v-model="areas.val"
        ></base-checkbox>

        <p v-if="!areas.isValid">Must select at least 1 area!</p>
      </div>
    </div>

    <p v-if="!isFormValid">Please fix the errors and try again!</p>
    <base-button mode="dark">Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,
      firstName: { val: "", isValid: true },
      lastName: { val: "", isValid: true },
      rate: { val: null, isValid: true },
      description: { val: "", isValid: true },
      areas: { val: [], isValid: true },
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
    clearValidity(inputElem) {
      this[inputElem].isValid = true;
    },
    validateForm(parsedAreas) {
      this.isFormValid = true;

      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.isFormValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.isFormValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.isFormValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.isFormValid = false;
      }
      if (parsedAreas.length === 0) {
        this.areas.isValid = false;
        this.isFormValid = false;
      }
    },
    submitForm() {
      const parsed = Object.keys(this.filters).filter((a) => this.filters[a]);

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        rate: this.rate.val,
        description: this.description.val,
        areas: parsed,
      };

      this.validateForm(parsed);

      console.log(formData);

      if (!this.isFormValid) return;

      this.$emit("save-data", formData);
    },
    checkFilter(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };

      const parsed = Object.keys(this.filters).filter((a) => updatedFilters[a]);
      if (parsed.length > 0) this.clearValidity("areas");

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
