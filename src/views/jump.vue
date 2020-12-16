<template>
  <div class="jump">
    <!-- 歌单列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
  
    <!-- 播放 -->
      <van-cell
        v-for="item in list"
        :key="item.id"
        :title="item.name"
        @click="play(item.id)"
      >
      <span>{{item.ar[0].name}}</span>
        
      </van-cell>
    </van-list>
    <!-- 弹窗 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
      <span>{{ songName }}</span>
      <span>{{ art }}</span>
    <p><audio :src="box" ref="audio" controls autoplay="autoplay"></audio></p>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      box: [],
      list: [],
      show: false,
      loading: false,
      finished: false,
      art: "", //歌手名字
      songName: "", //歌曲名字
      art1: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    async play(id) {
      this.songName = ''
      this.show = true;
      const result = await this.$http.get(`api/song/detail?ids=${id}`)
      if(result.status===200){
        this.art = result.data.songs[0].ar[0].name;
        this.songName = result.data.songs[0].name; 
      }
      const result1 = await this.$http.get(`api/song/url?id=${id}`)
      if(result1.status===200){
        this.box = result1.data.data[0].url;
        localStorage.setItem("id", JSON.stringify(this.id))
      }
    },

    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < res.data.playlist.tracks.leng; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  },
  created() {
    let a = JSON.parse(localStorage.getItem("jump"));
    this.$http.get(`api/playlist/detail?id=${a}`).then((res) => {
      console.log(res);
      this.list = res.data.playlist.tracks;

       console.log(this.list)
    
        
         this.art1.push(this.list[4].ar[0].name);
         console.log(this.art1)
      
      
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

<style lang='scss' scoped>
</style>