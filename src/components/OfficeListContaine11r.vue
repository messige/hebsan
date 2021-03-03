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