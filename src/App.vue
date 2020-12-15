<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/index.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    Footer,
  },
};
</script>

<style></style>
