<template>
  <BaseRadio 
    v-for="option in options"
    :key="option.value"
    :label="option.label"
    :value="option.value"
    :name="name"
  />



</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>