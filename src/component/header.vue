<template lang="html">
  <div>
    <div class="header">
      {{ message }} - {{ msg }} - {{ count }} - {{ doubleCount }}
      I'm Header Hi~~~
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
      message: 0,
    }
  },
  methods:{
      chgMsg:function(){ 
      //this.msg = "999";
          this.message++;
          Bus.$emit('chg',this);
      }
  },
  computed: {
	  count () {
		  return this.$store.state.a.count
	  },
      doubleCount () {
        //    console.log(this.$store.getters.doubleCount);
        //    console.log(this.$store.getters.rootDoubleCount);
		  return this.$store.getters.doubleCount
	  }
  } 
}
</script>

<style lang="css">
.header {
    background-color:black;
    color: pink;
    font-size: 1.4em;
}
</style>