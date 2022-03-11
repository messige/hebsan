<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong href="/"
          ><ion-icon :icon="home"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <br />
        <h2>
          Calendarium Romanum <br />
          ex Decreto Sacrosancti Oecumenici<br />
          Concilii Vaticani II instauratum
        </h2>
        <br />
        <CalendariumFeast />
        <CalendariumFeast
          :startyear="civilYearPlus1"
          :startmonth="firstMonth"
          :startday="firstDay"
        />
        <CalendariumFeast
          :startyear="civilYearPlus2"
          :startmonth="firstMonth"
          :startday="firstDay"
        />
        <CalendariumFeast
          :startyear="civilYearPlus3"
          :startmonth="firstMonth"
          :startday="firstDay"
        />                
        <br />&nbsp;<br />&nbsp;<br />&nbsp;
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonButton, IonContent, IonIcon } from "@ionic/vue";

  import { home } from "ionicons/icons";
  import getYear from "date-fns/getYear";
  import { defineComponent }        from 'vue';
  import CalendariumFeast from "@/components/vue/CalendariumFeast.vue";

  const today = new Date(); //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
  const civilYearPlus1 = getYear(today) + 1;
  const civilYearPlus2 = civilYearPlus1 + 1;
  const civilYearPlus3 = civilYearPlus2 + 1;
  const firstMonth = 0;
  const firstDay = 2;
  export default defineComponent ( {
      name: 'ABCFeasts',
      components: { CalendariumFeast, IonPage, IonHeader, IonToolbar, IonButton, IonContent, IonIcon  } ,
      setup() {
        return  { home ,  civilYearPlus1 ,  civilYearPlus2 ,  civilYearPlus3 , firstMonth , firstDay }
    }
  })
</script>
