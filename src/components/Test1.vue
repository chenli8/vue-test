<template>
  <div>
    {{text}}
  </div>
</template>

<script>
import bus from "../bus.js"
export default {
  name: "Test2",
  data(){
    return{
       text:"this is Text1"
    }
  },
  created () {
    bus.$on('changeText', content =>{
       debugger
       this.text=content
    })
  }
};
</script>
  
<style>

</style>
