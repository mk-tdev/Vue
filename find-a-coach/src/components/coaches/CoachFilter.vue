<template>
  <base-container mode='lite'>
    <h2>Find your Coach</h2>

    <div class="filters">
      <base-checkbox
        @checkChange="checkFilter"
        :checkState="filters.swimming"
        id="swimming"
        labelTxt="Swimming"
      ></base-checkbox>
      <base-checkbox
        @checkChange="checkFilter"
        :checkState="filters.running"
        id="running"
        labelTxt="Running"
      ></base-checkbox>
      <base-checkbox
        @checkChange="checkFilter"
        :checkState="filters.football"
        id="football"
        labelTxt="Football"
      ></base-checkbox>
      <base-checkbox
        @checkChange="checkFilter"
        :checkState="filters.dance"
        id="dance"
        labelTxt="Dance"
      ></base-checkbox>
      <base-checkbox
        @checkChange="checkFilter"
        :checkState="filters.acting"
        id="acting"
        labelTxt="Acting"
      ></base-checkbox>
      <base-checkbox
        @checkChange="checkFilter"
        :checkState="filters.wrestling"
        id="wrestling"
        labelTxt="Wrestling"
      ></base-checkbox>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
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
  emits: ["change-filter"],
  methods: {
    checkFilter(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };

      this.filters = updatedFilters;

      this.$emit("change-filter", updatedFilters);
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
</style>
