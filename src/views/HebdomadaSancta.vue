<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong href="/">
          <ion-icon :icon="home"></ion-icon>
        </ion-button>
        <br />
        <br />
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <h2>Hebdomada Sancta</h2>
        <br />
        <template v-for="(thisFeast, feastID) in arrayFeasts" :key="feastID">
          <router-link
            :to="{
              name: 'OfficeList',
              params: {
                feastID: thisFeast.feastID,
                titleLA: thisFeast.titleLA,
                titleTR: thisFeast.titleTR,
              },
            }"
            >{{ thisFeast.titleLA }} - {{ thisFeast.titleTR }}</router-link
          >
          <br />
          <br />
        </template> 
        <p>
          <strong>
            <router-link to="/ToniCommunes"
              >Toni Communes - {{ useTranslate("tonCom", lang) }}</router-link
            >
          </strong>
        </p>
        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { home } from "ionicons/icons";
  import { defineComponent }        from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonButton, IonContent, IonIcon } from "@ionic/vue";
  import { getFeasts } from "../data/feastsTable";
  import useTranslate from "../components/ts/translateService";
  let lang = "fr";
  const language = localStorage.getItem("lang");
  if (language) {
    lang = language;
  }
  const arrayFeasts = getFeasts();
    export default defineComponent ( {
        name: 'ABCFeasts',
        components: { IonPage, IonHeader, IonToolbar, IonButton, IonContent, IonIcon } ,
        setup() {
          return  { home ,  lang, useTranslate, arrayFeasts }
      }
    })
</script>
