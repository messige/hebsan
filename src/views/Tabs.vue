<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar>
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="home" />
            <ion-label>Domenica</ion-label>
          </ion-tab-button>
            
          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="calendar" />
            <ion-label>Calendarium</ion-label>
          </ion-tab-button>
          
          <ion-tab-button tab="tab3" href="/tabs/tab3">
             <ion-icon :icon="addCircle" />
            <ion-label>Hebdomada Sancta</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab4" href="/tabs/tab4">
            <ion-icon :icon="informationCircle" />
            <ion-label>About</ion-label>
          </ion-tab-button>          
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonContent, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { calendar, informationCircle, addCircle , eye , home } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup () {
    return { calendar , informationCircle , addCircle , eye , home }
  }
}
</script>
