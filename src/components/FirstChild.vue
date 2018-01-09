<template>
  <div class="first">
      <h3>this is firstChild </h3>
      <button>{{count}}</button>
  </div>
</template>

<script>
export default {
  name: "FirstChild",
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first {
  border: soild 1px red;
}
</style>
