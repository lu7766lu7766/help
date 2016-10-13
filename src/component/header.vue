<template lang="html">
  <div>
    <div class="header">
      {{ message }} - {{msg}}
    </div>
    <input type="button" value="ya" @click="chgMsg" />
  </div>
</template>

<script>
import Bus from '../bus.js';

export default {
  props:['msg'],
  data () {
    return {
      message: 0
    }
  },
  methods:{
    chgMsg:function(){
      //this.msg = "999";
      this.message++;
      Bus.$emit('chg',this);
    }
  }
}
</script>

<style lang="css">
.header {
  color: pink;
  font-size: 1.4em;
}
</style>