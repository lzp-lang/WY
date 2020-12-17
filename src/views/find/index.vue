<template>
  <div class="content">


    <van-cell is-link @click="showPopup">
      <van-icon name="wap-nav" />
     
    </van-cell>
    <div class="sousuo">
<form action="/">
  <van-search
  @click="search"
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
</div>
    <van-popup v-model="show" position="left" :style="{ height: '100%' }"
      >内容</van-popup
    >
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="green">
        <van-swipe-item v-for="item in bannerImgs" :key="item.id"
          ><img :src="item.imgUrl" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
  
<van-grid :gutter="10">
  <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
</van-grid>
    <div class="ul">
      <h3 class="title">推荐歌单</h3>
      <ul>
        <li v-for="item in list" :key="item._id">
          <div class="icon" @click="selectList(item)">
            <div class="gradients"></div>
            <img :src="item.picUrl" />
          </div>
          <p class="play-count">
            <i class="fa fa-headphones"></i>
            {{ Math.floor(item.playCount / 10000) }}万
          </p>
          <div class="text">
            <p class="name">{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div class="seach"></div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      show: false,
      value: "",
      list: [],
      bannerImgs: [
        {
          imgUrl:
            "http://p1.music.126.net/GOUS07Q9pm88X9EWbSQI6A==/109951165542504475.jpg?",
          id: 1,
        },
        {
          imgUrl:
            "http://p1.music.126.net/MHD3ztZuIQIPZagMgR8h2w==/109951165542304054.jpg?imageView&quality=89",
          id: 2,
        },
        {
          imgUrl:
            "http://p1.music.126.net/gvxPTf98GNgyM_Jm8XpNbw==/109951165542270577.jpg?imageView&quality=89",
          id: 3,
        },
        {
          imgUrl:
            "http://p1.music.126.net/1b2syjXOWlPZEYUpqdW6OQ==/109951165542511113.jpg?imageView&quality=89",
          id: 4,
        },
      ],
      movies: [],
      hotMovies: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSearch(val) {
      Toast(val);
        this.$store.state.search=val

    },
    onCancel() {
      Toast('取消');
  this.$router.push('/find')

    },
search(){
  if(this.$route.path!=='/find/search'){
        console.log(1);
  this.$router.push('/find/search')
      }

},
    showPopup() {
      this.show = true;
    },
  },
  created() {
    this.$http.post(`api/dj/toplist/personalized?limit=30`).then((res) => {
      // console.log(res)

      this.list = res.data.toplist;
    });
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

<style>
html,
body {
  height: 100%;
}
.banner {
  height: 25%;
}
.my-swipe {
  height: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
}
.my-swipe .van-swipe-item img {
  height: 100%;
  width: 100%;
}

ul {
  display: flex;
  /* flex-wrap: wrap; */
}

.ul img {
  width: 100px;
  height: 100px;
}
.text {
  font-size: 15px;
}
.content {
  position: relative;
}
.sousuo {
  position: absolute;
  top: 0;
  left: 50px;
}
.name {
  width: 106px;
  text-align: center;
}
.play-count {
  text-align: center;
}
/* .van-cell {
  overflow: hidden;
} */
</style>
