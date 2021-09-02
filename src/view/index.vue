<!--  -->
<template>
  <div>
    <!-- <APage msg="message from grandpa" @parentClickChild="clickChild"></APage>
    <BPage></BPage>
    <button @click="changeHandle()">点击</button> -->
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" placeholder="请输入密码"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from './KInput'
import KFormItem from './KFormItem'
import KForm from './KForm'
import Notice from '../components/Notice'
import create from '../utils/create'

export default {
  components: {
    KInput,
    KFormItem,
    KForm,
    Notice
    // APage,
    // BPage
  },
  data () {
    return {
      model:{
        username:'',
        password: ''
      },
      rules:{
        username: [{required: true, message: '请输入用户名'}],
        password: [{required: true, message: '请输入密码'}],
      }
      // user:{name:'luojing',age:28}
    };
  },
  // provide(){
  //   return {
  //     userObj: this.user
  //   }
  // },

  created () {

  },

  computed: {},

  mounted(){},

  methods: {
    login(){
      this.$refs.loginForm.validate(isValid => {
        create(Notice, {
          title: '提示',
          message: '提示内容',
          duration: 3000
        }).showNotice()
        // if(isValid){

        // }else{
        //   console.log('失败');
        // }
      })
    }
  }
}

</script>
<style scoped>
</style>