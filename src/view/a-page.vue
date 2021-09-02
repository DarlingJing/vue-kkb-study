<!--  -->
<template>
  <div>
    <div>{{name}}</div>
    <Child v-bind="$attrs" v-on="$listeners"></Child>
    <button @click="changeHandle()">a-page点击</button>
  </div>
</template>

<script>
import bus from '../utils/bus'
import Child from './child'
export default {
  components: {
    Child
  },
  data () {
    return {
      name:'',
      company:{name:'武汉科技有限公司'},
    };
  },
  provide(){
    return {
      nameObj: this.company
    }
  },
  created () {
  },

  computed: {},

  mounted(){},

  methods: {
    changeHandle(){
    }
  }
}

</script>
<style scoped>
</style>