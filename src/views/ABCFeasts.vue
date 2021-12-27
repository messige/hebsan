<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong href="/"
          ><ion-icon :icon="home"></ion-icon>
        </ion-button>
      </ion-toolbar>
      <br />
    </ion-header>
    <ion-content>
      <div id="container">
        <ion-title
          >Calendarium Romanum <br class="smallScreen" />
          ex Decreto Sacrosancti Oecumenici Concilii <br class="smallScreen" />
          Vaticani II instauratum</ion-title
        ><br />
        <Calendarium />
        <Calendarium
          :startyear="civilYearPlus1"
          :startmonth="firstMonth"
          :startday="firstDay"
        />
        <Calendarium
          :startyear="civilYearPlus2"
          :startmonth="firstMonth"
          :startday="firstDay"
        />
        <Calendarium
          :startyear="civilYearPlus3"
          :startmonth="firstMonth"
          :startday="firstDay"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { home } from "ionicons/icons";
import getYear from "date-fns/getYear";
import Calendarium from "@/components/Calendarium.vue";

const today = new Date(); //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
const civilYearPlus1 = getYear(today) + 1;
const civilYearPlus2 = civilYearPlus1 + 1;
const civilYearPlus3 = civilYearPlus2 + 1;
const firstMonth = 0;
const firstDay = 2;
</script>
