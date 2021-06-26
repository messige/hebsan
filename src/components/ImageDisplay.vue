<template>
  <p><img :src="imgSource" /></p>
</template>
<script>
  export default {
    props: {
      imgSource: {
        type: String,    
    }
      }
  }
</script>