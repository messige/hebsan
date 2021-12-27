<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Hebsan
          <template v-if="language === 0">
            &nbsp;&nbsp;&nbsp;&nbsp;<ion-button size="small" color="light">FR</ion-button>
            &nbsp;&nbsp;&nbsp;&nbsp;<ion-button size="small" @click="ChangeLang (1)">DE</ion-button>
        </template> 
        <template  v-else>
          &nbsp;&nbsp;&nbsp;&nbsp;<ion-button size="small" color="light">DE</ion-button>
          &nbsp;&nbsp;&nbsp;&nbsp;<ion-button size="small" @click="ChangeLang (0)">FR</ion-button>
        </template>
        </ion-title>        
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <br />{{language}}<br />
        <template v-if="language === 0">
          FR
        </template> 
        <template   v-else-if="language === 1">
          DE
        </template> 
        {{menuItemsTR}} <br /><br /><br /> {{menuItems}}<br /><br /> 
      <ion-list>
        <!-- <MenuItem v-for="( menuItem, menuItemID ) in menuItemsTR" :key="menuItemID" /> -->
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  //import MenuItem             from '@/components/MenuItem.vue';
  import useCalendarService   from "../components/ts/calendarService";
  import { defineComponent }  from 'vue';
  import { provide, ref }     from 'vue'

  export default defineComponent ( {
    name: 'Home',
    components: { IonContent, IonHeader, IonList, IonPage, 
                  IonTitle, IonToolbar } ,
    setup () {
      const language = ref (0) ;
      provide ( 'language', language )  ;
      function ChangeLang ( newLang: number) {
        language.value = newLang ; }
      const today               = new Date ( ) ;                //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
      const { calendarSelect }  = useCalendarService ( today ) ;
      const selectFeast         = calendarSelect.thisFeast ;
      const selectDateFormat    = calendarSelect.thisDateFormat ;
      const menuItems = [
        [ { label: 'Messe du ' + selectDateFormat ,
            explanation: selectFeast ,
            href: '/nextFeast' ,
            menuItemID: 0 } ,
          { label: 'Un autre dimanche ou jour de fête',
            explanation: 'Calendrier pour les trois prochaines années',
            href: '/abcFeasts' ,
            menuItemID: 1 } ,
          { label: 'Semaine Sainte',
            explanation: 'Les Grandes et les Petites Heures de la Semaine Sainte',
            href: '/sancta' ,
            menuItemID: 2 } ,
          { label: 'A propos de l\'application Hebsan',
            explanation: 'About Hebsan',
            href: '/about' ,
            menuItemID: 3 } ] ,

          [ { label: 'DE - Messe du ' + selectDateFormat ,
              explanation: selectFeast ,
              href: '/nextFeast' ,
              menuItemID: 0 } ,
            { label: 'DE - Un autre dimanche ou jour de fête',
              explanation: 'Calendrier pour les trois prochaines années',
              href: '/abcFeasts' ,
              menuItemID: 1 } ,
            { label: 'DE - Semaine Sainte',
              explanation: 'Les Grandes et les Petites Heures de la Semaine Sainte',
              href: '/sancta' ,
              menuItemID: 2 } ,
            { label: 'DE - A propos de l\'application Hebsan',
              explanation: 'About Hebsan',
              href: '/about' ,
              menuItemID: 3 } ] ] ;  
        const menuItemsTR = ref (menuItems [ language.value ] ) ;
      return  {  ChangeLang ,  menuItemsTR , language , menuItems } 
    }
  } )
</script>
