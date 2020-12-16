<template>
  <div class='deng'>
    <van-form>
  <van-field
  
    v-model="phone"
    name="手机号"
    label="手机号"
    placeholder="手机号"
    :rules="[{ required: true, message: '手机号' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" @click="deng">
      登录
    </van-button>
  </div>
</van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
     phone: '',
      password: '',
    };
  },
  computed: {},
  watch: {},
  methods: {
      deng(){
        this.$http.get(`api/login/cellphone?phone=${this.phone}&password=${this.password}`).then(res=>{
            console.log(res)
            this.$router.push("../views/boke/index")
        }) 
      }
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
  components: {},
}
</script>

<style lang='scss' scoped>

</style>