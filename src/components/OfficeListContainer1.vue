<template>
    <div id="container">
        <strong>{{ name }}</strong><p>&nbsp;</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Ad Matutinem</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Ad Laudes</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Ad Tertiam</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Ad Missam</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Ad Sextam</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Ad Nonam</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Ad Vesperas</a></p>
        <p><a href="Completor">Ad Completorium</a></p>
    </div>
</template>

<script lang="ts">

export default {
   name: 'OfficeListContainer',
   props: {
      name: String
  }
}
</script>

<style scoped>
#container {

  position: absolute;
  left: 10%;
  right: 0;
  top: 35%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 20;
}

#container a {
  text-decoration: none;
}
</style>