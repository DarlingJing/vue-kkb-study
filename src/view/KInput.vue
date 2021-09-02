<!-- input -->
<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
  inheritAttrs: false,
  mixins: [emitter],
  props:{
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }

  },
  components: {},
  data () {
    return {
    };
  },

  methods: {
    onInput(e){
      this.$emit('input', e.target.value);

      // 触发校验
      this.dispatch('KFormItem', 'validate');
    }
  }
}

</script>
<style scoped>
</style>