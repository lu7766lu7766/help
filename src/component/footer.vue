<template lang="html">
    <div class="footer">
        {{ message }}
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: "I'm footer hello'654",
    }
  },
}
</script>

<style lang="css">
.footer {
  background-color:black;
  color: #ff0;
  font-size: 1.4em;
}
</style>