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
    <ion-content  id="container">
        <ion-title>Hebdomada Sancta</ion-title>
        <br />
        <template v-for="(thisFeast, feastID) in arrayFeasts" :key="feastID">
          <router-link
            :to="{
              name: 'OfficeList',
              params: {
                feastID: thisFeast.feastID,
                title: thisFeast.title,
                titleTR: thisFeast.titleTR,
              },
            }"
            >{{ thisFeast.title }} - {{ thisFeast.titleTR }}</router-link
          >
          <br />
          <br />
        </template> 
        <p>
          <strong>
            <router-link to="/toni"
              >Toni Communes - {{ useTranslate("tonCom", lang) }}</router-link
            >
          </strong>
        </p>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { home } from "ionicons/icons";
import { getFeasts } from "../data/feasts";
import useTranslate from "../components/ts/translate";
let lang = "fr";
const language = localStorage.getItem("lang");
if (language) {
  lang = language;
}
const arrayFeasts = getFeasts();
</script>
