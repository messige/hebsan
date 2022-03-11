<template>
  <ion-page>
      <ion-header :translucent="true">
      </ion-header>
      <ion-content>
      <div id="container">
        <ion-toolbar>
          <ion-title
            ><ion-button size="small" color="light" disabled fill="solid"
                >Hebsan</ion-button
              >
            <template v-if="language.abbrev == 'fr'">
              &nbsp;&nbsp;&nbsp;&nbsp;<ion-button size="small" color="light"
                >FR</ion-button
              >
              &nbsp;&nbsp;&nbsp;&nbsp;<ion-button size="small" @click="setLang('de')"
                >DE</ion-button
              >
            </template>
            <template v-else>
              &nbsp;&nbsp;&nbsp;&nbsp;<ion-button size="small" color="light"
                >DE</ion-button
              >
              &nbsp;&nbsp;&nbsp;&nbsp;<ion-button size="small" @click="setLang('fr')"
                >FR</ion-button
              >
            </template>
          </ion-title>
        </ion-toolbar>
        <br />
         <router-link to="/ABCFeasts">
            {{ useTranslate("calendar", language.abbrev) }}
            &nbsp;<ion-icon :icon="chevronForward"></ion-icon>
          </router-link>
          <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;
          <ion-note>{{ useTranslate("calendarExpla", language.abbrev) }}</ion-note>

          <br /><br /><br />
          <router-link to="/HebdomadaSancta">
            {{ useTranslate("sancta", language.abbrev) }}
            &nbsp;<ion-icon :icon="chevronForward"></ion-icon>
          </router-link>
          <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;
          <ion-note>{{ useTranslate("sanctaExpla", language.abbrev) }}</ion-note>
          <br /><br /><br /><br />
          <router-link to="/AboutPage">
            {{ useTranslate("about", language.abbrev) }}
             &nbsp;<ion-icon :icon="chevronForward"></ion-icon>
          </router-link>
          <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;
          <ion-note>{{ useTranslate("aboutExpla", language.abbrev) }}</ion-note>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonTitle, IonToolbar, IonButton, IonContent,IonNote } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";
import useTranslate from "../components/ts/translateService";
import { reactive } from "vue";
export default defineComponent({
  name: "HomePage",
  components: { IonPage, IonHeader, IonTitle, IonToolbar, IonButton, IonContent, IonNote } ,
  setup() {
    const language = reactive({
        abbrev: "fr",
    });

    //localStorage.removeItem("lang") ;

    function setLang(target: string): void {
      localStorage.setItem("lang", target);
      language.abbrev = target;
    }
    const getLanguage = localStorage.getItem("lang");
    if (getLanguage) {
      language.abbrev = getLanguage;
    } else {
      localStorage.setItem("lang", "fr");
    }
    return { useTranslate, chevronForward, setLang, language };
  }
});
</script>
