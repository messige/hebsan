<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Hebsan</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-refresher @ionRefresh="doRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      
      <ion-list>
        <MenuItem v-for="menuItem in MenuItems" :key="menuItem.id" :menuItem="menuItem" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
  import MenuItem             from '@/components/MenuItem.vue';
  import { defineComponent }  from 'vue';
  import { getMenuItems }     from '../data/items';

  export default defineComponent ( {
    name: 'Home',
    components: { IonContent, IonHeader, IonList, IonPage, 
                  IonRefresher, IonRefresherContent, IonTitle, IonToolbar, MenuItem } , 
    setup () {
      const doRefresh = (event: CustomEvent) => {
        setTimeout(() => {
        event.detail.complete ( ) ;
        }, 3000 ) ;
      }
      return { MenuItems: getMenuItems ( ) , doRefresh }
    }
  } )
</script>
