<template>
  <div class="">
    <van-cell @click="showPopup">
      <van-card
        v-for="item in list"
        :key="item.id"
        :desc="item.name"
        :title="item.artistName"
        :thumb="item.cover"
        @click="audioshow(item.id)"
      />
    </van-cell>
    <van-popup v-model="show" position="top" :style="{ height: '30%' }">
      <iframe height="100%" width="100%" :src="aud" frameborder="0"></iframe
    ></van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      list: [],
      aud: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    moreshow() {
      this.$http.get(`/api/mv/all`).then((res) => {
        console.log(res);
        this.list = res.data.data;
        console.log(this.list);
      });
    },
    audioshow(id) {
      console.log(id);
      this.$http.get(`/api/mv/url?id=${id}`).then((res) => {
        console.log(res.data.data.url);
        this.aud = res.data.data.url;
      });
    },
  },
  created() {
    this.moreshow();
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
<style scoped></style>
