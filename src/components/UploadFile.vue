<template>
  <div>
      <!-- <button>上传附件</button> -->
      <input type="file" id='file' class="file" ref='file'>
  </div>
</template>

<script>
export default {
  name: 'UploadFile',
  data(){
   return{

   }
  },
  methods:{
    fileUploader(){
       let input = document.getElementById("file")
       let file = input.files;
    }        
  },
  mounted(){
     this.fileUploader();
  }
}
</script>

<style>
.file{
    width:50px;
    height: 50px;
    border:solid 1px #ccc;
}
</style>
