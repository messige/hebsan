<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong href="/">
          <ion-icon :icon="home"></ion-icon>
        </ion-button>
        &nbsp; &nbsp;
        <ion-button shape="round" size="small" strong href="/Sancta">
          <ion-icon :icon="arrowBackSharp" />
        </ion-button>
        <br />
        <br />
      </ion-toolbar>
    </ion-header>
    <ion-content id="container">
      <p>&nbsp;</p>
      <br />
      <h2>
        {{ feastCurrent.title }} - {{ feastCurrent.titleFr }}
        <br class="smallScreen" />&nbsp;-&nbsp;Ad Competorium
      </h2>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <br />
        <component :is="officeTempusLiturgicus1.iube" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.iubeTR" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <component :is="officeTempusLiturgicus1.fratres" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.fratresTR" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <component :is="arrayOrdine[1].ordine" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="arrayOrdine[1].ordineTR" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
      </template>
      <component :is="arrayOrdine[0].ordine" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="arrayOrdine[0].ordineTR" /> </ion-text
          ></ion-col> </ion-row
      ></ion-grid>
      <component :is="arrayOrdine[2].ordine" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="arrayOrdine[2].ordineTR" /> </ion-text
          ></ion-col> </ion-row
      ></ion-grid>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <component :is="officeTempusLiturgicus1.inAdiutorium" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.inAdiutoriumTR" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <component :is="officeTempusLiturgicus2.inAdiutoriumFin" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus2.inAdiutoriumFinTR" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <br />
        <component :is="officeTempusLiturgicus2.ant" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus2.antTR" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
      </template>
      <p><component :is="objTranslations.ps004" /></p>
      <p><component :is="objTranslations.ps090" /></p>
      <p><component :is="objTranslations.ps133" /></p>
      <component :is="officeTempusLiturgicus2.ant" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="officeTempusLiturgicus2.antTR" /> </ion-text
          ></ion-col> </ion-row
      ></ion-grid>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <p><rubrique>Hymnus</rubrique></p>
        <p><component :is="officeTempusLiturgicus2.hymnus" /></p>
        <p><Capitulum /></p>
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="objTranslations.capitulum" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <p><rubrique>Responsorium breve</rubrique></p>
        <component :is="officeTempusLiturgicus1.responsum" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.responsumTR" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <p><rubrique>Versus</rubrique></p>
        <component :is="officeTempusLiturgicus1.versus" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.versusTR" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
      </template>
      <!-- <p><rubrique>Nunc dimitis</rubrique></p> -->
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <p><component :is="objTranslations.nuncDimittis" /></p>
        <p><Kyrie /></p>
        <p><Pater /></p>
        <p><DominusVobiscum /></p>
        <Oratio />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="objTranslations.oratio" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <p><DominusVobiscum /></p>
      </template>
      <template v-else>
        <p><component :is="objTranslations.nuncDimittis" /></p>
        <p>{{ officeLectio }}</p>
        <rubrique>Secreto</rubrique>
        <p>Pater noster ...</p>
        <rubrique>Aliquantulum altius</rubrique>
        <p><Oratio /></p>
        <rubrique>Et sub silentio concluditur.</rubrique>
        <p><PerDominum /></p>
      </template>
      <component :is="officeTempusLiturgicus1.benedicamus" />
      <br /><br />
      <component :is="officeTempusLiturgicus2.AntMaria" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="officeTempusLiturgicus2.AntMariaTR" /> </ion-text
          ></ion-col> </ion-row
      ></ion-grid>
      <br />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { useRoute } from "vue-router";
import { defineAsyncComponent } from "vue";
import { defineComponent } from "vue";
import { home, arrowBackSharp } from "ionicons/icons";
import Capitulum from "../components/g75Lectio/CapIerCh14V09.vue";
import NuncDimittisSineGloria from "../components/g65Psalmodia/NuncDimittisR13SineGloria.vue";
import Oratio from "../components/g80Oratio/OraHabitationemIstam.vue";
import DominusVobiscum from "../components/g95InOrdineOfficii/DominusVobiscum.vue";
import PerDominum from "../components/g80Oratio/PerDominum.vue";
import Pater from "../components/g95InOrdineOfficii/PaterNosterSilentio.vue";
import Kyrie from "../components/g95InOrdineOfficii/Kyrie.vue";

export default defineComponent({
  name: "Completorium",
  components: {
    Capitulum,
    NuncDimittisSineGloria,
    Oratio,
    DominusVobiscum,
    PerDominum,
    Pater,
    Kyrie,
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
  },
  setup() {
    const route = useRoute();
    const feast = route.params.feast;
    const objLanguage = new String(route.params.language);
    const lowerLang = objLanguage.toLowerCase();
    const arrayFeasts = [
      { title: "Domenica in Palmis", titleFr: "Dimanche des Rameaux - la veille" },
      { title: "Domenica in Palmis", titleFr: "Dimanche des Rameaux" },
      { title: "Hebdomada Sancta Feria II", titleFr: "Lundi Saint" },
      { title: "Hebdomada Sancta Feria III", titleFr: "Mardi Saint" },
      { title: "Hebdomada Sancta Feria IV", titleFr: "Mercredi Saint" },
      { title: "Hebdomada Sancta Feria V", titleFr: "jeudi Saint" },
      { title: "Hebdomada Sancta Feria VI", titleFr: "Vendredi Saint" },
      { title: "Hebdomada Sancta Feria VII", titleFr: "Samedi Saint" },
      { title: "Resurrectio Domini", titleFr: "Dimanche de Pâques" },
    ];
    const feastNum = +feast;
    let i = 0;
    const feastCurrent = arrayFeasts[feastNum];
    const objTranslations = {
      ps004: defineAsyncComponent(
        () => import("../components/g65Psalmodia/" + lowerLang + "/Ps004.vue")
      ),
      ps090: defineAsyncComponent(
        () => import("../components/g65Psalmodia/" + lowerLang + "/Ps090.vue")
      ),
      ps133: defineAsyncComponent(
        () => import("../components/g65Psalmodia/" + lowerLang + "/Ps133.vue")
      ),
      capitulum: defineAsyncComponent(
        () => import("../components/g75Lectio/" + lowerLang + "/CapIerCh14V09.vue")
      ),
      nuncDimittis: defineAsyncComponent(
        () => import("../components/g65Psalmodia/" + lowerLang + "/NuncDimittis.vue")
      ),
      oratio: defineAsyncComponent(
        () => import("../components/g80Oratio/" + lowerLang + "/OraHabitationemIstam.vue")
      ),
    };
    const arrayOrdine = [
      {
        ordine: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/Confitebor.vue")
        ),
        ordineTR: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + lowerLang + "/Confitebor.vue")
        ),
      },
      {
        ordine: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/AdiutoriumNostrum.vue")
        ),
        ordineTR: defineAsyncComponent(
          () =>
            import(
              "../components/g95InOrdineOfficii/" + lowerLang + "/AdiutoriumNostrum.vue"
            )
        ),
      },
      {
        ordine: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/ConverteNos.vue")
        ),
        ordineTR: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + lowerLang + "/ConverteNos.vue")
        ),
      },
    ];
    const arrayTemporumLiturgicorum1 = [
      {
        tempus: "triduum",
        iube: null,
        iubeTR: null,
        fratres: null,
        fratresTR: null,
        inAdiutorium: null,
        inAdiutoriumTR: null,
        responsum: null,
        responsumTR: null,
        versus: null,
        versusTR: null,
        benedicamus: null,
        benedicamusTR: null,
      },
      {
        tempus: "non est triduum",
        iube: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + "IubeDomne.vue")
        ),
        iubeTR: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + lowerLang + "/IubeDomne.vue")
        ),
        fratres: defineAsyncComponent(
          () => import("../components/g75Lectio/" + "Petr1Ch05V08.vue")
        ),
        fratresTR: defineAsyncComponent(
          () => import("../components/g75Lectio/" + lowerLang + "/Petr1Ch05V08.vue")
        ),
        inAdiutorium: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + "InAdiutorium.vue")
        ),
        inAdiutoriumTR: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + lowerLang + "/InAdiutorium.vue")
        ),
        responsum: defineAsyncComponent(
          () => import("../components/g55Responsum/" + "RepInManusTuas.vue")
        ),
        responsumTR: defineAsyncComponent(
          () => import("../components/g55Responsum/" + lowerLang + "/RepInManusTuas.vue")
        ),
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/" + "VerCustodiNos.vue")
        ),
        versusTR: defineAsyncComponent(
          () => import("../components/g85Versus/" + lowerLang + "/VerCustodiNos.vue")
        ),
        benedicamus: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + "BenedicamusDom.vue")
        ),
        benedicamusTR: defineAsyncComponent(
          () =>
            import(
              "../components/g95InOrdineOfficii/" + lowerLang + "/BenedicamusDom.vue"
            )
        ),
      },
    ];
    i = 0;
    if (feastNum < 5 || feastNum > 7) {
      i = 1;
    } /* not in Triduum  */
    const officeTempusLiturgicus1 = arrayTemporumLiturgicorum1[i];
    const arrayTemporumLiturgicorum2 = [
      {
        tempus: "triduum",
        inAdiutoriumFin: null,
        inAdiutoriumFinTR: null,
        ant: null,
        antTR: null,
        hymnus: null,
        AntMaria: null,
        AntMariaTR: null,
      },
      {
        tempus: "quadragesimae",
        inAdiutoriumFin: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + "LausTibi.vue")
        ),
        inAdiutoriumFinTR: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + lowerLang + "/LausTibi.vue")
        ),
        ant: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + "AntMiserereMihi.vue")
        ),
        antTR: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + lowerLang + "/AntMiserereMihi.vue")
        ),
        hymnus: defineAsyncComponent(
          () => import("../components/g60Hymnus/" + "/HymTeLucisAnte.vue")
        ),
        AntMaria: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + "AntAveReginaCaelorum.vue")
        ),
        AntMariaTR: defineAsyncComponent(
          () =>
            import(
              "../components/g50Antiphona/" + lowerLang + "/AntAveReginaCaelorum.vue"
            )
        ),
      },
      {
        tempus: "paschali",
        inAdiutoriumFin: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/Alleluia.vue")
        ),
        inAdiutoriumFinTR: null,
        ant: defineAsyncComponent(
          () =>
            import("../components/g50Antiphona/" + lowerLang + "/AntAlleluiaPasqua.vue")
        ),

        antTR: null,
        hymnus: defineAsyncComponent(
          () => import("../components/g60Hymnus/" + "/HymTeLucisAnte.vue")
        ),
        AntMaria: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + "AntReginaCaeli.vue")
        ),
        AntMariaTR: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + lowerLang + "/AntReginaCaeli.vue")
        ),
      },
    ];
    i = 0;
    if (feastNum < 5 || feastNum == 9) {
      i = 1;
    } // tempus quadragesimae, not in Triduum
    else if (feastNum == 8) {
      i = 2;
    } // tempus paschali
    const officeTempusLiturgicus2 = arrayTemporumLiturgicorum2[i];
    const arrayLectio = [
      { index: "5", lectio: "Christus factus pro nobis obediens usque ad mortem." },
      {
        index: "6",
        lectio:
          "Christus factus pro nobis obediens usque ad mortem, mortem autem crucis.",
      },
    ];
    let officeLectio = "";
    if (feastNum == 5 || feastNum == 6) {
      officeLectio = arrayLectio[feastNum - 5].lectio;
    }
    return {
      feastCurrent,
      officeTempusLiturgicus1,
      officeTempusLiturgicus2,
      officeLectio,
      home,
      arrowBackSharp,
      objTranslations,
      arrayOrdine,
    };
  },
});
</script>
