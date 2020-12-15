<template>
  <div id="app">
  
      <van-cell is-link @click="showPopup"><van-icon name="wap-nav"/></van-cell>
  <div class="seach">
    <van-search
  v-model="value"
  shape="round"
  
  placeholder="请输入搜索关键词"
/>
  </div>
    <van-popup v-model="show" position="left" :style="{ height: '100%' }">内容</van-popup>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/index.vue";
export default {
  name: "App",
   data() {
    return {
 show: false,
    };
  },
  methods:{
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
#app{
  position: relative;
}
.seach{
 position: absolute;
 
 left:60px;
 top:0px;
}














</style>
