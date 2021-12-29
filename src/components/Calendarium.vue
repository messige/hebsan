<template>
  <ion-grid>
    <template v-for="(thisFeast, index) in calendarFrom" :key="index">
      <ion-row>
        <ion-col size-lg="2" size-md="3" size-sm="4">
          {{ thisFeast.thisDateWeekDay }}
        </ion-col>
        <ion-col size-lg="2" size-md="3" size-sm="4">
          {{ thisFeast.thisDateFormat }}
        </ion-col>
        <ion-col size-lg="5" size-md="9" size-sm="8">
          <router-link
            :to="{
              name: 'PiecesForAFeast',
              params: {
                feastIndex: thisFeast.thisFeastIndex,
                feast: thisFeast.thisFeast,
                feastDate: thisFeast.thisDateFormat,
                feastAnnoABC: thisFeast.thisAnnoABC,
              },
            }"
          >
            {{ thisFeast.thisFeast }} <br class="smallScreen" /><strong>{{
              thisFeast.thisAnnoABCDisplay
            }}</strong>
          </router-link>
        </ion-col>
      </ion-row>
    </template>
  </ion-grid>
</template>

<script lang="ts">
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent } from "vue";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import getDate from "date-fns/getDate";
import useCalendarService from "../components/ts/calendarService";
export default defineComponent({
  name: "Calendarium",
  components: { IonGrid, IonRow, IonCol },
  props: {
    startyear: { type: Number, default: getYear(new Date()) },
    startmonth: { type: Number, default: getMonth(new Date()) },
    startday: { type: Number, default: getDate(new Date()) },
  },
  setup(props) {
    const actualDate = new Date(props.startyear, props.startmonth, props.startday); //   () is Now ; (2022, 11, 23) is 23/12/2022 !!!!
    const { calendarFrom } = useCalendarService(actualDate);
    return { calendarFrom };
  },
});
</script>
