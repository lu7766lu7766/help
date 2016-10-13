<template lang="html">
  <div>
    <div class="header">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: "Helo, I'm header add by vue!!"
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