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
        {{ useTranslate("massOf", lang) }} {{ feastDate }}<br class="smallScreen" />
        {{ feast }} - Anno {{ feastAnnoABC }}
      </h2>
      <br />
      <component :is="feastTextTR" :annoABC="feastAnnoABC" />
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
    </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonFooter,
  IonButton,
  IonIcon,
  IonBackButton,
} from "@ionic/vue";
import { home } from "ionicons/icons";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import useTranslate from "../components/ts/translateService";
export default defineComponent({
  name: "PiecesForAFeast",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonFooter,
    IonButton,
    IonIcon,
    IonBackButton,
  },
  setup() {
    const route = useRoute();
    const feastIndex = route.params.feastIndex;
    const feast = route.params.feast;
    const feastDate = route.params.feastDate;
    const feastAnnoABC = route.params.feastAnnoABC;
    let lang = "fr";
    const language = localStorage.getItem("lang");
    if (language) {
      lang = language;
    }
    let feastTextTR = defineAsyncComponent(
      () => import("@/components/g400AdMissam/fr/" + feastIndex + ".vue")
    );
    if (lang === "de") {
      feastTextTR = defineAsyncComponent(
        () => import("@/components/g400AdMissam/de/" + feastIndex + ".vue")
      );
    }
    return {
      feastTextTR,
      feast,
      feastDate,
      feastAnnoABC,
      useTranslate,
      lang,
      home
    };
  },
});
</script>
