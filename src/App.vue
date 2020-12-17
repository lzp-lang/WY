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
    return { show: false,};
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    },
  components: {
    Footer,
  },
};
</script>

<style>
*{
  margin:0;
  padding:0;
  border:0;
}
#app{
  position: relative;
}
.seach{
 position: absolute;
 
 left:60px;
 top:0px;
}














</style>
