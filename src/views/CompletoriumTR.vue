<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button shape="round" size="small" strong href="/">
          <ion-icon :icon="home"></ion-icon>
        </ion-button>
        &nbsp; &nbsp;
        <ion-button shape="round" size="small" strong href="/HebdomadaSancta">
          <ion-icon :icon="arrowBackSharp" />
        </ion-button>
        <br />
        <br />
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
      <h2>
        {{ feastCurrent.title }} <br />{{ feastCurrent.titleTr }}
         <br />Ad Competorium
      </h2>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <br />
        <component :is="officeTempusLiturgicus1.iube" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.iubeTr" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <component :is="officeTempusLiturgicus1.fratres" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.fratresTr" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <component :is="arrayOrdine[0].ordine" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="arrayOrdine[0].ordineTr" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
      </template>
      <component :is="arrayOrdine[1].ordine" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="arrayOrdine[1].ordineTr" /> </ion-text
          ></ion-col> </ion-row
      ></ion-grid>
      <component :is="arrayOrdine[2].ordine" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="arrayOrdine[2].ordineTr" /> </ion-text
          ></ion-col> </ion-row
      ></ion-grid>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <component :is="officeTempusLiturgicus1.inAdiutorium" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.inAdiutoriumTr" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <component :is="officeTempusLiturgicus2.inAdiutoriumFin" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus2.inAdiutoriumFinTr" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <br />
        <component :is="officeTempusLiturgicus2.antLA" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus2.antTr" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
      </template>
      <p><component :is="objTranslations.PsTr004" /></p>
      <p><component :is="objTranslations.PsTr090" /></p>
      <p><component :is="objTranslations.PsTr133" /></p>
      <component :is="officeTempusLiturgicus2.antLA" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="officeTempusLiturgicus2.antTr" /> </ion-text
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
                <component :is="officeTempusLiturgicus1.responsumTr" /> </ion-text
            ></ion-col> </ion-row
        ></ion-grid>
        <p><rubrique>Versus</rubrique></p>
        <component :is="officeTempusLiturgicus1.versus" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeTempusLiturgicus1.versusTr" /> </ion-text
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
              <component :is="officeTempusLiturgicus2.AntMariaTr" /> </ion-text
          ></ion-col> </ion-row
      ></ion-grid>
      <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
      </div>
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
import { getFeast } from "../data/feastsTable";
import Capitulum from "../components/g75Lectio/la/CapIerCh14V09.vue";
import NuncDimittisSineGloria from "../components/g65Psalmodia/la/NuncDimittisR13SineGloria.vue";
import Oratio from "../components/g80Oratio/la/OraHabitationemIstam.vue";
import DominusVobiscum from "../components/g95InOrdineOfficii/la/DominusVobiscum.vue";
import PerDominum from "../components/g80Oratio/la/PerDominum.vue";
import Pater from "../components/g95InOrdineOfficii/la/PaterNosterSilentio.vue";
import Kyrie from "../components/g95InOrdineOfficii/la/KyrieEleison.vue";

export default defineComponent({
  name: "CompletoriumTr",
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
    const feastNum = +feast;
    let i = 0;
    const feastCurrent = getFeast(feastNum);
    const objTranslations = {
      PsTr004: defineAsyncComponent(
        () => import("../components/g65Psalmodia/" + lowerLang + "/PsTr004.vue")
      ),
      PsTr090: defineAsyncComponent(
        () => import("../components/g65Psalmodia/" + lowerLang + "/PsTr090.vue")
      ),
      PsTr133: defineAsyncComponent(
        () => import("../components/g65Psalmodia/" + lowerLang + "/PsTr133.vue")
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
          () => import("../components/g95InOrdineOfficii/la/ConfiteborDeo.vue")
        ),
        ordineTr: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + lowerLang + "/ConfiteborDeo.vue")
        ),
      },
      {
        ordine: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/MisereaturNostri.vue")
        ),
        ordineTr: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + lowerLang + "/MisereaturNostri.vue")
        ),
      },
      {
        ordine: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/AdiutoriumNostrum.vue")
        ),
        ordineTr: defineAsyncComponent(
          () =>
            import(
              "../components/g95InOrdineOfficii/" + lowerLang + "/AdiutoriumNostrum.vue"
            )
        ),
      },
      {
        ordine: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/ConverteNos.vue")
        ),
        ordineTr: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + lowerLang + "/ConverteNos.vue")
        ),
      },
    ];
    const arrayTemporumLiturgicorum1 = [
      {
        tempus: "triduum",
        iube: null,
        iubeTr: null,
        fratres: null,
        fratresTr: null,
        inAdiutorium: null,
        inAdiutoriumTr: null,
        responsum: null,
        responsumTr: null,
        versus: null,
        versusTr: null,
        benedicamus: null,
        benedicamusTr: null,
      },
      {
        tempus: "non est triduum",
        iube: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/" + "IubeDomne.vue")
        ),
        iubeTr: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + lowerLang + "/IubeDomne.vue")
        ),
        fratres: defineAsyncComponent(
          () => import("../components/g75Lectio/la/" + "Petr1Ch05V08.vue")
        ),
        fratresTr: defineAsyncComponent(
          () => import("../components/g75Lectio/" + lowerLang + "/Petr1Ch05V08.vue")
        ),
        inAdiutorium: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/" + "InAdiutorium.vue")
        ),
        inAdiutoriumTr: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + lowerLang + "/InAdiutorium.vue")
        ),
        responsum: defineAsyncComponent(
          () => import("../components/g55Responsum/" + "RepInManusTuas.vue")
        ),
        responsumTr: defineAsyncComponent(
          () => import("../components/g55Responsum/" + lowerLang + "/RepInManusTuas.vue")
        ),
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/la/" + "VersCustodiNos.vue")
        ),
        versusTr: defineAsyncComponent(
          () => import("../components/g85Versus/" + lowerLang + "/VerCustodiNos.vue")
        ),
        benedicamus: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/" + "BenedicamusDom.vue")
        ),
        benedicamusTr: defineAsyncComponent(
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
        inAdiutoriumFinTr: null,
        antLA: null,
        antTr: null,
        hymnus: null,
        AntMaria: null,
        AntMariaTr: null,
      },
      {
        tempus: "quadragesimae",
        inAdiutoriumFin: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/" + "LausTibi.vue")
        ),
        inAdiutoriumFinTr: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + lowerLang + "/LausTibi.vue")
        ),
        antLA: defineAsyncComponent(
          () => import("../components/g50Antiphona/la/" + "AntMiserereMihi.vue")
        ),
        antTr: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + lowerLang + "/AntMiserereMihi.vue")
        ),
        hymnus: defineAsyncComponent(
          () => import("../components/g60Hymnus/" + "/HymTeLucisAnte.vue")
        ),
        AntMaria: defineAsyncComponent(
          () => import("../components/g50Antiphona/la/" + "AntAveReginaCaelorum.vue")
        ),
        AntMariaTr: defineAsyncComponent(
          () =>
            import(
              "../components/g50Antiphona/" + lowerLang + "/AntAveReginaCaelorum.vue"
            )
        ),
      },
      {
        tempus: "paschali",
        inAdiutoriumFin: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/AlleluiaWord.vue")
        ),
        inAdiutoriumFinTr: null,
        antLA: defineAsyncComponent(
          () =>
            import("../components/g50Antiphona/" + lowerLang + "/AntAlleluiaPasqua.vue")
        ),

        antTr: null,
        hymnus: defineAsyncComponent(
          () => import("../components/g60Hymnus/" + "/HymTeLucisAnte.vue")
        ),
        AntMaria: defineAsyncComponent(
          () => import("../components/g50Antiphona/la/" + "AntReginaCaeli.vue")
        ),
        AntMariaTr: defineAsyncComponent(
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
