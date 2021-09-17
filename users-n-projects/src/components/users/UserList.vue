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
import UserItem from "./UserItem.vue";

export default {
  components: { UserItem },
  props: ["users"],
  data() {
    return {
      enteredSearchTerm: "",
      activeSearchTerm: "",
      sorting: null,
    };
  },
  computed: {
    availableUsers() {
      let users = [];
      if (this.activeSearchTerm) {
        users = this.users.filter((usr) =>
          usr.fullName
            .toUpperCase()
            .includes(this.activeSearchTerm.toUpperCase())
        );
      } else if (this.users) {
        users = this.users;
      }
      return users;
    },
    displayedUsers() {
      if (!this.sorting) {
        return this.availableUsers;
      }
      return this.availableUsers.slice().sort((u1, u2) => {
        if (this.sorting === "asc" && u1.fullName > u2.fullName) {
          return 1;
        } else if (this.sorting === "asc") {
          return -1;
        } else if (this.sorting === "desc" && u1.fullName > u2.fullName) {
          return -1;
        } else {
          return 1;
        }
      });
    },
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
    sort(mode) {
      this.sorting = mode;
    },
  },
  watch: {
    enteredSearchTerm(val) {
      setTimeout(() => {
        if (val === this.enteredSearchTerm) {
          this.activeSearchTerm = val;
        }
      }, 300);
    },
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
