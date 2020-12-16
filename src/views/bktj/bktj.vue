<template>
  <div class='bktj'>
      
     <i @click="up">上</i>
     <audio :src="box" ref="audio" controls autoplay="autoplay"></audio>
     <i @click="down">下</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
       id:33894312,
       box:[],
       val:""
    };
  },
  computed: {},
  watch: {},
  methods: {
    up(){
      this.id--
      this.$http.get(`api/song/url?id=${this.id}`).then(res=>{
            console.log(res)
            this.box=res.data.data[0].url
            localStorage.setItem("id",JSON.stringify(this.id))
            // this.more=res.data.sub
        })
    },
    down(){
      this.id++
      this.$http.get(`api/song/url?id=${this.id}`).then(res=>{
            console.log(res.data.data[0].url)
            this.box=res.data.data[0].url
            localStorage.setItem("id",JSON.stringify(this.id))
            // this.more=res.data.sub
        })
    }
  },
  created() {
  this.val=JSON.parse(localStorage.getItem("id"))
 this.$http.get(`api/song/url?id=${this.val}`).then(res=>{
            console.log(res)
            this.box=res.data.data[0].url
            // this.more=res.data.sub
        })
 this.$http.get(`api/song/url?id=${this.val}`).then(res=>{
            console.log(res)
            this.box=res.data.data[0].url
            // this.more=res.data.sub
        })
  },
  mounted() {

  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
}
</script>

<style lang='scss' scoped>

</style>