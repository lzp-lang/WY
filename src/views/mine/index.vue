<template>
  <div id="app">
    <!-- 侧边栏 -->
    <van-cell @click="showPopup"><van-icon name="wap-nav" id="haha"/></van-cell>
    <van-popup v-model="show" position="left" :style="{ height: '100%' }">
      <!-- 账户 -->
      <van-cell-group id="woqu">
        <van-cell is-link>
          <img src="../../assets/img/dengluqian.jpg" alt="" class="tu" />
          <span>立即登录</span></van-cell
        >
      </van-cell-group>

      <van-cell title="我的消息" is-link url="/vant/mobile.html" />
      <van-cell title="云贝中心" is-link to="index" />
      <van-cell title="创作者中心" is-link to="index" />

      <van-cell title="云村有票" is-link url="/vant/mobile.html" />
      <van-cell title="商城" is-link to="index" />
      <van-cell title="游戏专区" is-link to="index" />
      <van-cell title="我的消息" is-link url="/vant/mobile.html" />
      <van-cell title="云贝中心" is-link to="index" />
      <van-cell title="创作者中心" is-link to="index" />

      <van-cell title="口袋彩铃" is-link url="/vant/mobile.html" />
      <van-cell title="设置" is-link to="index" />
      <van-cell title="夜间模式" is-link to="index" />
      <van-cell title="定时关闭" is-link url="/vant/mobile.html" />
      <van-cell title="个性装扮" is-link to="index" />
      <van-cell title="创作者中心" is-link to="index" />

      <van-cell title="帮助与反馈" is-link url="/vant/mobile.html" />
      <van-cell title="分享网易音乐" is-link to="index" />
      <van-cell title="关于" is-link to="index" />
      <van-cell title="退出登录/关闭" to="index" />
    </van-popup>
    <!-- 登录 -->
    <van-cell-group id="woqu">
      <van-cell is-link v-if="flag">
        <img src="../../assets/img/dengluqian.jpg" alt="" class="tu" />
        <span>立即登录</span></van-cell
      >
      <van-cell is-link v-if="!flag">
        <img src="../../assets/img/dengluqian.jpg" alt="" class="tu" />
        <span>昵称</span></van-cell
      >
    </van-cell-group>
    <!-- 导航 -->
    <div id="nav">
      <van-grid class="navv">
        <van-grid-item icon="photo-o" text="本地/下载" id="women" />
        <van-grid-item icon="photo-o" text="云盘" />
        <van-grid-item icon="photo-o" text="已购" />
        <van-grid-item icon="photo-o" text="最近播放" />
        <van-grid-item icon="photo-o" text="我的好友" />
        <van-grid-item icon="photo-o" text="收藏和赞" />
        <van-grid-item icon="photo-o" text="我的博客" />
        <van-grid-item icon="photo-o" text="音乐应用" />
      </van-grid>
    </div>

    <!-- 我喜欢的音乐 -->
    <van-cell-group>
      <van-cell is-link>
        <img src="../../assets/img/dengluqian.jpg" alt="" class="tu" />
        <span @click="moreshow">我喜欢的音乐</span>
      </van-cell>
    </van-cell-group>
    <!-- 歌单 -->
    <van-tabs v-model="active">
      <van-tab title="创建歌单">
        <p>创建歌单<span>4</span>个</p>
      </van-tab>
      <van-tab title="收藏歌单">
        <p>收藏歌单<span>4</span>个</p>
      </van-tab>
      <van-tab title="歌单助手">
        <p>歌单助手<span>4</span>个</p>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      show: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    moreshow() {
      this.$http.get("/api/song/url?id=33894312").then((res) => {
        console.log(res);
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
  components: {},
};
</script>

<style scoped>
#app {
  background: #e4e4e4;
}
#haha {
  font-size: 30px;
}
#women {
  border: 0;
}
.tu {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
#nav {
  width: 100%;
  margin: 20px 0 20px 0;
  border-radius: 30px;
  overflow: hidden;
  background: #e4e4e4;
}
</style>
