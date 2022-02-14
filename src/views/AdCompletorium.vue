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
        {{ feastCurrent.title }}<br />{{ feastCurrent.titleTR }}
         <br />Ad Competorium
      </h2>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <br />
        <p><ImageDisplay :imgSource="officeTempusLiturgicus1.iube" /></p>
        <p><ImageDisplay :imgSource="officeTempusLiturgicus1.fratres" /></p>
        <p><img src="../assets/g95InOrdineOfficii/AdiutoriumNostrum.jpg" /></p>
      </template>
      <p><Confitebor /></p>
      <p><img src="../assets/g95InOrdineOfficii/ConverteNos.jpg" /></p>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <p>
          <ImageDisplay :imgSource="officeTempusLiturgicus2.inAdiutorium" />
        </p>
        <p><ImageDisplay :imgSource="officeTempusLiturgicus2.ant" /></p>
      </template>
      <p><ImageDisplay :imgSource="officeTempusLiturgicus1.ton" /></p>
      <p><component :is="officeTempusLiturgicus1.ps004" /></p>
      <p><component :is="officeTempusLiturgicus1.ps090" /></p>
      <p><component :is="officeTempusLiturgicus1.ps133" /></p>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <p><ImageDisplay :imgSource="officeTempusLiturgicus2.ant" /></p>
        <p><rubrique>Hymnus</rubrique></p>
        <p><ImageDisplay :imgSource="officeTempusLiturgicus2.hymnus" /></p>
        <p><Capitulum /></p>
        <p><rubrique>Responsorium breve</rubrique></p>
        <p><ImageDisplay :imgSource="officeTempusLiturgicus2.responsum" /></p>
        <p><rubrique>Versus</rubrique></p>
        <p><img src="../assets/g85Versus/VerCustodiNos.jpg" /></p>
      </template>
      <p><rubrique>Nunc dimitis</rubrique></p>
      <template v-if="officeTempusLiturgicus1.tempus != 'triduum'">
        <p><img src="../assets/g50Antiphona/AntSalvaNosDomine.jpg" /></p>
        <p><img src="../assets/g65Psalmodia/NuncDimittisT32Fb.jpg" /></p>
        <p><img src="../assets/g95InOrdineOfficii/KyrieSimplex.jpg" /></p>
        <p>
          <img src="../assets/g95InOrdineOfficii/PaterNosterSilentio.jpg" />
        </p>
        <p><DominusVobiscum /></p>
        <p><Oratio /></p>

      <p>
        <br />
        <rubrique>Oratio - <i>Tonus simplex</i></rubrique><br /><br />
        Orémus.<br />
        <Oratio /><br /> 
        <OratioConclusio /></p>


        <p><DominusVobiscum /></p>
      </template>
      <template v-else>
        <p><NuncDimittisSineGloria /></p>
        <p>{{ officeLectio }}</p>
        <rubrique>Secreto</rubrique>
        <p>Pater noster ...</p>
        <rubrique>Aliquantulum altius</rubrique>
        <p><Oratio /></p>
        <rubrique>Et sub silentio concluditur.</rubrique>
        <p><OratioConclusio /></p>
      </template>
      <p><ImageDisplay :imgSource="officeTempusLiturgicus1.benedicamus" /></p>
      <p><ImageDisplay :imgSource="officeTempusLiturgicus1.aveRegina" /></p>
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
  IonFooter,
  IonButton,
  IonIcon,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import ImageDisplay from "../components/ImageDisplay.vue";
import { home, arrowBackSharp } from "ionicons/icons";
import { getFeast } from "../data/feastsTable";
import Confitebor from "../components/g95InOrdineOfficii/ConfiteborDeo.vue";
import Capitulum from "../components/g75Lectio/CapIerCh14V09.vue";
import NuncDimittisSineGloria from "../components/g65Psalmodia/NuncDimittisR13SineGloria.vue";
import Oratio from "../components/g80Oratio/OraHabitationemIstam.vue";
import DominusVobiscum from "../components/g95InOrdineOfficii/DominusVobiscum.vue";
import OratioConclusio from "../components/g80Oratio/PerDominum.vue";

export default defineComponent({
  name: "AdCompletorium",
  components: {
    Confitebor,
    Capitulum,
    NuncDimittisSineGloria,
    Oratio,
    DominusVobiscum,
    OratioConclusio,
    ImageDisplay,
    IonPage,
    IonContent,
    IonHeader,
    IonFooter,
    IonButton,
    IonIcon,
    IonBackButton,
  },
  setup() {
    const route = useRoute();
    const feast = route.params.feast;
    const feastNum = +feast;
    let i = 0;
    const feastCurrent = getFeast(feastNum);
    const arrayTemporumLiturgicorum1 = [
      {
        tempus: "triduum",
        iube: null, // Triduum
        fratres: null,
        ton: require("../assets/g70Tonus/Tonus13Fc.jpg"), // tonus in directum
        ps004: defineAsyncComponent(
          () => import("../components/g65Psalmodia/Ps004R13SineGloria.vue")
        ),
        ps090: defineAsyncComponent(
          () => import("../components/g65Psalmodia/Ps090R13SineGloria.vue")
        ),
        ps133: defineAsyncComponent(
          () => import("../components/g65Psalmodia/Ps133R13SineGloria.vue")
        ),
        aveRegina: null,
        benedicamus: null,
      },
      {
        tempus: "non est triduum",
        iube: require("../assets/g95InOrdineOfficii/IubeDomne.jpg"),
        fratres: require("../assets/g75Lectio/FratresSobrii.jpg"),
        ton: require("../assets/g70Tonus/Tonus08Fg.jpg"),
        ps004: defineAsyncComponent(
          () => import("../components/g65Psalmodia/Ps004R03.vue")
        ),
        ps090: defineAsyncComponent(
          () => import("../components/g65Psalmodia/Ps090R03.vue")
        ),
        ps133: defineAsyncComponent(
          () => import("../components/g65Psalmodia/Ps133R03.vue")
        ),
        aveRegina: require("../assets/g50Antiphona/AntAveReginaSimplex.jpg"),
        benedicamus: require("../assets/g95InOrdineOfficii/BenedicamusDomSimplex.jpg"),
      },
    ];
    if (feastNum < 5 || feastNum > 7) {
      i = 1;
    } /* not in Triduum  */
    const officeTempusLiturgicus1 = arrayTemporumLiturgicorum1[i];
    const arrayTemporumLiturgicorum2 = [
      {
        tempus: "triduum",
        inAdiutorium: null,
       antLA: null,
        hymnus: null,
        responsum: null,
      },
      {
        tempus: "quadragesimae",
        inAdiutorium: require("../assets/g95InOrdineOfficii/InAdiutoriumCompQuad.jpg"),
       antLA: require("../assets/g50Antiphona/AntMiserereMihi.jpg"),
        hymnus: require("../assets/g60Hymnus/HymTeLlucisHebdoSancta.jpg"),
        responsum: require("../assets/g55Responsum/RepInManusTuas.jpg"),
      },
      {
        tempus: "paschali",
        inAdiutorium: require("../assets/g95InOrdineOfficii/InAdiutoriumCompPascha.jpg"),
       antLA: require("../assets/g50Antiphona/AntAlleluiaPasqua.jpg"),
        hymnus: require("../assets/g60Hymnus/HymTeLucisTP.jpg"),
        responsum: require("../assets/g55Responsum/RepInManusTuasTP.jpg"),
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
      {
        index: "5",
        lectio: "Christus factus pro nobis obediens usque ad mortem.",
      },
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
    };
  },
});
</script>
