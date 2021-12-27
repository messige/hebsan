<template>
  <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title
            >Hebsan
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
      </ion-header>
      <ion-content>
      <div id="container">
        <br />
        <ion-list>
          <ion-item href="/nextFeast">
              <ion-label>
                <h2>
                  {{ useTranslate("massOf", language.abbrev) }} {{ selectDateFormat }}
                  <ion-icon :icon="chevronForward"></ion-icon>
                </h2>
                <ion-note>{{ selectFeast }}</ion-note>
              </ion-label>
          </ion-item>
          <br />
          <ion-item href="/abcFeasts">
              <ion-label>
                <h2>
                  {{ useTranslate("otherSunday", language.abbrev) }}
                  <ion-icon :icon="chevronForward"></ion-icon>
                </h2>
                <ion-note>{{ useTranslate("calendar", language.abbrev) }}</ion-note>
              </ion-label>
          </ion-item>
          <br />
          <ion-item href="/sancta">
              <ion-label>
                <h2>
                  {{ useTranslate("sancta", language.abbrev) }}
                  <ion-icon :icon="chevronForward"></ion-icon>
                </h2>
                <ion-note>{{ useTranslate("sanctaExpla", language.abbrev) }}</ion-note>
              </ion-label>
          </ion-item>
          <br />
          <ion-item href="/about">
              <ion-label>
                <h2>
                  {{ useTranslate("about", language.abbrev) }}
                  <ion-icon :icon="chevronForward"></ion-icon>
                </h2>
                <ion-note>{{ useTranslate("aboutExpla", language.abbrev) }}</ion-note>
              </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import useCalendarService from "../components/ts/calendarService";
import useTranslate from "../components/ts/translate";
import { chevronForward } from "ionicons/icons";
const today = new Date();
const { calendarSelect } = useCalendarService(today);
const selectFeast = calendarSelect.thisFeast;
const selectDateFormat = calendarSelect.thisDateFormat;
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
</script>
