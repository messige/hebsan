<template>
    <div id="container">
        <strong>{{ name }}</strong><p>&nbsp;</p>
        <p><a href="OfficeList">Domenica in Palmis</a></p>
        <p><a href="OfficeList">Feria II - Lundi  Saint</a></p>
        <p><a href="OfficeList">Feria III -Mardi Saint</a></p>
        <p><a href="OfficeList">Feria IV - Mercredi Saint</a></p>
        <p><a href="OfficeList">Feria V In Coena Domini - Jeudi Saint</a></p>
        <p><a href="OfficeList">Feria VI In Parasceve - Vendredi Saint</a></p>
        <p><a href="OfficeList">Sabbato Sancto - Samedi Saint</a></p>
        <p><a href="OfficeList">Domenica - In Resurectione Domini</a></p>
    </div>
</template>

<script lang="ts">

export default {
    name: 'HebSanContainer',
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