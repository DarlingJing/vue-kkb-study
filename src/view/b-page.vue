<!--  -->
<template>
  <div>
    <div @click="clickDo()">点击</div>
  </div>
</template>

<script>
import bus from '../utils/bus'
export default {
  components: {},
  data () {
    return {
      count: 0,
    };
  },

  created () {},

  computed: {},

  mounted(){},

  methods: {
    clickDo(){
      this.count += 1;
      bus.$emit('message', this.count);
    }
  }
}

</script>
<style scoped>
</style>