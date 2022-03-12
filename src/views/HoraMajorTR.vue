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
        <br />{{ officeCurrent.officeName }}
      </h2>
      <br />
      <component :is="officeInAdiutorium.inAdiutorium" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component
                :is="officeInAdiutorium.inAdiutoriumTR"
              /> </ion-text></ion-col></ion-row
      ></ion-grid>
      <component :is="officeInAdiutoriumFin.inAdiutoriumFin" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component
                :is="officeInAdiutoriumFin.inAdiutoriumFinTR"
              /> </ion-text></ion-col></ion-row
      ></ion-grid>
      <rubrique>Antiphonae</rubrique><br />
      <template v-for="(thisAnt, antID) in officeAnt" :key="antID">
        <component :is="thisAnt.antLA" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="thisAnt.antTR" /> </ion-text></ion-col></ion-row
        ></ion-grid>
        <component :is="thisAnt.psalmTR" /><br />
      </template>
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
      <template v-if="officeRespons.respons != null">
        <p>
          <rubrique>Responsum</rubrique><br />
          <component :is="officeRespons.respons" />
          <ion-grid
            ><ion-row>
              <ion-col>&nbsp;</ion-col>
              <ion-col size="11"
                ><ion-text color="tertiary">
                  <component
                    :is="officeRespons.responsTR"
                  /> </ion-text></ion-col></ion-row
          ></ion-grid>
        </p>
      </template>
      <template v-if="officeHymnus != null">
        <p>
          <rubrique>Hymnus</rubrique><br />
          <component :is="officeHymnus" />
          <component :is="officeDoxology" />
        </p>
      </template>
      <p>
        <rubrique>Versus</rubrique><br />
        <component :is="officeVersus.versus" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeVersus.versusTR" /> </ion-text></ion-col></ion-row
        ></ion-grid>
      </p>
      <p>
        <rubrique>{{ officeCantRubr }}</rubrique
        ><br />
        <component :is="officeCant.antLA" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeCant.antTR" /> </ion-text></ion-col></ion-row
        ></ion-grid>
        <component :is="officeCant.cantTR" />
      </p>
      <p>
        <component :is="officeKyrie.kyrieAnt" />
        <template v-if="officeKyrie.kyrieAntTR != null">
          <ion-grid
            ><ion-row>
              <ion-col>&nbsp;</ion-col>
              <ion-col size="11"
                ><ion-text color="tertiary">
                  <component
                    :is="officeKyrie.kyrieAntTR"
                  /> </ion-text></ion-col></ion-row
          ></ion-grid>
        </template>
      </p>
      <p><component :is="officeOraFinal.Pater" /></p>
      <p><component :is="officeOraFinal.DomVobis" /></p>
      <p>
        <component :is="officeOratio.oratio" />
        <ion-grid
          ><ion-row>
            <ion-col>&nbsp;</ion-col>
            <ion-col size="11"
              ><ion-text color="tertiary">
                <component :is="officeOratio.oratioTR" /> </ion-text></ion-col></ion-row
        ></ion-grid>
      </p>
      <p><component :is="officeOraFinal.DomVobis" /></p>
      <component :is="officeBenedicamusDom.benedicamusDom" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component
                :is="officeBenedicamusDom.benedicamusDomTR"
              /> </ion-text></ion-col></ion-row
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
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/vue";
import { defineAsyncComponent } from "vue";
import { getFeast } from "../data/feastsTable";
import { getOffice } from "../data/officesTable";
import { arrowBackSharp, home } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HoraMajorTr",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
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
    const objLanguage = new String(props.language);
    const language = objLanguage.toLowerCase();
    const feastCurrent = getFeast(feastNum);
    const officeCurrent = getOffice(officeNum);
    const arrayInAdiutorium = [
      { inAdiutorium: null, inAdiutoriumTR: null },
      {
        inAdiutorium: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/InAdiutorium.vue")
        ),
        inAdiutoriumTR: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + language + "/InAdiutorium.vue")
        ),
      },
    ];
    let i = 0;
    if (feastNum < 5 || feastNum > 7) {
      i = 1;
    } /* Aux Laudes et aux Vêpres de la Semaine Sainte */
    const officeInAdiutorium = arrayInAdiutorium[i];
    const arrayInAdiutoriumFin = [
      { inAdiutoriumFin: null, inAdiutoriumFinTR: null },
      {
        inAdiutoriumFin: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/LausTibi.vue")
        ),
        inAdiutoriumFinTR: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/" + language + "/LausTibi.vue")
        ),
      },
      {
        inAdiutoriumFin: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/AlleluiaWord.vue")
        ),
        inAdiutoriumFinTR: null,
      },
    ];
    i = 0;
    if (feastNum < 5 ) {
      i = 1;
    } /* Aux Laudes et aux Vêpres de la Seamine Sainte */ else if (feastNum == 8) {
      i = 2;
    } /* Le Dimanche de Pâques   */
    const officeInAdiutoriumFin = arrayInAdiutoriumFin[i];

    interface PsCant {
      psCantID: number;
      ants: Array<{
        antID: number;
        antLA: any;
        antTR: any;
        psalmTR: any;
      }>;
      cant: {
        antLA: any;
        antTR: any;
        cantTR: any;
      };
    }
    const arrayPsCant: PsCant[] = [
      {
        psCantID: 0, //if psCantID not found
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/EmptyTemplate.vue")
            ),
            antTR: defineAsyncComponent(
              () => import("../components/g50Antiphona/" + props.language + "/EmptyTemplate.vue")
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/EmptyTemplate.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/EmptyTemplate.vue")
          ),
          antTR: defineAsyncComponent(
            () => import("../components/g50Antiphona/" + props.language + "/EmptyTemplate.vue")
          ),
          cantTR: defineAsyncComponent(
            () => import("../components/g65Psalmodia/" + props.language + "/EmptyTemplate.vue")
          ),
        },
      },
      {
        psCantID: 2, //feastID: 0 Domenica in Palmis - la veille  Ad Vesperas officeID = 2
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntRegnumTuum.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntRegnumTuum.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr144.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntLaudaboDeum.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntLaudaboDeum.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr145.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDeoNostro.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntDeoNostro.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr146.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntLaudaIerusalem.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntLaudaIerusalem.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr147.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntPaterIuste.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntPaterIuste.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue"
              )
          ),
        },
      },
      {
        psCantID: 11, // Domenica in Palmis Ad Laudes feastID: 1 officeID = 1
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDomDeusAuxiliator.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntDomDeusAuxiliator.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr050.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntCircumdantesCircumdederunt.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntCircumdantesCircumdederunt.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr117.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntIudicaCausam.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntIudicaCausam.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr062.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntCumAngelisEtPueris.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntCumAngelisEtPueris.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" +
                    props.language +
                    "/CantTriumPuerorum.vue"
                )
            ),
          },
          {
            antID: 5,
            antLA: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntConfundanturQuiMe.vue"
                )
            ),
            antTR: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntConfundanturQuiMe.vue")
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" + props.language + "/PsTr148149150.vue"
                )
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntTurbaMulta.vue")
          ), // ant. Ad Benedictus Ad Laudes
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntTurbaMulta.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue"
              )
          ),
        },
      },
      {
        psCantID: 12, // Domenica in Palmis Ad Vesperas feastID: 1 officeID = 2
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDixitDomDom.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntDixitDomDom.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr109.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntMagnaOperaDom.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntMagnaOperaDom.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr110.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntQuiTimetDom.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntQuiTimetDom.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr111.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntSitNomenDom.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntSitNomenDom.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr112.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntScriptumEstEnim.vue")
          ), // ant. Ad Magnificat Ad Vesperas
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntScriptumEstEnim.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue"
              )
          ),
        },
      },
      {
        psCantID: 21, //Hebdomada Sancta Feria II' ,  feastID: 2 officeID = 1
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntFaciemMeam.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntFaciemMeam.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr050.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntFrameaSuscitare.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.language + "/AntFrameaSuscitare.vue")
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr005.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntAppenderunt.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntAppenderunt.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr035.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntInundaveruntAquae.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntInundaveruntAquae.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" + props.language + "/CantIsaie12.vue"
                )
            ),
          },
          {
            antID: 5,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntLabiaInsurgentium.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntLabiaInsurgentium.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" + props.language + "/PsTr148149150.vue"
                )
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntClarificaMe.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntClarificaMe.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue"
              )
          ),
        },
      },
      {
        psCantID: 22, //Hebdomada Sancta Feria II' ,  feastID: 2 officeID = 2
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntNosQuiVivimus.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntNosQuiVivimus.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr113.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntInclinavitDom.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntInclinavitDom.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr114.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntCredidiPropter.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntCredidiPropter.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/PsTr115-116.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntSaepeExpungaverunt.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntSaepeExpungaverunt.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr128.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntNonHaberes.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntNonHaberes.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue"
              )
          ),
        },
      },
      {
        psCantID: 31, //Hebdomada Sancta Feria III,  feastID:3 officeID = 1
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntVideDom.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntVideDom.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr050.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDiscerneCausam.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntDiscerneCausam.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr042.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDumTribularer.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntDumTribularer.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr056.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDomVim.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.language + "/AntDomVim.vue")
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" +
                    props.language +
                    "/CantTriumPuerorum.vue"
                )
            ),
          },
          {
            antID: 5,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDixeruntImpii.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntDixeruntImpii.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" + props.language + "/PsTr148149150.vue"
                )
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntAnteDiemPaschae.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntAnteDiemPaschae.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue"
              )
          ),
        },
      },
      {
        psCantID: 32, //Hebdomada Sancta Feria III,  feastID:3 officeID = 2
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDeProfundis.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntDeProfundis.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr129.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntSperetIsrael.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntSperetIsrael.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr130.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntEtOmnis.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.language + "/AntEtOmnis.vue")
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr131.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntEcceQuam.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntEcceQuam.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr132.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntPotestatemHabeo.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" +
                  props.language +
                  "/AntPotestatemHabeo.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue"
              )
          ),
        },
      },
      {
        psCantID: 41, //Hebdomada Sancta Feria IV,  feastID:4 officeID = 1
        ants: [
          // Ad Laudes
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntLiberaMe.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntLiberaMe.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr050.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntContumeliasEtTerrores.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntContumeliasEtTerrores.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr063.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntIpsiVero.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntIpsiVero.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr064.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntOmnesInimici.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntOmnesInimici.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/Cant1Sam02.vue")
            ),
          },
          {
            antID: 5,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntAlligaDom.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntAlligaDom.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" + props.language + "/PsTr148149150.vue"
                )
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntSimonDormis.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntSimonDormis.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue"
              )
          ),
        },
      },
      {
        psCantID: 42, //Hebdomada Sancta Feria IV,  feastID:4 officeID = 2
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntOmniaQuaecumque.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntOmniaQuaecumque.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr134.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntQuoniamInAeternum.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntQuoniamInAeternum.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr135.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntHymnumCantate.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntHymnumCantate.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr136.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntInConspectuAngelorum.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntInConspectuAngelorum.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr137.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntAncillaDixit.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntAncillaDixit.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue"
              )
          ),
        },
      },
      {
        psCantID: 51, //Hebdomada Sancta Feria V - In Coena Domini,  feastID:5 officeID = 1
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntIustificerisDom.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntIustificerisDom.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr050.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDomTamquam.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntDomTamquam.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr089.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntContritumEst.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntContritumEst.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr035.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntExhortatusEs.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntExhortatusEs.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantEx15.vue")
            ),
          },
          {
            antID: 5,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntOblatusEst.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntOblatusEst.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr146.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntTraditorAutem.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntTraditorAutem.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue"
              )
          ),
        },
      },
      //Hebdomada Sancta Feria V - In Coena Domini,  Non sunt Vesperas
      {
        psCantID: 61, //Hebdomada Sancta Feria VI - In Parasceve,  feastID:6 officeID = 1
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntProprioFilio.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntProprioFilio.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr050.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntAnxiatusEst.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntAnxiatusEst.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr142.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntAitLatro.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntAitLatro.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr084.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntDumConturbata.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntDumConturbata.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/Cant1Hab03.vue")
            ),
          },
          {
            antID: 5,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntMementoMei.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntMementoMei.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr147.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntPosueruntSuper.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntPosueruntSuper.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue"
              )
          ),
        }, // Benedcitus same as Cant51
        //Hebdomada Sancta Feria VI - In Parasceve,  Non sunt Vesperas
      },
      {
        psCantID: 71, //Hebdomada Sancta Feria VII - Sabbato Sancto,  feastID:7 officeID = 1
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntOMors.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.language + "/AntOMors.vue")
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr050.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntPlangentEum.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntPlangentEum.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr091.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntAttenditeUniversi.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntAttenditeUniversi.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr063.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntAPortaInferi.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntAPortaInferi.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" + props.language + "/CantIsaie38.vue"
                )
            ),
          },
          {
            antID: 5,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntOVosOmnes.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntOVosOmnes.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr150.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntMulieresSedentes.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" +
                  props.language +
                  "/AntMulieresSedentes.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue"
              )
          ),
        }, // Benedictus same as 5th feast
        //Hebdomada Sancta Feria VII - Sabbato Sancto,  Non sunt Vesperas
      },
      {
        psCantID: 81, //Resurrectio Domini,  feastID:8 officeID = 1
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntAngelusAutem.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntAngelusAutem.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr092.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntEtEcceTerraemotus.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntEtEcceTerraemotus.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr099.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntEratAutem.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntEratAutem.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr062.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntPraeTimore.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntPraeTimore.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" +
                    props.language +
                    "/CantTriumPuerorum.vue"
                )
            ),
          },
          {
            antID: 5,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntRespondensAutem.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntRespondensAutem.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g65Psalmodia/" + props.language + "/PsTr148149150.vue"
                )
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntEtValdeMane.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntEtValdeMane.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue"
              )
          ),
        },
      },
      {
        psCantID: 82, //Resurrectio Domini,  feastID:8 officeID = 2
        ants: [
          {
            antID: 1,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntAngelusAutem.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntAngelusAutem.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr109.vue")
            ),
          },
          {
            antID: 2,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntEtEcceTerraemotus.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntEtEcceTerraemotus.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr110.vue")
            ),
          },
          {
            antID: 3,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntEratAutem.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntEratAutem.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr111.vue")
            ),
          },
          {
            antID: 4,
            antLA: defineAsyncComponent(
              () => import("../components/g50Antiphona/la/AntRespondensAutem.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" +
                    props.language +
                    "/AntRespondensAutem.vue"
                )
            ),
            psalmTR: defineAsyncComponent(
              () => import("../components/g65Psalmodia/" + props.language + "/PsTr112.vue")
            ),
          },
        ],
        cant: {
          antLA: defineAsyncComponent(
            () => import("../components/g50Antiphona/la/AntEtRespicientes.vue")
          ),
          antTR: defineAsyncComponent(
            () =>
              import(
                "../components/g50Antiphona/" + props.language + "/AntEtRespicientes.vue"
              )
          ),
          cantTR: defineAsyncComponent(
            () =>
              import(
                "../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue"
              )
          ),
        },
      },
    ];
    const feastOfficeID = feastNum * 10 + officeNum;
    function getOfficeAnt(feastOfficeID: number) {
      const myArray = arrayPsCant.find((m) => m.psCantID === feastOfficeID);
      if (myArray) {
        return myArray;
      } else return arrayPsCant[0];
    }
    const officeAntCant = getOfficeAnt(feastOfficeID);
    const officeAnt = officeAntCant.ants;
    const officeCant = officeAntCant.cant;
    const arrayCapitulum = [
      { capitulum: null, capitulumTR: null },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/la/CapPhilCh02V05.vue")
        ), // Dom. in Palmis
        capitulumTR: defineAsyncComponent(
          () => import("../components/g75Lectio/" + language + "/CapPhilCh02V05.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/la/CapIerCh11V19.vue")
        ), // Ad Laudes Quadragesimae
        capitulumTR: defineAsyncComponent(
          () => import("../components/g75Lectio/" + language + "/CapIerCh11V19.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/la/CapIerCh11V20.vue")
        ), // Ad Vesperas Quadragesimae
        capitulumTR: defineAsyncComponent(
          () => import("../components/g75Lectio/" + language + "/CapIerCh11V20.vue")
        ),
      },
      {
        capitulum: defineAsyncComponent(
          () => import("../components/g75Lectio/la/CapCor1Ch05V07.vue")
        ), // Dom. Resurrectio
        capitulumTR: defineAsyncComponent(
          () => import("../components/g75Lectio/" + language + "/CapCor1Ch05V07.vue")
        ),
      },
    ];
    i = 0;
    if (feastNum == 1 || feastNum == 0) {
      i = 1;
    } else if (feastNum > 1 && feastNum < 5) {
      if (officeNum == 1) {
        i = 2;
      } else if (officeNum == 2) {
        i = 3;
      }
    } else if (feastNum == 8) {
      i = 4;
    }
    const officeCapitulum = arrayCapitulum[i];
    const arrayRespons = [
      { respons: null, responsTR: null },
      {
        respons: defineAsyncComponent(
          () => import("../components/g55Responsum/RepErueAFramea.vue")
        ),
        responsTR: defineAsyncComponent(
          () => import("../components/g55Responsum/" + language + "/RepErueAFramea.vue")
        ),
      }, // Ad Laudes Quadregesimae
      {
        respons: defineAsyncComponent(
          () => import("../components/g00Text/DeOreLeonis.vue")
        ),
        responsTR: defineAsyncComponent(
          () => import("../components/g00Text/" + language + "/DeOreLeonis.vue")
        ),
      }, // Ad Vesperas Quadregesimae
      {
        respons: defineAsyncComponent(
          () => import("../components/g55Responsum/RepSurrexitDom.vue")
        ), //Resurrectio Domini
        responsTR: defineAsyncComponent(
          () =>
            import(
              "../components/g55Responsum/" + language + "/RepSurrexitDom.vue"
            )
        ),
      },
    ];
    i = 0;
    if (feastNum < 5 ) {
      /* Aux Laudes et aux Vêpres de la Semaine Sainte */
      if (officeNum == 1) {
        i = 1;
      } else if (officeNum == 2) {
        i = 2;
      }
    } else if (feastNum == 8) {
      i = 3;
    }
    const officeRespons = arrayRespons[i];
    const arrayHymnus = [
      null,
      defineAsyncComponent(
        () => import("../components/g60Hymnus/" + "HymCruxFidelisTR.vue")
      ), // Ad Laudes Hebdomada Sancta
      defineAsyncComponent(
        () => import("../components/g60Hymnus/" + "HymVexillaRegisTR.vue")
      ), // Ad Vesperas Hebdomada Sancta
      defineAsyncComponent(
        () => import("../components/g60Hymnus/" + "HymAuroraLucisTR.vue")
      ), // Ad Laudes Dom. Resurrectio
      defineAsyncComponent(
        () => import("../components/g60Hymnus/" + "HymAdCoenamAgniTR.vue")
      ),
    ]; // Ad Vesperase Dom. Resurrectio
    const arrayDoxology = [
      null,
      defineAsyncComponent(
        () => import("../components/g60Hymnus/" + "DoxAequaPatri.vue")
      ),
      defineAsyncComponent(
        () => import("../components/g60Hymnus/" + "DoxGloriaTibi.vue")
      ),
    ];
    i = 0;
    if (feastNum < 5) {
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
    const iDisplay = i;
    const officeHymnus = arrayHymnus[i];
    i = 0;
    if (feastNum == 8) {
      i = 2;
    } else if (feastNum < 5) {
      i = 1;
    }
    const officeDoxology = arrayDoxology[i];
    const arrayVersus = [
      {
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/la/VersEripeMeInimicis.vue")
        ), // Ad Laudes Hebdomada Sancta
        versusTR: defineAsyncComponent(
          () => import("../components/g85Versus/" + language + "/VersEripeMeInimicis.vue")
        ),
      },
      {
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/la/VersEripeMeHomine.vue")
        ), // Ad Vesperas Hebdomada Sancta
        versusTR: defineAsyncComponent(
          () => import("../components/g85Versus/" + language + "/VersEripeMeHomine.vue")
        ),
      },
      {
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/la/VersHomoPacis.vue")
        ), // Feria V
        versusTR: defineAsyncComponent(
          () => import("../components/g85Versus/" + language + "/VerHomoPacis.vue")
        ),
      },
      {
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/la/VersCollocavitIn.vue")
        ), // Feria VI
        versusTR: defineAsyncComponent(
          () => import("../components/g85Versus/" + language + "/VerCollocavitIn.vue")
        ),
      },
      {
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/la/VersCaroMea.vue")
        ), // Feria VII
        versusTR: defineAsyncComponent(
          () => import("../components/g85Versus/" + language + "/VerCaroMea.vue")
        ),
      },
      {
        versus: defineAsyncComponent(
          () => import("../components/g85Versus/la/VersHaecDies.vue")
        ), //  Dom. Resurrectio
        versusTR: defineAsyncComponent(
          () => import("../components/g85Versus/" + language + "/VersHaecDies.vue")
        ),
      },
    ];
    i = 0;
    if (feastNum < 5 ) {
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
    const arrayOratio = [
      { oratio: null, oratioTR: null },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraQuiHumanoGeneri.vue")
        ), // Dom. in Palmis
        oratioTR: defineAsyncComponent(
          () => import("../components/g80Oratio/" + language + "/OraQuiHumanoGeneri.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraUtQuiInTot.vue")
        ), // Feria II Ad Laudes
        oratioTR: defineAsyncComponent(
          () => import("../components/g80Oratio/" + language + "/OraUtQuiInTot.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraDaNobisIta.vue")
        ), // Feria III  Ad Laudes
        oratioTR: defineAsyncComponent(
          () => import("../components/g80Oratio/" + language + "/OraDaNobisIta.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraQuiProNobisFilium.vue")
        ), // Feria IV Ad Laudes
        oratioTR: defineAsyncComponent(
          () =>
            import("../components/g80Oratio/" + language + "/OraQuiProNobisFilium.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraAdBeneficiaRecolenda.vue")
        ), // Feria II Ad Vesperas
        oratioTR: defineAsyncComponent(
          () =>
            import("../components/g80Oratio/" + language + "/OraAdBeneficiaRecolenda.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraTuaNosMisericordia.vue")
        ), // Feria III Ad Vesperas
        oratioTR: defineAsyncComponent(
          () =>
            import("../components/g80Oratio/" + language + "/OraTuaNosMisericordia.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraSuperHancFamiliam.vue")
        ), // Feria IV Ad Vesperas
        oratioTR: defineAsyncComponent(
          () =>
            import("../components/g80Oratio/" + language + "/OraSuperHancFamiliam.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraSuperHancFamiliamTriduo.vue")
        ), // Ad Laudes Feria V & Feria VI
        oratioTR: defineAsyncComponent(
          () =>
            import("../components/g80Oratio/" + language + "/OraSuperHancFamiliam.vue")
        ),
      },
      {
        oratio: defineAsyncComponent(
          () => import("../components/g80Oratio/la/OraQuiHodiernaDie.vue")
        ),
        oratioTR: defineAsyncComponent(
          () => import("../components/g80Oratio/" + language + "/OraQuiHodiernaDie.vue")
        ),
      },
    ];
    i = 0;
    if (feastNum == 1 || feastNum == 0) {
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
    const officeOratio = arrayOratio[i];
    const arrayKyrieAnt = [
      { kyrieAnt: null, kyrieAntTR: null },
      {
        kyrieAnt: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/KyrieEleison.vue")
        ),
        kyrieAntTR: null,
      },
      {
        kyrieAnt: defineAsyncComponent(
          () => import("../components/g50Antiphona/la/AntChristusFactusEst5.vue")
        ),
        kyrieAntTR: defineAsyncComponent(
          () =>
            import(
              "../components/g50Antiphona/" + language + "/AntChristusFactusEst5.vue"
            )
        ),
      },
      {
        kyrieAnt: defineAsyncComponent(
          () => import("../components/g50Antiphona/la/AntChristusFactusEst6.vue")
        ),
        kyrieAntTR: defineAsyncComponent(
          () =>
            import(
              "../components/g50Antiphona/" + language + "/AntChristusFactusEst6.vue"
            )
        ),
      },
      {
        kyrieAnt: defineAsyncComponent(
          () => import("../components/g50Antiphona/la/AntChristusFactusEst7.vue")
        ),
        kyrieAntTR: defineAsyncComponent(
          () =>
            import(
              "../components/g50Antiphona/" + language + "/AntChristusFactusEst7.vue"
            )
        ),
      },
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
          () => import("../components/g95InOrdineOfficii/la/PaterNoster.vue")
        ),
        DomVobis: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/DominusVobiscum.vue")
        ),
      },
      {
        Pater: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/PaterNosterTriduum.vue")
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
      { benedicamusDom: null, benedicamusDomTR: null },
      {
        benedicamusDom: defineAsyncComponent(
          () => import("../components/g95InOrdineOfficii/la/BenedicamusDom.vue")
        ),
        benedicamusDomTR: defineAsyncComponent(
          () =>
            import("../components/g95InOrdineOfficii/" + language + "/BenedicamusDom.vue")
        ),
      },
    ];
    i = 0;
    if (feastNum < 5 || feastNum > 7) {
      i = 1;
    }
    const officeBenedicamusDom = arrayBenedicamusDom[i];

    return {
      feastCurrent,
      officeCurrent,
      officeNum,
      feastOfficeID, 
      officeInAdiutorium,
      officeInAdiutoriumFin,
      officeAnt,
      officeCant,
      officeCapitulum,
      officeRespons,
      officeVersus,
      officeHymnus,
      officeDoxology,
      officeCantRubr,
      officeOratio,
      officeKyrie,
      officeOraFinal,
      officeBenedicamusDom,
      arrowBackSharp,
      home,
      iDisplay,
    };
  },
});
</script>
