<template>
  <ion-page>
    <ion-content>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title
            >Hebsan - {{ language.abbrev }}
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
      <div id="container">
        <br />
        <ion-list>
          <ion-item>
            <router-link :to="{ name: 'NextFeast' }">
              {{ translate("massOf", language.abbrev) }}
              {{ selectDateFormat }}</router-link
            ><br />
            {{ selectFeast }}
          </ion-item>
          <ion-item>
            <router-link :to="{ name: 'ABCFeasts' }">
              {{ translate("otherSunday", language.abbrev) }}</router-link
            ><br />
            {{ translate("calendar", language.abbrev) }}
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import useCalendarService from "../components/ts/calendarService";

// import { chevronForward }   from 'ionicons/icons';
const today = new Date();
const { calendarSelect } = useCalendarService(today);
const selectFeast = calendarSelect.thisFeast;
const selectDateFormat = calendarSelect.thisDateFormat;
/* const menuItems = [
  [
    {
      label: "Messe du " + selectDateFormat,
      explanation: selectFeast,
      href: "/nextFeast",
      name: "NextFeast",
      menuItemID: 0,
    },
    {
      label: "Un autre dimanche ou jour de fête",
      explanation: "Calendrier pour les trois prochaines années",
      href: "/abcFeasts",
      name: "ABCFeasts",
      menuItemID: 1,
    },
    {
      label: "Semaine Sainte",
      explanation: "Les Grandes et les Petites Heures de la Semaine Sainte",
      href: "/sancta",
      name: "Sancta",
      menuItemID: 2,
    },
    {
      label: "A propos de l'application Hebsan",
      explanation: "About Hebsan",
      href: "/about",
      name: "About",
      menuItemID: 3,
    },
  ],
  [
    {
      label: "DE - Messe du " + selectDateFormat,
      explanation: selectFeast,
      href: "/nextFeast",
      name: "NextFeast",
      menuItemID: 10,
    },
    {
      label: "DE - Un autre dimanche ou jour de fête",
      explanation: "Calendrier pour les trois prochaines années",
      href: "/abcFeasts",
      name: "ABCFeasts",
      menuItemID: 11,
    },
    {
      label: "DE - Semaine Sainte",
      explanation: "Les Grandes et les Petites Heures de la Semaine Sainte",
      href: "/sancta",
      name: "Sancta",
      menuItemID: 12,
    },
    {
      label: "DE - A propos de l'application Hebsan",
      explanation: "About Hebsan",
      href: "/about",
      name: "About",
      menuItemID: 13,
    },
  ],
]; */
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

function translate(term: string, lang: string) {
  const translatioEntries = ["masseOf", "ohterSunday", "calendar", "inPalmis"];
  const translation = [
    {
      fr: "Messe du ",
      de: "DE -Messe du",
    },
    {
      fr: "Un autre dimanche ou jour de fête",
      de: "DE - Un autre dimanche ou jour de fête",
    },
    {
      fr: "Calendrier pour les trois prochaines années",
      de: "DE - Calendrier pour les trois prochaines années",
    },
      {
      fr: "Dimanche des Rameaux - la veille",
      de: "DE - Dimanche des Rameaux - la veille",
    },
  ];
  const indexOfTerm = translatioEntries.indexOf(term);
  if (lang === "de") return translation[indexOfTerm].de;
  else return translation[indexOfTerm].fr;
}
</script>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button
          @click="$router.push({ name: 'OfficeList', params: { feast: feast }})">
          <ion-icon :icon="arrowBackSharp" />
        </ion-button>
      </ion-toolbar> 
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>      
    </ion-footer>  