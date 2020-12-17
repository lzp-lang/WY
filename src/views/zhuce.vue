<template>
  <div class='zhuce'>
      <van-form>
          <van-field
    v-model="val"
    name="昵称"
    label="昵称"
    placeholder="昵称"
    :rules="[{ required: true, message: '昵称' }]"
  />
  <van-field
   @blur="yphone"
    v-model="phone"
    name="手机号"
    label="手机号"
    placeholder="手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
   <van-field
    @blur="song"
    v-model="yanzheng"
    name="验证码"
    label="验证码"
    placeholder="验证码"
    :rules="[{ required: true, message: '请填验证码' }]"
  />
  <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="fa">
  发送验证码
</van-button>
</van-form>
<button @click="zhuce">注册</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
     phone: '',
      password: '',
      yanzheng:'',
      val:''
    };
  },
  computed: {},
  watch: {},
   methods: {
       zhuce(){
          this.$http.get(`api/register/cellphone?phone=${this.phone}&password=${this.password}&captcha=${this.yanzheng}&nickname=${this.val}`).then(res=>{
            console.log(res)
        })
       },
       yphone(){
       this.$http.get(`api/cellphone/existence/check?phone=${this.phone}`).then(res=>{
            console.log(res)
        })
       },
       song(){
          this.$http.get(`api/captcha/verify?phone=${this.phone}&captcha=${this.yanzheng}`).then(res=>{
            console.log(res)
            this.$router.push("./deng")
        }) 
       },
    fa(){
        this.$http.get(`api/captcha/sent?phone=${this.phone}`).then(res=>{
            console.log(res)
        })
    }, 
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