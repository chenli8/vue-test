<template>
  <div>
   <button @click="changeText">改变值</button>
  </div>
</template>

<script>
import bus from "../bus.js"
export default {
  name: "Test1",
  methods: {
    changeText(){
         bus.$emit("changeText","改变了")
    }
  }
};
</script>

<style>

</style>
