<template>
  <div class="home">
    <MainComponent ref="mainComponent" />
  </div>
</template>

<script>
import MainComponent from "@/components/main-component/main-component.vue";

export default {
  name: "HomeView",
  components: {
    MainComponent,
  },
};
</script>
