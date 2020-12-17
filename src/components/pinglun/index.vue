<template>
  <div class="pinglun">
    <div class="tuijian">
      <h3>为你推荐</h3>
    </div>
    <ul>
      <li v-for="item in list" :key="item.id" class="li">
        <div class="head">
          <div class="img">
            <img :src="item.simpleUserInfo.avatar" alt="" />
          </div>
          <div class="user">
            <p>{{ item.simpleUserInfo.nickname }}</p>
            <p class="time">{{ item.time }}</p>
          </div>
          <div class="guanzhu" @click="guanzhu">+ 关注</div>
        </div>
        <p class="ping">{{ item.content }}</p>
        <van-cell @click="showPopup" class="tan"
          ><img
            :src="item.simpleResourceInfo.songCoverUrl"
            @click="getvideo(item.simpleResourceInfo.song.id)"
        /></van-cell>
        <van-popup
          v-model="show"
          round
          position="bottom"
          :overlay-style="{ opacity: '0.1' }"
          :style="{ height: '20%' }"
          ><audio controls="true" :src="vid"></audio
        ></van-popup>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      show: false,
      list: [],
      vid: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    showpinglun() {
      this.$http.get("/api/comment/hotwall/list").then((res) => {
        console.log(res);
        this.list = res.data.data;
        console.log(111, this.list);
      });
    },
    getvideo(id) {
      this.$http.get(`/api/song/url?id=${id}`).then((res) => {
        console.log(res);
        this.vid = res.data.data[0].url;
      });
    },
    guanzhu() {
      Toast.success("关注成功");
    },
  },
  created() {
    this.showpinglun();
  },
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
.pinglun {
  width: 90%;
  /* height: 300px; */
  margin: 0 auto;
}
.tuijian {
  width: 100%;
  height: 60px;
  line-height: 0;
  font-size: 20px;
  line-height: 60px;
  text-align: center;
}
.li {
  width: 100%;
  border-top: rgb(199, 196, 196) 1px solid;
  margin-bottom: 20px;
}
.head {
  width: 100%;
  height: 70px;
}
.img {
  width: 70px;
  height: 70px;
  float: left;
}
.img img {
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
}
.user {
  width: 150px;
  float: left;
  font-size: 15px;
  line-height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.guanzhu {
  width: 80px;
  height: 30px;
  float: right;
  border: 1px solid red;
  border-radius: 15px;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  color: red;
  margin-top: 10px;
}
.ping {
  padding-left: 10px;
}
.time {
  color: gray;
}
li .tan img {
  width: 150px;
  height: 150px;
  padding-left: 10px;
}
</style>
