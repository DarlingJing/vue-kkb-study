<!-- Notice组件 -->
<template>
  <div class="notice" v-show="show">
    <div class="notice_content">
      <h3>{{title}}</h3>
      <div class="content">
        {{message}}
      </div>
      <button @click="hideHandle">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    },
  },
  components: {},
  data () {
    return {
      show: false
    };
  },

  created () {},

  computed: {},

  mounted(){},

  methods: {
    showNotice(){
      this.show = true;
    },
    hideHandle(){
      this.show = false;
    }
  }
}

</script>
<style scoped>
  .notice{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
  }
  .notice_content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 20px;
  }
</style>