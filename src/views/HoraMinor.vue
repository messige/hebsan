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
        {{ feastCurrent.titleLA }}<br />{{ feastCurrent.titleTR }}
        <br />{{ OfficeTitle }}
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
      <p>
        <br />
        <rubrique>Oratio <i>{{temporumLiturgicorum1.rubriqueOratio}}</i></rubrique><br /><br />
        {{temporumLiturgicorum1.incipitOratio}}
        <template v-if="temporumLiturgicorum1.incipitOratio"><br /></template>
        <component :is="officeOratio" /><br /> 
        <component :is="officeOratioConclusio" />
      </p>
      <p><component :is="officeFinalHora.vobiscum" /></p>
      <p><ImageDisplay :imgSource="officeTemporumLiturgicorum.benedicamus" /></p>
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
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { useRoute } from "vue-router";
import { defineAsyncComponent } from "vue";
import { home, arrowBackSharp } from "ionicons/icons";
import ImageDisplay from "../components/vue/ImageDisplay.vue";
import { defineComponent } from "vue";
import { getFeast } from "../data/feastsTable";

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
    let i = 0;
    const arrayFeasts = [
      {
        arrayFeastOffices: [                            // in Palmis
          {
            titleOffice: "Ad tertiam",
            antiphona: require("../assets/g50Antiphona/AntPueriVestimenta.jpg"),
            tonus: require("../assets/g70Tonus/Tonus01Ff.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D01-04R18.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: require("../assets/g50Antiphona/AntTibiRevelavi.jpg"),
            tonus: require("../assets/g70Tonus/Tonus10Fb.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D05-08R10.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: require("../assets/g50Antiphona/AntInvocaboNomen.jpg"),
            tonus: require("../assets/g70Tonus/Tonus10Fb.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D09-12R10.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [                            // Feria II
          {
            titleOffice: "Ad tertiam",
            antiphona: require("../assets/g50Antiphona/AntFrameaSuscitare.jpg"),
            tonus: require("../assets/g70Tonus/Tonus02Fd.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: require("../assets/g50Antiphona/AntAppenderuntMercedem.jpg"),
            tonus: require("../assets/g70Tonus/Tonus41Fe.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: require("../assets/g50Antiphona/AntLabiaInsurgentium.jpg"),
            tonus: require("../assets/g70Tonus/Tonus08Fg.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [                            // Feria III
          {
            titleOffice: "Ad tertiam",
            antiphona: require("../assets/g50Antiphona/AntAnteDiem.jpg"),
            tonus: require("../assets/g70Tonus/Tonus01Ff.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: require("../assets/g50Antiphona/AntPotestatemHabeo.jpg"),
            tonus: require("../assets/g70Tonus/Tonus09Fb.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: require("../assets/g50Antiphona/AntPotestatemHabeo.jpg"),
            tonus: require("../assets/g70Tonus/Tonus09Fb.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [                            // Feria IV
          {
            titleOffice: "Ad tertiam",
            antiphona: require("../assets/g50Antiphona/AntIpsiVero.jpg"),
            tonus: require("../assets/g70Tonus/Tonus02Fd.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: require("../assets/g50Antiphona/AntAppenderuntMercedem.jpg"),
            tonus: require("../assets/g70Tonus/Tonus41Fe.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: require("../assets/g50Antiphona/ANTLiberaMeDeSanguinibus.jpg"),
            tonus: require("../assets/g70Tonus/Tonus08Fg.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [                            // Feria V
          {
            titleOffice: "Ad tertiam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D01-08R13.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D09-16R13.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D17-22R13.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [                            // Feria VI
          {
            titleOffice: "Ad tertiam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D20-22R03.vue")
            ),
          },
        ],
      },
      {
        arrayFeastOffices: [                            // Feria VII
          {
            titleOffice: "Ad tertiam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D13-16R01.vue")
            ),
          },
          {
            titleOffice: "Ad sextam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D17-19R08.vue")
            ),
          },
          {
            titleOffice: "Ad nonam",
            antiphona: null,
            tonus: require("../assets/g70Tonus/Tonus13Fc.jpg"),
            psalm: defineAsyncComponent(
              () => import("../components/g65Psalmodia/la/Ps118D20-22R03.vue")
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
    const arrayTemporumLiturgicorum1 = [
      {
        tempus: "non est triduum",
        rubriqueOratio: " - Tonus simplex",
        incipitOratio: "Orémus."
      },
      {
        tempus: "triduum",
        rubriqueOratio: "dicitur gravi et recta voce et ultima syllaba deprimitur per tonum in fine.",
        incipitOratio: null
      },
    ];
    i = 1;
    if (feastNum < 5 || feastNum > 7) {
      i = 0;
    } /* not in Triduum  */
    const temporumLiturgicorum1 = arrayTemporumLiturgicorum1[i];
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
    i = 0;
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
      defineAsyncComponent(() => import("../components/g75Lectio/la/CapPhilCh02V05.vue")), // Dom. in Palmis Ad Tertiam
      defineAsyncComponent(() => import("../components/g75Lectio/la/CapPhilCh02V08.vue")), // Dom. in Palmis Ad Sextam
      defineAsyncComponent(() => import("../components/g75Lectio/la/CapIerCh18V20.vue")), // Dom. in Palmis Ad Nonam
      defineAsyncComponent(() => import("../components/g75Lectio/la/CapIerCh17V13.vue")), // Hebdomada Sancta Ad Tertiam
      defineAsyncComponent(() => import("../components/g75Lectio/la/CapIerCh17V18.vue")), // Hebdomada Sancta Ad Sextam
      defineAsyncComponent(() => import("../components/g75Lectio/la/CapIerCh18V20.vue")),
      defineAsyncComponent(() => import("../components/g75Lectio/la/XFactusEstFeria5.vue")), // Feria V
      defineAsyncComponent(() => import("../components/g75Lectio/la/XFactusEstFeria6.vue")), // Feria VI
      defineAsyncComponent(() => import("../components/g75Lectio/la/XFactusEstFeria7.vue")),
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

    const arrayOratioConclusio = [
      null,
      defineAsyncComponent(() => import("@/components/g80Oratio/la/PerEundemDominum.vue")),
      defineAsyncComponent(() => import("@/components/g80Oratio/la/PerDominum.vue")),
      defineAsyncComponent(() => import("@/components/g80Oratio/la/QuiTecum.vue")),
    ];
    const arrayOratio = [
      { corpus: null, conclusio: 0 },
      {
        corpus: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraQuiHumanoGeneri.vue")  // Dom. in Palmis
        ), // Dom. in Palmis
        conclusio: 1,
      },
      {
        corpus: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraUtQuiInTot.vue")), // Feria II
        conclusio: 3,
      },
      {
        corpus: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraDaNobisIta.vue")), // Feria III
        conclusio: 1,
      },
      {
        corpus: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraUtQuiNostri.vue")), // Feria IV
        conclusio: 3,
      },
      {
        corpus: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraSuperHancFamiliamTriduo.vue")), // Feriae V, VI, VII
        conclusio: 3,
      },
    ];
    i = 0;
    if (feastNum < 5) {
      i = feastNum;
    } else if (feastNum > 4 && feastNum < 8) {
      i = 5;
    }
    const officeOratio = arrayOratio[i].corpus;
    const officeOratioConclusio = arrayOratioConclusio[arrayOratio[i].conclusio];
    const arrayFinalHora = [
      {
        kyrie: require("../assets/g95InOrdineOfficii/KyrieSimplex.jpg"),
        pater: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/img/PaterNosterSilentio.vue")
        ),
        vobiscum: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/DominusVobiscum.vue")
        ),
      },
      {
        kyrie: null,
        pater: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/PaterNosterTriduum.vue")
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
      temporumLiturgicorum1,
      officeCurrent,
      officeCapitulum,
      officeRespons,
      officeVersus,
      officeHymnus,
      officeOratio,
      officeOratioConclusio,
      officeFinalHora,
      home,
      arrowBackSharp,
    };
  },
});
</script>
