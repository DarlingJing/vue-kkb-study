<!--  -->
<template>
  <div @click="clickChild">
    {{msg}}
    <!-- <div>{{userObj}}</div>
    <div>{{nameObj}}</div> -->
  </div>
</template>

<script>
export default {
  props:['msg'],
  components: {},
  data () {
    return {
    };
  },
  // inject: ['userObj', 'nameObj'],
  created () {
  },

  computed: {},

  mounted(){},

  methods: {
    clickChild(){
      this.$emit('parentClickChild', 'aaaa');
    },
  }
}

</script>
<style scoped>
</style>