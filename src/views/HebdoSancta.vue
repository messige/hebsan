<template>
    <template v-for="(thisFeast, feastID) in arrayFeasts" :key="feastID">
        <router-link :to="{ name: 'OfficeList', 
            params: { feast: thisFeast.feastID }}">
            {{thisFeast.title}} - {{thisFeast.titleFr}} - {{thisFeast.feastID}}
        </router-link>
        <br /> <br /> 
    </template>      
    <p><strong>
        <router-link :to="{ name: 'Toni'}">Toni Communes - Tons communs</router-link>
    </strong></p>
</template>

<script lang="ts"> 
  import { defineComponent }  from 'vue';
  

  export default defineComponent ( {
    name: 'Tab3',
    setup() {
      let arrayFeasts = [
        {   feastID : '9' ,
            title   : 'Domenica in Palmis',
            titleFr : 'Dimanche des Rameaux - la veille' } ,
        {   feastID : '1' ,
            title   : 'Domenica in Palmis', 
            titleFr : 'Dimanche des Rameaux' } ,
        {   feastID : '2' ,
            title   : 'Hebdomada Sancta Feria II' , 
            titleFr : 'Lundi Saint' } , 
        {   feastID : '3' ,
            title   : 'Hebdomada Sancta Feria III',
            titleFr : 'Mardi Saint' } , 
        {   feastID : '4' ,
            title   : 'Hebdomada Sancta Feria IV',
            titleFr : 'Mercredi Saint' } , 
        {   feastID : '5' ,
            title   : 'Hebdomada Sancta Feria V',
            titleFr : 'jeudi Saint' } ,
        {   feastID : '6' ,
            title   : 'Hebdomada Sancta Feria VI',
            titleFr : 'Vendredi Saint' } ,             
        {   feastID : '7' ,
            title   : 'Hebdomada Sancta Feria VII',
            titleFr : 'Samedi Saint' } ,
        {   feastID : '8' ,
            title   : 'Resurrectio Domini',
            titleFr : 'Dimanche de Pâques' } ] ;
      return { arrayFeasts } ;
    }
  } )
</script>
<style>
@import '../components/css/officii.css';
</style>