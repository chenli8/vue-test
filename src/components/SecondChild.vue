<template>
  <div class="second">
       <h3>this is SecondChild </h3>
       <button @click="changeCount">count++</button>
  </div>
</template>

<script>
export default {
  name: "SecondChild",
  data() {
    return {};
  },
  methods: {
    changeCount() {
      // this.$store.commit("add");
      this.$store.dispatch("add");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.second {
  border: soild 1px #ccc;
}
</style>
