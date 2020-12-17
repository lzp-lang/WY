<template>
  <div class='bktj'>
      
     <i @click="up">上</i>
     
   <p><img :src="img"/></p>
     <audio :src="box" ref="audio" controls autoplay="autoplay"></audio>
     <!-- <i @click="down">下</i> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
       id:33894312,
       box:[],
       val:"",
       img:""
    };
  },
  computed: {},
  watch: {},
  methods: {
    // async play(id) {
    //   this.songName = ''
    //   this.show = true;
    //   const result = await this.$http.get(`api/song/detail?ids=${id}`)
    //   if(result.status===200){
    //     this.art = result.data.songs[0].ar[0].name;
    //     this.songName = result.data.songs[0].name; 
    //   }
    //   const result1 = await this.$http.get(`api/song/url?id=${id}`)
    //   if(result1.status===200){
    //     this.box = result1.data.data[0].url;
    //     localStorage.setItem("id", JSON.stringify(this.id))
    //   }
    // },
    async up(){
      this.id--
  const result =await this.$http.get(`api/song/url?id=${this.id}`)
            if(result.status===200){
            this.box=result.data.data[0].url
            localStorage.setItem("id",JSON.stringify(this.id))
            }
  const result1= await this.$http.get(`api/song/detail?ids=${this.id}`)
  if(result1.status===200){
    console.log(result1.data.songs[0].al.picUrl)
    this.img=result1.data.songs[0].al.picUrl
  }
            // this.more=res.data.sub
    }
    },
  //   down(){
  //     this.id++
  //     this.$http.get(`api/song/url?id=${this.id}`).then(res=>{
  //           console.log(res.data.data[0].url)
  //           this.box=res.data.data[0].url
  //           localStorage.setItem("id",JSON.stringify(this.id))
  //           // this.more=res.data.sub
  //       })
  //   }
  // },
  created() {
  this.val=JSON.parse(localStorage.getItem("id"))
 this.$http.get(`api/song/url?id=${this.val}`).then(res=>{
            // console.log(res)
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

<style scoped>
p{
  width: 200px;
  height: 200px;
  margin: auto;
}
img{
  width: 100%;
height: 100%;
border-radius:10%;
}
</style>