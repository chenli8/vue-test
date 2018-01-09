<template>
  <div class="hello">
       <!-- <slot name='header'></slot>
       <h3>this is parent 11111</h3>
       <FirstChild/>
       <SecondChild/> -->
       
  </div>
</template>

<script>
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{ 
    FirstChild,
    SecondChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
