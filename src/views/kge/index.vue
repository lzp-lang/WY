<template>
  <div class="">
    <div id="header">
      <van-cell @click="showPopup" id="select">
        <van-icon name="wap-nav" id="tu1" />
      </van-cell>
      <h2>K歌</h2>
      <van-icon class="search" name="search" />
    </div>
    <van-popup v-model="show" position="left" :style="{ height: '100%' }"
      >内容内容</van-popup
    >
    <div class="nav">
      <div class="diangetai">
        <div class="left">
          <van-icon name="music" class="icon" />
        </div>
        <div class="right" @click="change">
          <h3>点歌台</h3>
          <p>去演唱</p>
        </div>
      </div>
      <div class="myk">
        <div class="left">
          <van-icon name="bar-chart-o" class="icon" />
        </div>
        <div class="right">
          <h3>我的k歌</h3>
          <p>暂无作品</p>
        </div>
      </div>
    </div>
    <remen></remen>
    <pinglun></pinglun>
    <router-view></router-view>
  </div>
</template>

<script>
import Remen from "../../components/kge/kgebang/index";
import Pinglun from "../../components/pinglun/index";
export default {
  data() {
    return { show: false };
  },
  computed: {},
  watch: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    change() {
      this.$router.push({
        path: "/kgebang",
      });
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: { Remen, Pinglun },
};
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
}

#select {
  width: 50px;
}
#tu1 {
  font-size: 20px;
}
.search {
  width: 50px;
  font-size: 20px;
  line-height: 50px;
}
/* h2 {
  line-height: 0;
} */
.nav {
  width: 90%;
  height: 100px;
  margin: 0 auto;
}
.diangetai,
.myk {
  width: 45%;
  height: 100%;
  float: left;
  border-radius: 5px;
  background: gray;
}
.myk {
  float: right;
}
.left {
  width: 40%;
  height: 100%;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
  float: left;
}
.right {
  float: left;
  padding-top: 10px;
}
.icon {
  color: rgb(194, 42, 42);
}
</style>
