<template>
  <div class='deng'>
    <van-uploader v-model="fileList" multiple :max-count="2" />
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
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
     
      ],
     
    };
  },
  computed: {},
  watch: {},
  methods: {
      deng(){
        this.$http.get(`api/login/cellphone?phone=${this.phone}&password=${this.password}`).then(res=>{
            console.log(res.data.bindings[0].userId)
            localStorage.setItem("userid",JSON.stringify(res.data.bindings[0].userId))
            localStorage.setItem("img",JSON.stringify(this.fileList[0].url))
            this.$router.push("../mine")
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