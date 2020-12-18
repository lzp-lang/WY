<template>
  <div class="kge">
    <ul>
      <li v-for="item in name" :key="item._id" @click="jump(item.id)">{{item.name}}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:[],
    };
  },
  computed: {},
  watch: {},
  methods: {
    jump(id){
      this.$http.get(`api/playlist/highquality/tags`).then(res=>{
           console.log(res)
          localStorage.setItem("jump",JSON.stringify(id))
          this.$router.push(`../jump/${id}`)
        })
   
 
    } 
  },
  created() {
    this.$http.get(`api/playlist/highquality/tags`).then(res=>{
           console.log(res.data.tags)
            this.name=res.data.tags
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

*{
  margin: 0px;
  padding: 0px;
}
ul{
  display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
  
}
li{
  width: 100px;
  height: 30px;
  margin-bottom: 15px;
  border:solid 1px black;
  text-align: center;
  
}
</style>
