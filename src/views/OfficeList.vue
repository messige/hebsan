<template>
  <ion-page>
    <ion-content id="container">
      <p>&nbsp;</p>
      <br />
      <ion-title>{{ title }} - {{ titleTR }}</ion-title>
      <ion-list>
        <template v-for="officeItem in OfficeItems" :key="officeItem.id">
          <template v-if="officeItem.feasts[feastID] == 1">
            <ion-item>
              <router-link
                :to="{
                  name: officeItem.linkTo,
                  params: { feast: feastID, office: officeItem.linkParams },
                }"
              >
                <ion-label class="ion-text-wrap">
                  <h2>
                    {{ officeItem.officeName }}
                    <ion-icon :icon="chevronForward"></ion-icon>
                  </h2>
                </ion-label>
              </router-link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <router-link
                :to="{
                  name: officeItem.linkToTR,
                  params: { feast: feastID, office: officeItem.linkParams, language: lang },
                }"
              >
                <ion-label>
                  <h2>{{ langUpper }} <ion-icon :icon="chevronForward"></ion-icon></h2>
                </ion-label>
              </router-link>  
            </ion-item>
          </template>
        </template>
      </ion-list>
      <ion-list>
        <routerLink :to="{ name: 'Toni' }">
          <ion-label class="ion-text-wrap">
            <h2>
              Toni Communes - Tons communs <ion-icon :icon="chevronForward"></ion-icon>
            </h2>
          </ion-label>
        </routerLink>
      </ion-list>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonTitle } from "@ionic/vue";
import { getOffices } from "../data/offices";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";
export default defineComponent({
  name: "OfficeList",
  components: { IonPage, IonContent, IonTitle },
  props: {
    feastID: { type: Number, required: true },
    title: { type: String, required: true },
    titleTR: { type: String, required: true },
  },
  setup() {
    let lang = "fr";
    const language = localStorage.getItem("lang");
    if (language) {
      lang = language;
    }
    const langUpper = lang.toUpperCase();
    return { OfficeItems: getOffices(), chevronForward, lang, langUpper };
  },
});
</script>
