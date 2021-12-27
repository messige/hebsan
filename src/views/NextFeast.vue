<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong href="/"
            ><ion-icon :icon="home"></ion-icon>
        </ion-button>
        <br /><br />
        <ion-title
          >{{ useTranslate("massOf", lang) }} {{ selectDateFormat }}<br class="smallScreen" />
          {{ selectFeast }} - Anno {{ selectAnnoABC }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <br />
        <component :is="selectFeastTextTR" :annoABC="selectAnnoABC" />

        <br /><br /><br /><br /><br /><br />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { home } from "ionicons/icons";
import { defineAsyncComponent } from "vue";
import useTranslate from "../components/ts/translate";
import useCalendarService from "../components/ts/calendarService";
let lang = "fr" ;
const language = localStorage.getItem("lang");
if (language) {lang = language }
const today = new Date(); //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
const { calendarSelect } = useCalendarService(today);
const selectFeast = calendarSelect.thisFeast;
const selectDateFormat = calendarSelect.thisDateFormat;
const selectAnnoABC = calendarSelect.thisAnnoABC;
const selectFeastTextTR = defineAsyncComponent(
  () =>
    import(
      "../components/g400AdMissam/" +
        language +
        "/" +
        calendarSelect.thisFeastIndex +
        ".vue"
    )
);
</script>
