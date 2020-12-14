<template>
  <div class="footer">
    <ul>
      <router-link to="/find" tag="li"><dt><van-icon name="service-o" size=25px /><dl>发现</dl></dt></router-link>
      <router-link to="/boke" tag="li"><dt><van-icon name="music-o" size=25px active-class="color"/><dl>播客</dl></dt></router-link>
      <router-link to="/mine" tag="li"><dt><van-icon name="smile-o" size=25px active-class="color"/><dl>我的</dl></dt></router-link>
      <router-link to="/kge" tag="li"><dt><van-icon name="play-circle-o" size=25px active-class="color" /><dl>唱歌</dl></dt></router-link>
      <router-link to="/yuncun" tag="li"><dt><van-icon name="shop-collect-o" size=25px active-class="color" /><dl>云村</dl></dt></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
 div{width: 100%;
  height: 50px;
   position: absolute;
   bottom: 0; 
 }
ul{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  
   }
 li{

   float: left;
 }


</style>
