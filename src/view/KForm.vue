<!--  -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'KForm',
  provide(){
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
    }
  },
  components: {},
  data () {
    return {
      field: [],
    };
  },

  created () {
    this.$on("addFormHandle", item => {
      this.field.push(item);
    })
  },

  computed: {},

  mounted(){},

  methods: {
    validate(cb){
      let tasks = this.field.map(item => item.validate());
      Promise.all(tasks).then(()=>{
        cb(true);
      }).catch(() => {
        cb(false);
      })
    }
  }
}

</script>
<style scoped>
</style>