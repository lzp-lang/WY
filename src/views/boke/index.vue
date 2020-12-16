<template>
  <div class="boke">
    <div id="head">
    <router-link to="/bktj" tag="p"  >推荐</router-link>
    <router-link to="/bkfl" tag="p">分类</router-link>
    <div class="odiv"><van-icon name="search" size=30px color="aliceblue" /></div>
    </div>
    <router-view></router-view>
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
  created() {
      this.$http.post(`api/playmode/intelligence/list?id=4007792419&pid=24381616&sid=36871368`).then(res=>{
            console.log(res)
        }) 
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
#head{
width: 100%;
height: 50px;
background-color: red;
display: flex;
justify-content: space-around;

}
p{
  color: aliceblue;
   
}
.odiv{
  width: 30px;
  height: 30px;
  margin-top: 15px;
}
 </style>
