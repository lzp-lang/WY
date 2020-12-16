<template>
  <div class='qgtj'>
    <ul>
        <h3>情感调节</h3>
        <li v-for="item in list" :key="item._id">
            <img :src="item.picUrl">
            <p>{{item.name}}</p>
        </li>
    </ul>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
    
  },
  ///playmode/intelligence/list?id=33894312&pid=24381616&sid=36871368
  created() {
     this.$http.get(`api/dj/toplist/pay?limit=9`).then(res=>{
            console.log(res.data.data.list)
            this.list=res.data.data.list
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

<style  scoped>
*{
    margin: 0px;
    padding: 0px;
}
h3{
    margin-bottom: 20px;
}

li{ width: 100px;
     height:100px;
   border: solid 1px aliceblue;
   float: left;
   margin-left: 15px;
   margin-bottom: 20px;
}
li img{
     border-radius:10%;
    width: 100%;
    height: 80%;
    text-align: center;
}
p{
    font-size: 12px;
}
</style>