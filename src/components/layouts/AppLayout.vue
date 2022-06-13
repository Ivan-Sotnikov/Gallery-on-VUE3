<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault from "@/components/layouts/AppLayoutDefault.vue";
import WelcomeLayout from "./WelcomeLayout.vue";

export default {
  name: "AppLayout",
  components: {
    WelcomeLayout,
    AppLayoutDefault,
  },
  data() {
    return {
      layout: "AppLayoutDefault",
    };
  },
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        this.layout = route.meta.layout ? route.meta.layout : "AppLayoutDefault";
      },
    },
  },
};
</script>
