<template>
  <ion-page>
    <ion-content id="container">
      <p>&nbsp;</p>
      <br />
      <h2>
        {{ useTranslate("massOf", lang) }} {{ feastDate }}<br class="smallScreen" />
        {{ feast }} - Anno {{ feastAnnoABC }}
      </h2>
      <br />
      <component :is="feastTextTR" :annoABC="feastAnnoABC" />
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
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import useTranslate from "../components/ts/translate";
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
    return { feastTextTR, feast, feastDate, feastAnnoABC, useTranslate, lang, feastIndex };
  },
});
</script>
