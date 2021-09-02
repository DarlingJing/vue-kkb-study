<!-- 显示label -->
<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error" class="error">{{error}}</p>
    {{form.rules[prop]}}
  </div>
</template>

<script>
import Schema from "async-validator";
import emitter from '@/mixins/emitter';

export default {
  inject: ['form'],
  mixins: [emitter],
  componentName: 'KFormItem',
  props:{
    label:{
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  components: {},
  data () {
    return {
      error: ''
    };
  },
  created () {
    
  },

  computed: {},

  mounted(){
    this.$on('validate', () => {
      this.validate();
    })

    if(this.prop){
      this.dispatch('KForm', 'addFormHandle', [this]);
    }
  },

  methods: {
    validate(){
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];
      const schema = new Schema({[this.prop]: rules});
      schema.validate({[this.prop]: value}, err => {
        if(err){
          this.error = err[0].message;
        }else{
          this.error = '';
        }
      })

    },
  }
}

</script>
<style scoped>
  .error{
    color: red;
  }
</style>