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
        {{ feastCurrent.title }} - {{ feastCurrent.titleTR }}
        <br class="smallScreen" />&nbsp;-&nbsp;{{ OfficeTitle }}
      </h2>
      <br />
      <template v-if="feastNum < 5">
        <component :is="officeTemporumLiturgicorum.inAdiutorium" />
        <ImageDisplay :imgSource="officeHymnus" />
        <ImageDisplay :imgSource="officeCurrent.antiphona" />
      </template>
      <ImageDisplay :imgSource="officeCurrent.tonus" />
      <p><component :is="officeCurrent.psalm" /></p>
      <template v-if="feastNum < 5">
        <ImageDisplay :imgSource="officeCurrent.antiphona" />
      </template>
      <p><component :is="officeCapitulum" /></p>
      <template v-if="feastNum < 5">
        <template v-if="officeRespons != null">
          <p>
            <rubrique>Responsum</rubrique><br />
            <ImageDisplay :imgSource="officeRespons" />
          </p>
          <p>
            <rubrique>Versus</rubrique><br />
            <ImageDisplay :imgSource="officeVersus" />
          </p>
        </template>
        <p><ImageDisplay :imgSource="officeFinalHora.kyrie" /><br /></p>
      </template>
      <p><component :is="officeFinalHora.pater" /></p>
      <p><component :is="officeFinalHora.vobiscum" /></p>
      <p><component :is="officeOratio" /></p>
      <p><component :is="officeFinalHora.vobiscum" /></p>
      <p><ImageDisplay :imgSource="officeTemporumLiturgicorum.benedicamus" /></p>
      <br />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { useRoute } from "vue-router";
import { defineAsyncComponent } from "vue";
import { home, arrowBackSharp } from "ionicons/icons";
import ImageDisplay from "../components/ImageDisplay.vue";
import { defineComponent } from "vue";
import { getFeast } from "../data/feasts";

export default defineComponent({
  name: "HoraMinor",
  components: {
    ImageDisplay,
    IonPage,
    IonContent,
    IonHeader,
    IonFooter,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
  },
  setup() {
    const route = useRoute();
    const feast = route.params.feast;
    const office = route.params.office;
    const arrayFeasts = [
      {
        arrayFeastOffices: [
          {
            titleOffice: "Ad tertiam",
            antiphona: require("../assets/g50Antiphona/AntPueriVestimenta2.jpg"),
            tonus: require("../assets/g70Tonus/Tonus01Ff.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D01-04R18.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: require("../assets/g50Antiphona/AntTibiRevelavi.jpg"),
            tonus: require("../assets/g70Tonus/Tonus09Fb.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D05-08R10.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: require("../assets/g50Antiphona/AntInvocabo2.jpg"),
            tonus: require("../assets/g70Tonus/Tonus09Fb.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D09-12R10.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [
          {
            titleOffice: "Ad tertiam",
            antiphona: require("../assets/g50Antiphona/AntFramea2.jpg"),
            tonus: require("../assets/g70Tonus/Tonus02Fd.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: require("../assets/g50Antiphona/AntAppenderunt.jpg"),
            tonus: require("../assets/g70Tonus/Tonus41Fe.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: require("../assets/g50Antiphona/AntLabiaInsurgentibus.jpg"),
            tonus: require("../assets/g70Tonus/Tonus08Fg.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [
          {
            titleOffice: "Ad tertiam",
            antiphona: require("../assets/g50Antiphona/AntAnteDiemPaschae.jpg"),
            tonus: require("../assets/g70Tonus/Tonus01Ff.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: require("../assets/g50Antiphona/AntPotestatemHabeo2.jpg"),
            tonus: require("../assets/g70Tonus/Tonus09Fb.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: require("../assets/g50Antiphona/AntPotestatemHabeo2.jpg"),
            tonus: require("../assets/g70Tonus/Tonus09Fb.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [
          {
            titleOffice: "Ad tertiam",
            antiphona: require("../assets/g50Antiphona/AntIpsiVeroInVanum2.jpg"),
            tonus: require("../assets/g70Tonus/Tonus02Fd.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: require("../assets/g50Antiphona/AntAppenderunt.jpg"),
            tonus: require("../assets/g70Tonus/Tonus41Fe.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: require("../assets/g50Antiphona/AntLiberaMe.jpg"),
            tonus: require("../assets/g70Tonus/Tonus08Fg.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [
          {
            titleOffice: "Ad tertiam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D01-08R13.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D09-16R13.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D17-22R13.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [
          {
            titleOffice: "Ad tertiam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [
          {
            titleOffice: "Ad tertiam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
    ];
    const feastNum = +feast;
    const officeNum = +office / 3;
    const feastCurrentArr = arrayFeasts[feastNum - 1]; // Feast is 1,2,... while index in table is 0,1,...
    const feastCurrent = getFeast(feastNum);
    const feastOffice = feastCurrentArr.arrayFeastOffices;
    const officeCurrent = feastOffice[officeNum - 1];
    const arrayTemporumLiturgicorum = [
      { inAdiutorium: null, benedicamus: null },
      {
        inAdiutorium: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/img/InAdiutoriumMinorQuad.vue")
        ),
        benedicamus: require("../assets/g95InOrdineOfficii/BenedicamusDomSimplex.jpg"),
      }, // Quadragesimae
      {
        inAdiutorium: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/img/InAdiutoriumMinorPascha.vue")
        ),
        benedicamus: require("../assets/g95InOrdineOfficii/BenedicamusDominoPascha.jpg"),
      },
    ]; //Tempus paschali
    let i = 0;
    if (feastNum < 5) {
      i = 1;
    } /* Quadragesimae not in Triduum */ else if (feastNum == 8) {
      i = 2;
    } /* No hores minores for Dom. Resurectionis but just in case ...  */
    const officeTemporumLiturgicorum = arrayTemporumLiturgicorum[i];
    const arrayOffices = [
      {
        title: "Ad tertiam",
        hymnus: require("../assets/g60Hymnus/HymDeiFide.jpg"),
        respons: require("../assets/g55Responsum/RepErueAFramea.jpg"),
        versus: require("../assets/g85Versus/VerDeOreLeonisSimplex.jpg"),
      },
      {
        title: "Ad Sextam",
        hymnus: require("../assets/g60Hymnus/HymQuaChristusOra.jpg"),
        respons: require("../assets/g55Responsum/RepDeOreLeonis.jpg"),
        versus: require("../assets/g85Versus/VerNePerdasSimplex.jpg"),
      },
      {
        title: "Ad Nonam",
        hymnus: require("../assets/g60Hymnus/HymTernisTerHoris.jpg"),
        respons: require("../assets/g55Responsum/RepNePerdas.jpg"),
        versus: require("../assets/g85Versus/VersEripeMeSimplex.jpg"),
      },
    ];
    const OfficeCurrent = arrayOffices[officeNum - 1]; // office is 3 OR 6 OR 9 while index in table is 0 OR 1 OR 2
    const OfficeTitle = OfficeCurrent.title;
    let officeHymnus = OfficeCurrent.hymnus;
    let officeRespons = OfficeCurrent.respons;
    let officeVersus = OfficeCurrent.versus;
    if (feastNum > 4 && officeNum < 8) {
      officeHymnus = null;
      officeRespons = null;
      officeVersus = null;
    }
    const arrayCapitulum = [
      null,
      defineAsyncComponent(() => import("../components/g75Lectio/CapPhilCh02V05.vue")), // Dom. in Palmis Ad Tertiam
      defineAsyncComponent(() => import("../components/g75Lectio/CapPhilCh02V08.vue")), // Dom. in Palmis Ad Sextam
      defineAsyncComponent(() => import("../components/g75Lectio/CapPhilCh02V10.vue")), // Dom. in Palmis Ad Nonam
      defineAsyncComponent(() => import("../components/g75Lectio/CapIerCh17V13.vue")), // Hebdomada Sancta Ad Tertiam
      defineAsyncComponent(() => import("../components/g75Lectio/CapIerCh17V18.vue")), // Hebdomada Sancta Ad Sextam
      defineAsyncComponent(() => import("../components/g75Lectio/CapIerCh18V20.vue")),
      defineAsyncComponent(() => import("../components/g75Lectio/XFactusEstFeria5.vue")), // Feria V
      defineAsyncComponent(() => import("../components/g75Lectio/XFactusEstFeria6.vue")), // Feria VI
      defineAsyncComponent(() => import("../components/g75Lectio/XFactusEstFeria7.vue")),
    ]; // Feria VII      // Dom. in Palmis Ad Nonam
    i = 0;
    if (feastNum == 1) {
      i = officeNum;
    } else if (feastNum > 1 && feastNum < 5) {
      i = officeNum + 3;
    } else if (feastNum > 4 && feastNum < 8) {
      i = feastNum + 2;
    }
    const officeCapitulum = arrayCapitulum[i];

    const arrayOratio = [
      null,
      defineAsyncComponent(
        () => import("../components/g80Oratio/OraQuiHumanoGeneri.vue")
      ), // Dom. in Palmis
      defineAsyncComponent(() => import("../components/g80Oratio/OraUtQuiInTot.vue")), // Feria II
      defineAsyncComponent(() => import("../components/g80Oratio/OraDaNobisIta.vue")), // Feria III
      defineAsyncComponent(() => import("../components/g80Oratio/OraUtQuiNostri.vue")), // Feria IV
      defineAsyncComponent(
        () => import("../components/g80Oratio/OraSuperHancFamiliamTriduo.vue")
      ),
    ]; // Feria V, VI, VII
    i = 0;
    if (feastNum < 5) {
      i = feastNum;
    } else if (feastNum > 4 && feastNum < 8) {
      i = 5;
    }
    const officeOratio = arrayOratio[i];
    const arrayFinalHora = [
      {
        kyrie: require("../assets/g95InOrdineOfficii/KyrieSimplex.jpg"),
        pater: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/img/PaterNosterSilentio.vue")
        ),
        vobiscum: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/DominusVobiscum.vue")
        ),
      },
      {
        kyrie: null,
        pater: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/PaterNosterTriduum.vue")
        ),
        vobiscum: null,
      },
    ];
    i = 0;
    if (feastNum > 4 && officeNum < 8) {
      i = 1;
    } /* Triduum  */
    const officeFinalHora = arrayFinalHora[i];
    return {
      feastNum,
      feastCurrent,
      feast,
      office,
      OfficeTitle,
      officeTemporumLiturgicorum,
      officeCurrent,
      officeCapitulum,
      officeRespons,
      officeVersus,
      officeHymnus,
      officeOratio,
      officeFinalHora,
      home,
      arrowBackSharp,
    };
  },
});
</script>
