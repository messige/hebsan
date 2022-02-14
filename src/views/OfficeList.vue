<template>
  <ion-page>
    <ion-content>
      <div id="container">
      <p>&nbsp;</p>
      <br />
      <h2>{{ titleLA }} - {{ titleTR }}</h2>
      <ion-list>
        <template v-for="officeItem in OfficeItems" :key="officeItem.id">
          <template v-if="officeItem.arrayFeasts[feastID] == 1">
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
        <p>
          <strong>
            <router-link to="/ToniCommunes"
              >Toni Communes - {{ useTranslate("tonCom", lang) }}</router-link
            >
          </strong>
        </p>
      </ion-list>
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { getOffices } from "../data/officesTable";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";
import useTranslate from "../components/ts/translateService";
export default defineComponent({
  name: "OfficeList",
  components: { IonPage, IonContent },
  props: {
    feastID: { type: Number, required: true },
    titleLA: { type: String, required: true },
    titleTR: { type: String, required: true },
  },
  setup() {
    let lang = "fr";
    const language = localStorage.getItem("lang");
    if (language) {
      lang = language;
    }
    const langUpper = lang.toUpperCase();
    return { useTranslate, OfficeItems: getOffices(), chevronForward, lang, langUpper };
  },
});
</script>
