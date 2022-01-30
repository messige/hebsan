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
        <br class="smallScreen" />&nbsp;&nbsp;- {{ officeCurrent.officeName }}
      </h2>
      <br />
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
        <component :is="typeOffice.hymnus" />
        <component :is="DoxChristumRogamus" />
        <br />
        <component :is="officeAntElement.antLA " />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11">
              <ion-text color="tertiary">
                <component :is=" officeAntElement.antTR" /> </ion-text></ion-col></ion-row
        ></ion-grid>
      </template>
      <component :is="officeAntElement.psalm1TR" /><br />
      <component :is="officeAntElement.psalm2TR" /><br />     <!-- for the Triduum  -->     
      <p>
        <component :is="officeCapitulum.capitulum" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component
                  :is="officeCapitulum.capitulumTR"
                /> </ion-text></ion-col></ion-row
        ></ion-grid>
      </p>
      <template v-if="feastNum < 5">
        <template v-if="typeOffice.respons != null">
          <p>
            <rubrique>Responsum</rubrique><br />
            <component :is="typeOffice.respons" />
          </p>
          <ion-grid
            ><ion-row>
              <ion-col>&nbsp;</ion-col>
              <ion-col size="11"
                ><ion-text color="tertiary">
                  <component :is="typeOffice.responsTR" /> </ion-text></ion-col></ion-row
          ></ion-grid>
          <p>
            <rubrique>Versus</rubrique><br />
            <component :is="typeOffice.versus" />
          </p>
          <ion-grid
            ><ion-row>
              <ion-col>&nbsp;</ion-col>
              <ion-col size="11"
                ><ion-text color="tertiary">
                  <component :is="typeOffice.versusTR" /> </ion-text></ion-col></ion-row
          ></ion-grid>
        </template>
        <p><component :is="officeFinalHora.kyrie" /></p>
      </template>
      <p><component :is="officeFinalHora.pater" /></p>
      <p><component :is="officeFinalHora.vobiscum" /></p>
      <rubrique>Oratio</rubrique><br /><br />
      <component :is="officeOratio.oratio" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="officeOratio.oratioTR" /> </ion-text></ion-col></ion-row
      ></ion-grid>

      <p><component :is="officeFinalHora.vobiscum" /></p>
      <component :is="officeTempusLiturgicus1.benedicamus" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component
                :is="officeTempusLiturgicus1.benedicamusTR"
              /> </ion-text></ion-col></ion-row
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
import { defineAsyncComponent } from "vue";
import { getFeast } from "../data/feasts";
import { getOffice } from "../data/offices";
import { home, arrowBackSharp } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HoraMinor",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
  },
  props: {
    feast: { type: Number, required: true },
    office: { type: Number, required: true },
    language: { type: String, required: true },
  },
  setup(props) {
    let feastNum = 0;
    let j = 0;
    for (j = 0; j < 9; j++) {
      if (props.feast == j) {
        feastNum = j;
      }
    }
    const officeNum = +props.office;
    const feastCurrent = getFeast(feastNum);
    const officeCurrent = getOffice(officeNum);
    let i = 0;
    interface Ps {
      psID: number;
      antLA: any;
      antTR: any;
      psalm1TR: any;
      psalm2TR: any;
      }
    const arrayPs: Ps[] = [
      {
        psID: 0, //if psCantID not found
        antLA: defineAsyncComponent(
          () => import("../components/g50Antiphona/Empty.vue")
        ),
        antTR: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + props.language + "/Empty.vue")
        ),
        psalm1TR: defineAsyncComponent(
          () => import("../components/g65Psalmodia/" + props.language + "/Empty.vue")
        ),
        psalm2TR: null,
      },
      {
        psID: 13, // Domenica in Palmis Ad tertiam feastID: 1 officeID = 3,
        antLA: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + "AntPueriVestimenta2.vue")
        ),
        antTR: defineAsyncComponent(
          () =>
            import(
              "../components/g50Antiphona/" +
                props.language +
                "/AntPueriVestimenta2.vue"
            )
        ),
        psalm1TR: defineAsyncComponent(
          () =>
            import("../components/g65Psalmodia/" + props.language + "/Ps118D01-04.vue")
        ),
        psalm2TR: null,
      },
      {
        psID: 16, // Domenica in Palmis Ad Sexam feastID: 1 officeID = 6,
        antLA: defineAsyncComponent(
          () => import("../components/g50Antiphona/" + "AntTibiRevelavi.vue")
        ),
        antTR: defineAsyncComponent(
          () =>
            import(
              "../components/g50Antiphona/" + props.language + "/AntTibiRevelavi.vue"
            )
        ),
        psalm1TR: defineAsyncComponent(
          () =>
            import("../components/g65Psalmodia/" + props.language + "/Ps118D05-08.vue")
        ),
        psalm2TR: null,
      },
      {
        psID: 19, // Domenica in Palmis Ad Nonam feastID: 1 officeID = 9,
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntInvocabo2.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import("../components/g50Antiphona/" + props.language + "/AntInvocabo2.vue")
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D09-12.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 23, // Feraia II Ad tertiam feastID: 2 officeID = 3
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntFramea2.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import("../components/g50Antiphona/" + props.language + "/AntFramea2.vue")
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D13-16.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 26, // Feria II Ad Sexam feastID: 2 officeID = 6,
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntAppenderunt.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntAppenderunt.vue"
              )
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D17-19.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 29, //Feria II Ad Nonam feastID: 2 officeID = 9,
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntLabiaInsurgentibus.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" +
                  props.language +
                  "/AntLabiaInsurgentibus.vue"
              )
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D20-22.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 33, // Feria III Ad tertiam feastID: 3 officeID = 3
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntAnteDiemPaschae.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntAnteDiemPaschae.vue"
              )
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D13-16.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 36, // Feria III Ad Sexam feastID: 3 officeID = 6,
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntPotestatemHabeo2.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" +
                  props.language +
                  "/AntPotestatemHabeo2.vue"
              )
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D17-19.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 39, //Feria III Ad Nonam feastID: 3 officeID = 9,
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntPotestatemHabeo2.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" +
                  props.language +
                  "/AntPotestatemHabeo2.vue"
              )
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D20-22.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 43, // Feria IV Ad tertiam feastID: 4 officeID = 3
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntIpsiVeroInVanum2.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" +
                  props.language +
                  "/AntIpsiVeroInVanum2.vue"
              )
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D13-16.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 46, // Feria IV Ad Sexam feastID: 4 officeID = 6,
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntAppenderunt.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntAppenderunt.vue"
              )
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D17-19.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 49, //Feria IV Ad Nonam feastID: 4 officeID = 9,
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + "AntLiberaMe.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import("../components/g50Antiphona/" + props.language + "/AntLiberaMe.vue")
          ),
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D20-22.vue")
          ),
          psalm2TR: null,
        },
      {
        psID: 53, // Feria V, VI , VII Ad tertiam feastID: 5 officeID = 3
          antLA: null,
          antTR: null,
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D01-04.vue")
          ),
          psalm2TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D05-08.vue")
          ),
        },
      {
        psID: 56, // // Feria V, VI , VII Ad Sexam feastID: 5 officeID = 6,
          antLA: null,
          antTR: null,
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D09-12.vue")
          ),
          psalm2TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D13-16.vue")
          ),
        },
      {
        psID: 59, // // Feria V, VI , VII Ad Nomam feastID: 5 officeID = 9,
          antLA: null,
          antTR: null,
          psalm1TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D17-19.vue")
          ),
          psalm2TR: defineAsyncComponent(
            () =>
              import("../components/g65Psalmodia/" + props.language + "/Ps118D20-22.vue")
          ),
        },       
    ];
    i  = feastNum ;
    if ( i > 5 ) { i = 5 } 
    const feastOfficeID = i * 10 + officeNum;
    function getOfficeAnt(feastOfficeID: number) {
      const myArray = arrayPs.find((m) => m.psID === feastOfficeID);
      if (myArray) {
        return myArray;
      } else return arrayPs[0];
    }
    const officeAntElement = getOfficeAnt(feastOfficeID);
    const arrayTemporumLiturgicorum1 = [
      {
        tempus: "triduum",
        inAdiutorium: null,
        inAdiutoriumTR: null,
        benedicamus: null,
        benedicamusTR: null,
      },
      {
        tempus: "non est triduum",
        inAdiutorium: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + "InAdiutorium.vue")
        ),
        inAdiutoriumTR: defineAsyncComponent(
          () =>
            import(
              "../components/g95InOrdineOfficii/" + props.language + "/InAdiutorium.vue"
            )
        ),
        benedicamus: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + "BenedicamusDom.vue")
        ),
        benedicamusTR: defineAsyncComponent(
          () =>
            import(
              "../components/g95InOrdineOfficii/" + props.language + "/BenedicamusDom.vue"
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
        benedicamus: null,
      },
      {
        tempus: "quadragesimae",
        inAdiutoriumFin: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + "LausTibi.vue")
        ),
        inAdiutoriumFinTR: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + props.language + "/LausTibi.vue")
        ),
      },
      {
        tempus: "paschali",
        inAdiutoriumFin: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/Alleluia.vue")
        ),
        inAdiutoriumFinTR: null,
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
    const arrayOffices = [
      {
        title: "Ad tertiam",
        hymnus: defineAsyncComponent(
          () => import("../components/g60Hymnus/" + "HymDeiFide.vue")
        ),
        respons: defineAsyncComponent(
          () => import("../components/g55Responsum/" + "RepErueAFramea.vue")
        ),
        responsTR: defineAsyncComponent(
          () =>
            import("../components/g55Responsum/" + props.language + "/RepErueAFramea.vue")
        ),
        versus: defineAsyncComponent(
          () => import("../components/g00Text/" + "DeOreLeonis.vue")
        ),
        versusTR: defineAsyncComponent(
          () => import("../components/g00Text/" + props.language + "/DeOreLeonis.vue")
        ),
      },
      {
        title: "Ad Sextam",
        hymnus: defineAsyncComponent(
          () => import("../components/g60Hymnus/" + "HymQuaChristusOra.vue")
        ),
        respons: defineAsyncComponent(
          () => import("../components/g00Text/" + "DeOreLeonis.vue")
        ),
        responsTR: defineAsyncComponent(
          () => import("../components/g00Text/" + props.language + "/DeOreLeonis.vue")
        ),
        versus: defineAsyncComponent(
          () => import("../components/g00Text/" + "NePerdas.vue")
        ),
        versusTR: defineAsyncComponent(
          () => import("../components/g00Text/" + props.language + "/NePerdas.vue")
        ),
      },
      {
        title: "Ad Nonam",
        hymnus: defineAsyncComponent(
          () => import("../components/g60Hymnus/" + "HymTernisTerHoris.vue")
        ),
        respons: defineAsyncComponent(
          () => import("../components/g00Text/" + "NePerdas.vue")
        ),
        responsTR: defineAsyncComponent(
          () => import("../components/g00Text/" + props.language + "/NePerdas.vue")
        ),
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/" + "VersEripeMeHomine.vue")
        ),
        versusTR: defineAsyncComponent(
          () =>
            import("../components/g85Versus/" + props.language + "/VersEripeMeHomine.vue")
        ),
      },
    ];
    const DoxChristumRogamus = defineAsyncComponent(
      () => import("../components/g60Hymnus/" + "DoxChristumRogamus.vue")
    );
    const typeOffice = arrayOffices[ (officeNum/3) -1 ]; // office is 3 OR 6 OR 9 while index in table is 0 OR 1 OR 2
    const arrayCapitulum = [
      { capitulum: null, capitulumTR: null },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/CapPhilCh02V05.vue")
        ), // Dom. in Palmis Ad Tertiam
        capitulumTR: defineAsyncComponent(
          () =>
            import("../components/g75Lectio/" + props.language + "/CapPhilCh02V05.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/CapPhilCh02V08.vue")
        ), // Dom. in Palmis Ad Sextam
        capitulumTR: defineAsyncComponent(
          () =>
            import("../components/g75Lectio/" + props.language + "/CapPhilCh02V08.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/CapPhilCh02V10.vue")
        ), // Dom. in Palmis Ad Nonam
        capitulumTR: defineAsyncComponent(
          () =>
            import("../components/g75Lectio/" + props.language + "/CapPhilCh02V10.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/CapIerCh17V13.vue")
        ), // Hebdomada Sancta Ad Tertiam
        capitulumTR: defineAsyncComponent(
          () => import("../components/g75Lectio/" + props.language + "/CapIerCh17V13.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/CapIerCh17V18.vue")
        ), // Hebdomada Sancta Ad Sextam
        capitulumTR: defineAsyncComponent(
          () => import("../components/g75Lectio/" + props.language + "/CapIerCh17V18.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/CapIerCh18V20.vue")
        ), // Hebdomada Sancta Ad Nonam
        capitulumTR: defineAsyncComponent(
          () => import("../components/g75Lectio/" + props.language + "/CapIerCh18V20.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/XFactusEstFeria5.vue")
        ), // Feria V
        capitulumTR: defineAsyncComponent(
          () =>
            import("../components/g75Lectio/" + props.language + "/XFactusEstFeria5.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/XFactusEstFeria6.vue")
        ), // Feria VI
        capitulumTR: defineAsyncComponent(
          () =>
            import("../components/g75Lectio/" + props.language + "/XFactusEstFeria6.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/XFactusEstFeria7.vue")
        ), // Feria VII
        capitulumTR: defineAsyncComponent(
          () =>
            import("../components/g75Lectio/" + props.language + "/XFactusEstFeria7.vue")
        ),
      },
    ];
    i = 0;
    if (feastNum == 1) {
      i = officeNum/3;                            // 1 , 2 , 3
    } else if (feastNum > 1 && feastNum < 5) {
      i = ( officeNum/3 ) + 3;                    // 4 , 5 , 6
    } else if (feastNum > 4 && feastNum < 8) {
      i = feastNum + 2;                           // 7 , 8 , 9
    }
    const officeCapitulum = arrayCapitulum[i];
    const arrayOratio = [
      { oratio: null, oratioTR: null },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/OraQuiHumanoGeneri.vue")
        ), // Dom. in Palmis
        oratioTR: defineAsyncComponent(
          () =>
            import(
              "../components/g80Oratio/" + props.language + "/OraQuiHumanoGeneri.vue"
            )
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/OraUtQuiInTot.vue")
        ), // Feria II
        oratioTR: defineAsyncComponent(
          () => import("../components/g80Oratio/" + props.language + "/OraUtQuiInTot.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/OraDaNobisIta.vue")
        ), // Feria III
        oratioTR: defineAsyncComponent(
          () => import("../components/g80Oratio/" + props.language + "/OraDaNobisIta.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/OraUtQuiNostri.vue")
        ), // Feria IV
        oratioTR: defineAsyncComponent(
          () =>
            import("../components/g80Oratio/" + props.language + "/OraUtQuiNostri.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/OraSuperHancFamiliamTriduo.vue")
        ), // Feria V, VI, VII
        oratioTR: defineAsyncComponent(
          () =>
            import(
              "../components/g80Oratio/" + props.language + "/OraSuperHancFamiliam.vue"
            )
        ),
      },
    ];
    i = 0;
    if (feastNum < 5) {
      i = feastNum;
    } else if (feastNum > 4 && feastNum < 8) {
      i = 5;
    }
    const officeOratio = arrayOratio[i];
    const arrayFinalHora = [
      {
        kyrie: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/Kyrie.vue")
        ),
        pater: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/PaterNosterSilentio.vue")
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
      typeOffice,
      officeCurrent,
      officeAntElement,
      officeTempusLiturgicus1,
      officeTempusLiturgicus2,
      officeCapitulum,
      DoxChristumRogamus,
      officeOratio,
      officeFinalHora,
      home,
      arrowBackSharp,
    };
  },
});
</script>
