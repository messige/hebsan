<template>
  <button @click="language = language === 0 ? 1 : 0">
    language is: {{ language }}
  </button>
  <ion-list>
    <template v-for="( menuItemTR , menuItemID ) in menuItems [language]" :key=" menuItemID" >
      <ion-item v-if="menuItemTR" :routerLink="menuItemTR.href" :detail="false" class="list-item">
        <ion-label class="ion-text-wrap">
          <h2>{{ menuItemTR.label }} <ion-icon :icon="chevronForward"></ion-icon></h2>
          <ion-note>{{ menuItemTR.explanation }}</ion-note>
        </ion-label>
      </ion-item>
    </template>
  </ion-list>
</template>

<script setup>
import { ref } from 'vue'
import useCalendarService       from "../components/ts/calendarService";
const language = ref(0)
      const today               = new Date ( ) ;  
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
                menuItemID: 3 } ]  ,
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
</script>