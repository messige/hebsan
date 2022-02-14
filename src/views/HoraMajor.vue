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
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
      <h2>
        {{ feastCurrent.titleLA }}<br /> {{ feastCurrent.titleTR }} 
        <br />{{ officeCurrent.officeName }}
      </h2>
      <component :is="officeInAdiutorium" />
      <p>
        <rubrique>Antiphonae</rubrique><br />
        <template v-for="(thisAnt, antID) in officeAnt" :key="antID">
          <ImageDisplay :imgSource="thisAnt.antLA" />
          <ImageDisplay :imgSource="thisAnt.ton" />
          <component :is="thisAnt.psalm" />
          <ImageDisplay :imgSource="thisAnt.antLA" /><br />
        </template>
      </p>
      <p><component :is="officeCapitulum" /></p>
      <template v-if="officeRespons != null">
        <p>
          <rubrique>Responsum</rubrique><br />
          <ImageDisplay :imgSource="officeRespons" />
        </p>
      </template>
      <p><component :is="officeHymnus" /></p>
      <p>
        <rubrique>Versus</rubrique><br />
        <ImageDisplay :imgSource="officeVersus" />
      </p>
      <p>
        <rubrique>{{ officeCantRubr }}</rubrique
        ><br />
        <ImageDisplay :imgSource="officeCant.antLA" /> <br />
        <ImageDisplay :imgSource="officeCant.ton" /> <br />
        <component :is="officeCant.cant" />
        <ImageDisplay :imgSource="officeCant.antLA" /> <br />
      </p>
      <p><ImageDisplay :imgSource="officeKyrie" /></p>
      <p><component :is="officeOraFinal.Pater" /></p>
      <p><component :is="officeOraFinal.DomVobis" /></p>
      <p>
        <br />
        <rubrique>Oratio <i>{{temporumLiturgicorum1.rubriqueOratio}}</i></rubrique><br /><br />
        {{temporumLiturgicorum1.incipitOratio}}
        <template v-if="temporumLiturgicorum1.incipitOratio"><br /></template>
        <component :is="officeOratio" /><br /> 
        <component :is="officeOratioConclusio" />
      </p>
      <p><component :is="officeOraFinal.DomVobis" /></p>
      <ImageDisplay :imgSource="officeBenedicamusDom" />
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
  IonBackButton,
} from "@ionic/vue";
import { defineAsyncComponent } from "vue";
import { arrowBackSharp } from "ionicons/icons";
import ImageDisplay from "@/components/ImageDisplay.vue";
import { home } from "ionicons/icons";
import { defineComponent } from "vue";
import { getFeast } from "../data/feastsTable";
import { getOffice } from "../data/officesTable";
import { feastOffices } from "../data/horaMajorAnts";
export default defineComponent({
  name: "HoraMajor",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    ImageDisplay,
    IonButton,
    IonIcon,
    IonBackButton,
    feastOffices,
  },
  props: {
    feast: { type: Number, required: true },
    office: { type: Number, required: true },
  },
  setup(props) {
    let feastNum = 0;
    let i = 0;
    let j = 0;
    for (j = 0; j < 9; j++) {
      if (props.feast == j) {
        feastNum = j;
      }
    }
    let officeNum = 1;
    if (props.office == 2) {
      officeNum = 2;
    }
    const feastCurrent = getFeast(feastNum);
    const officeCurrent = getOffice(officeNum);
    const feastOfficeCurrent = feastOffices(feastNum);
    const officeAnt = feastOfficeCurrent.arrayOfffice[officeNum - 1];
    const officeCant = feastOfficeCurrent.arrayCant[officeNum - 1];

    const arrayTemporumLiturgicorum1 = [
      {
        tempus: "non est triduum",
        rubriqueOratio: " - Tonus solemnis",
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
    const arrayInAdiutorium = [
      null,
      defineAsyncComponent(
        () => import("@/components/g95InOrdineOfficii/img/InAdiutoriumMinorQuad.vue")
      ), // Feriale Quadragesimae
      defineAsyncComponent(
        () => import("@/components/g95InOrdineOfficii/img/InAdiutoriumSolemn.vue")
      ), // Vesperae Festivo Quadragesimae
      defineAsyncComponent(
        () => import("@/components/g95InOrdineOfficii/img/InAdiutoriumMinorPascha.vue")
      ), //Laudes Tempus paschali
      defineAsyncComponent(
        () => import("@/components/g95InOrdineOfficii/img/InAdiutoriumSolemn.vue")
      ), // Vesperae Tempus paschali
    ];
    i = 0;
    if (
      (feastNum == 1 && officeNum == 1) ||
      feastNum == 2 ||
      feastNum == 3 ||
      feastNum == 4
    ) {
      i = 1;
    } /* Aux Laudes et aux Vêpres de la féérie  */
    if ((feastNum == 1 && officeNum == 2) || feastNum == 0) {
      i = 2;
    } /* Le Dimanche des Rameaux et la veille aux Vêpres  */ else if (
      feastNum == 8 &&
      officeNum == 1
    ) {
      i = 3;
    } /* Le Dimanche de Pâques aux Vêpres  */ else if (feastNum == 8 && officeNum == 2) {
      i = 4;
    } /* Le Dimanche de Pâques aux Vêpres  */
    const officeInAdiutorium = arrayInAdiutorium[i];
    /*       const arrayOffices  = [
        { title   : 'Ad Laudes'} ,
        { title   : 'Ad Vesperas' } 
      ] ; 
      const officeCurrent       = arrayOffices [officeNum-1] ;    */
    const arrayCapitulum = [
      null,
      defineAsyncComponent(() => import("@/components/g75Lectio/CapPhilCh02V05.vue")), // Dom. in Palmis
      defineAsyncComponent(() => import("@/components/g75Lectio/CapIerCh11V19.vue")), // Ad Laudes Quadragesimae
      defineAsyncComponent(() => import("@/components/g75Lectio/CapIerCh11V20.vue")), // Ad Vesperas Quadragesimae
      defineAsyncComponent(() => import("@/components/g75Lectio/CapCor1Ch05V07.vue")),
    ]; // Dom. Resurrectio
    i = 0;
    if (feastNum == 1 || feastNum == 9) {
      i = 1;
    } else if (feastNum > 1 && feastNum < 5)
      if (officeNum == 1) {
        i = 2;
      } else if (officeNum == 2) {
        i = 3;
      } else if (feastNum == 8) {
        i = 4;
      }
    const officeCapitulum = arrayCapitulum[i];
    const arrayRespons = [
      null,
      require("../assets/g55Responsum/RepErueAFramea2.jpg"), // Ad Laudes Domenicae in Palmis
      require("../assets/g55Responsum/RepDeOreLeonis2.jpg"), // Ad Vesperas Domenicae in Palmis
      require("../assets/g55Responsum/RepErueAFramea3.jpg"), // Ad Laudes Hebdomada Sancta
      require("../assets/g55Responsum/RepDeOreLeonis3.jpg"), // Ad Vesperas Hebdomada Sancta
      require("../assets/g55Responsum/RepSurrexitDom.jpg"), // Ad Laudes Dom. Resurrectio
      require("../assets/g55Responsum/RepSurrexitDomVereSolemn.jpg"), // Ad Vesperase Dom. Resurrectio
    ];
    i = 0;
    if (feastNum == 1 || feastNum == 9) {
      if (officeNum == 1) {
        i = 1;
      } else if (officeNum == 2) {
        i = 2;
      }
    } else if (feastNum == 2 || feastNum == 3 || feastNum == 4) {
      if (officeNum == 1) {
        i = 3;
      } else if (officeNum == 2) {
        {
          i = 4;
        }
      }
    } else if (feastNum == 8) {
      if (officeNum == 1) {
        i = 5;
      } else if (officeNum == 2) {
        i = 6;
      }
    }
    const officeRespons = arrayRespons[i];
    const arrayHymnus = [
      null,
      defineAsyncComponent(() => import("@/components/g60Hymnus/HymCruxFidelis.vue")), // Ad Laudes Hebdomada Sancta
      defineAsyncComponent(() => import("@/components/g60Hymnus/HymVexillaRegis.vue")), // Ad Vesperas Hebdomada Sancta
      defineAsyncComponent(() => import("@/components/g60Hymnus/HymAuroraLucis.vue")), // Ad Laudes Dom. Resurrectio
      defineAsyncComponent(() => import("@/components/g60Hymnus/HymAdCoenamAgni.vue")),
    ]; // Ad Vesperase Dom. Resurrectio
    i = 0;
    if (feastNum < 5 || feastNum == 9) {
      if (officeNum == 1) {
        i = 1;
      } else if (officeNum == 2) {
        i = 2;
      }
    } else if (feastNum == 8) {
      if (officeNum == 1) {
        i = 3;
      } else if (officeNum == 2) {
        i = 4;
      }
    }
    const officeHymnus = arrayHymnus[i];
    const arrayVersus = [
      require("../assets/g85Versus/VersEripeMeInimicis.jpg"), // Ad Laudes Hebdomada Sancta
      require("../assets/g85Versus/VersEripeMeHomine.jpg"), // Ad Vesperas Hebdomada Sancta
      require("../assets/g85Versus/VerHomoPacis.jpg"), // Feria V
      require("../assets/g85Versus/VerCollocavitIn.jpg"), // Feria VI
      require("../assets/g85Versus/VerCaroMea.jpg"), // Feria VII
      require("../assets/g85Versus/VersHaecDies.jpg"), //  Dom. Resurrectio
    ];
    i = 0;
    if (feastNum < 5 || feastNum == 9) {
      if (officeNum == 2) {
        i = 1;
      }
    } else if (feastNum > 4) {
      i = feastNum - 3;
    }
    const officeVersus = arrayVersus[i];
    let officeCantRubr = null;
    if (officeNum == 1) {
      officeCantRubr = "Antiphona ad Benedictus";
    } else if (officeNum == 2) {
      officeCantRubr = "Antiphona ad Magnificat";
    }
    const arrayOratioConclusio = [
      null,
      defineAsyncComponent(() => import("@/components/g80Oratio/PerEundemDominum.vue")),
      defineAsyncComponent(() => import("@/components/g80Oratio/PerDominum.vue")),
      defineAsyncComponent(() => import("@/components/g80Oratio/QuiTecum.vue")),
    ];
    const arrayOratio = [
      { corpus: null, conclusio: 0 },
      {
        corpus: defineAsyncComponent(
          () => import("@/components/g80Oratio/OraQuiHumanoGeneri.vue")
        ), // Dom. in Palmis
        conclusio: 1,
      },
      {
        corpus: defineAsyncComponent(
          () => import("@/components/g80Oratio/OraUtQuiInTot.vue")
        ), // Feria II Ad Laudes
        conclusio: 3,
      },
      {
        corpus: defineAsyncComponent(
          () => import("@/components/g80Oratio/OraDaNobisIta.vue")
        ), // Feria III  Ad Laudes
        conclusio: 1,
      },
      {
        corpus: defineAsyncComponent(
          () => import("@/components/g80Oratio/OraUtQuiNostri.vue")
        ), // Feria IV Ad Laudes
        conclusio: 1,
      },
      {
        corpus: defineAsyncComponent(
          () => import("@/components/g80Oratio/OraAdBeneficiaRecolenda.vue")
        ), // Feria II Ad Vesperas
        conclusio: 2,
      },
      {
        corpus: defineAsyncComponent(
          () => import("@/components/g80Oratio/OraTuaNosMisericordia.vue")
        ), // Feria III Ad Vesperas
        conclusio: 2,
      },
      {
        corpus: defineAsyncComponent(
          () => import("@/components/g80Oratio/OraSuperHancFamiliam.vue")
        ), // Feria IV Ad Vesperas
        conclusio: 3,
      },
      {
        corpus: defineAsyncComponent(
          () => import("@/components/g80Oratio/OraSuperHancFamiliamTriduo.vue")
        ), // Ad Laudes Feria V & Feria VI
        conclusio: 3,
      },
      {
        corpus: defineAsyncComponent(
          () =>
            // Dom. Resurrectio
            import("@/components/g80Oratio/OraQuiHodiernaDie.vue")
        ),
        conclusio: 1,
      },
    ];
    i = 0;
    if (feastNum == 0 || feastNum == 1) {
      i = 1;
    } else if (feastNum < 5) {
      if (officeNum == 1) {
        i = feastNum;
      } else if (officeNum == 2) {
        i = feastNum + 3;
      }
    } else if ((feastNum == 5 || feastNum == 6) && officeNum == 1) {
      i = 8;
    } else if (feastNum == 8) {
      i = 9;
    }
    const officeOratio = arrayOratio[i].corpus;
    const officeOratioConclusio = arrayOratioConclusio[arrayOratio[i].conclusio];
    const arrayKyrieAnt = [
      null,
      require("../assets/g95InOrdineOfficii/KyrieSimplex.jpg"),
      require("../assets/g50Antiphona/AntChristusFactusEst5.jpg"),
      require("../assets/g50Antiphona/AntChristusFactusEst6.jpg"),
      require("../assets/g50Antiphona/AntChristusFactusEst7.jpg"),
    ];
    i = 0;
    if (feastNum < 5 || feastNum > 7) {
      i = 1;
    } else if (feastNum > 4 && feastNum < 8) {
      i = feastNum - 3;
    } /* Aux Laudes du Triduum  */
    const officeKyrie = arrayKyrieAnt[i];
    const arrayOraFinal = [
      { Pater: null, DomVobis: null },
      {
        Pater: defineAsyncComponent(
          () => import("@/components/g95InOrdineOfficii/img/PaterNosterHoraMajor.vue")
        ), // Pater de l'Office
        DomVobis: defineAsyncComponent(
          () => import("@/components/g95InOrdineOfficii/DominusVobiscum.vue")
        ),
      },
      {
        Pater: defineAsyncComponent(
          () => import("@/components/g95InOrdineOfficii/PaterNosterTriduum.vue")
        ),
        DomVobis: null,
      },
    ];
    i = 0;
    if (feastNum < 5 || feastNum > 7) {
      i = 1;
    }
    if (feastNum == 5 || feastNum == 6) {
      i = 2;
    } /* Aux Laudes du jeudi et du vendredi  */
    const officeOraFinal = arrayOraFinal[i];
    const arrayBenedicamusDom = [
      null,
      require("../assets/g95InOrdineOfficii/BenedicamusDominoAdvQuadVigil.jpg"),
      require("../assets/g95InOrdineOfficii/BenedicamusDominoPrimVesperis.jpg"),
      require("../assets/g95InOrdineOfficii/BenedicamusDominoAdLaudes.jpg"),
      require("../assets/g95InOrdineOfficii/BenedicamusDominoSecVesperis.jpg"),
      require("../assets/g95InOrdineOfficii/BenedicamusDominoPascha.jpg"),
    ];
    i = 0;
    if (feastNum == 2 || feastNum == 3 || feastNum == 4) {
      i = 1;
    } /* Aux Laudes et aux Vêpres de la féérie  */ else if (feastNum == 9) {
      i = 2;
    } /* La veille des Rameaux  aux Vêpres  */ else if (feastNum == 1) {
      if (officeNum == 1) {
        i = 3;
      } /* Le Dimanche des Rameaux aux Laudes  */ else if (officeNum == 2) {
        i = 4;
      } /* Le Dimanche des Rameaux aux Vêpres  */
    } else if (feastNum == 8) {
      i = 5;
    } /* Le Dimanche de Pâques */
    const officeBenedicamusDom = arrayBenedicamusDom[i];
    return {
      feastCurrent,
      officeNum,
      officeCurrent,
      feastOfficeCurrent,
      temporumLiturgicorum1,
      officeAnt,
      officeInAdiutorium,
      officeCapitulum,
      officeRespons,
      officeVersus,
      officeHymnus,
      officeCantRubr,
      officeCant,
      officeOratio,
      officeOratioConclusio,
      officeKyrie,
      officeOraFinal,
      officeBenedicamusDom,
      arrowBackSharp,
      home,
    };
  },
});
</script>
