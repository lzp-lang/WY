<template>
  <div class='bkfl'>
    <div class="one">
    <dt><van-icon name="like-o" size="35px" color="red" /><dl>情感调节</dl></dt>
    <dt><van-icon name="gift-card" size="35px" color="red"/><dl>情感调节</dl></dt>
    <dt><van-icon name="good-job" size="35px" color="red"/><dl>情感调节</dl></dt>
     <dt><van-icon name="like-o" size="35px"  color="red"/><dl>情感调节</dl></dt>
    <dt><van-icon name="gift-card" size="35px" color="red" /><dl>情感调节</dl></dt>
    <dt><van-icon name="good-job" size="35px" color="red"/><dl>情感调节</dl></dt>
    <dt><van-icon name="like-o" size="35px" color="red" /><dl>情感调节</dl></dt>
    <dt><van-icon name="gift-card" size="35px" color="red" /><dl>情感调节</dl></dt>
    <dt><van-icon name="good-job" size="35px" color="red"/><dl>情感调节</dl></dt>
    <dt><van-icon name="like-o" size="35px" color="red"/><dl>情感调节</dl></dt>
  </div>
  <div class="love">
     <qgtj></qgtj>
  </div>
  </div>
</template>

<script>
import qgtj from "../qgtj/qgtj"
import Qgtj from '../qgtj/qgtj.vue';
export default {
  data() {
    return {
    
    };
  },
  computed: {
    qgtj,
  },
  watch: {},
  methods: {

  },
  created() {

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
  components: {Qgtj},
}
</script>

<style scoped>
*{
  margin: 5;
  padding: 5;
}
 .one{
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
 }

dt{
  text-align: center;
}
dl{
  text-align: center;
}
</style>