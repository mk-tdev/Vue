<template>
  <base-card>
    <base-button @click="switchTab('resources')" :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="switchTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import Resources from "./Resources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    Resources,
    AddResource,
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  data() {
    return {
      selectedTab: "resources",
      storedReources: [
        {
          id: "official-guide",
          title: "Offical Guide",
          description: "Official Vue Js Documentation",
          link: "https://vuejs.org/",
        },
        {
          id: "google",
          title: "Google",
          description: "Research and development using google",
          link: "https://www.google.com/",
        },
      ],
    };
  },
  methods: {
    switchTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newRes = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };

      this.storedReources.unshift(newRes);
      this.switchTab("resources");
    },
    removeResource(resID) {
      const resIndex = this.storedReources.find((res) => res.id === resID);
      this.storedReources.splice(resIndex, 1);
    },
  },
  provide() {
    return {
      resources: this.storedReources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
};
</script>
