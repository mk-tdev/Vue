<template>
  <base-container style="width: 100%">
    <h2>Active Users</h2>

    <base-search
      :searchTerm="enteredSearchTerm"
      @search="updateSearch"
    ></base-search>

    <div>
      <base-button
        mode="dark"
        @click="sort('asc')"
        :class="{ selected: sorting === 'asc' }"
      >
        Sort Ascending
      </base-button>
      <base-button
        mode="dark"
        @click="sort('desc')"
        :class="{ selected: sorting === 'desc' }"
      >
        Sort Descending
      </base-button>
    </div>

    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import { toRefs } from "vue";
import useSearch from "../../hooks/search";
import useSort from "../../hooks/sort";

import UserItem from "./UserItem.vue";

export default {
  components: { UserItem },
  props: ["users"],
  emits: ["list-projects"],
  setup(props) {
    const { users } = toRefs(props);
    const {
      enteredSearchTerm,
      availableItems: availableUsers,
      updateSearch,
    } = useSearch(users, "fullName");

    const { sorting, sort, displayedItems: displayedUsers } = useSort(
      availableUsers
    );

    return {
      enteredSearchTerm,
      sorting,
      displayedUsers,
      updateSearch,
      sort,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
