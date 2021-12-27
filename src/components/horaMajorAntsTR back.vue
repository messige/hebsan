<template>
    <rubrique>Antiphonae</rubrique><br />
    <template v-for="(thisAnt, antID) in officeAnt" :key="antID">
      <component :is="thisAnt.ant" />
      <ion-grid
        ><ion-row>
          <ion-col>&nbsp;</ion-col>
          <ion-col size="11"
            ><ion-text color="tertiary">
              <component :is="thisAnt.antTR" /> </ion-text></ion-col></ion-row
      ></ion-grid>
      <component :is="thisAnt.psalmTR" /><br />
    </template>
</template>

<script lang="ts">
import { IonGrid, IonRow, IonCol, IonText } from "@ionic/vue";
import { defineAsyncComponent } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HoraMajorAntsTr",
  components: { IonGrid, IonRow, IonCol, IonText },
  props: {
    feast: { type: Number, required: true },
    office: { type: Number, required: true },
    lang: { type: String, required: true },
  },
  setup(props) {
    const arrayFeasts = [
      {
        arrayOfffice: [
          [
            // Ad Laudes
            { antID: 1, ant: " ", antTR: " ", psalmTR: " " },
          ],
          [
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntRegnumTuum.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntRegnumTuum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps144.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntLaudaboDeum.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntLaudaboDeum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps145.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDeoNostro.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntDeoNostro.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps146.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntLaudaIerusalem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntLaudaIerusalem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps147.vue")
              ),
            },
          ],
        ],
        arrayCant: [
          { ant: " ", antTR: " ", cant: " " },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntPaterIuste.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.lang + "/AntPaterIuste.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantMagnificat.vue")
            ),
          },
        ],
      },
      {
        arrayOfffice: [
          [
            // Ad Laudes
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDomDeusAuxiliator.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntDomDeusAuxiliator.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps050.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/AntCircumdantesCircumdederunt.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntCircumdantesCircumdederunt.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps117.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntIudicaCausam.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntIudicaCausam.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps062.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntCumAngelisEtPueris.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntCumAngelisEtPueris.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g65Psalmodia/" + props.lang + "/CantTriumPuerorum.vue"
                  )
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntConfundanturQuiMe.vue"
                  )
              ),
              antTR: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntConfundanturQuiMe.vue")
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/Ps148149150.vue")
              ),
            },
          ],
          [
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDixitDomDom.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntDixitDomDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps109.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntMagnaOperaDom.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntMagnaOperaDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps110.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntQuiTimetDom.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntQuiTimetDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps111.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntSitNomenDom.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntSitNomenDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps112.vue")
              ),
            },
          ],
        ],
        arrayCant: [
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntTurbaMulta.vue")
            ), // ant. Ad Benedictus Ad Laudes
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.lang + "/AntTurbaMulta.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantBenedictus.vue")
            ),
          },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntScriptumEstEnim.vue")
            ), // ant. Ad Magnificat Ad Vesperas
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.lang + "/AntScriptumEstEnim.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantMagnificat.vue")
            ),
          },
        ],
      },
      {
        arrayOfffice: [
          [
            // Ad Laudes
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntFaciemMeam.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntFaciemMeam.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps050.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntFramea2.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntFramea2.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps005.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAppenderunt.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntAppenderunt.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps035.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntInundaveruntAquae.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntInundaveruntAquae.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/CantIsaie12.vue")
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntLabiaInsurgentibus.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntLabiaInsurgentibus.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/Ps148149150.vue")
              ),
            },
          ],
          [
            // Ad Vesperas
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntNosQuiVivimus.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntNosQuiVivimus.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps113.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntInclinavitDom.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntInclinavitDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps114.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntCredidiPropter.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntCredidiPropter.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/Ps115-116.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntSaepeExpungaverunt.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntSaepeExpungaverunt.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps128.vue")
              ),
            },
          ],
        ],
        arrayCant: [
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntClarificaMe.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.lang + "/AntClarificaMe.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantBenedictus.vue")
            ),
          },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntNonHaberes.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.lang + "/AntNonHaberes.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantMagnificat.vue")
            ),
          },
        ],
      },
      {
        arrayOfffice: [
          [
            // Ad Laudes
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntVideDomEtConsidera.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntVideDomEtConsidera.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps050.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDiscerneCausam.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntDiscerneCausam.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps042.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDumTribularer.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntDumTribularer.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps056.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDomVim.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntDomVim.vue")
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g65Psalmodia/" + props.lang + "/CantTriumPuerorum.vue"
                  )
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDixeruntImpii.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntDixeruntImpii.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/Ps148149150.vue")
              ),
            },
          ],
          [
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDeProfundis.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntDeProfundis.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps129.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntSperetIsrael.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntSperetIsrael.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps130.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEtOmnis.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntEtOmnis.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps131.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEcceQuam.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntEcceQuam.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps132.vue")
              ),
            },
          ],
        ],
        arrayCant: [
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntAnteDiemPaschae.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.lang + "/AntAnteDiemPaschae.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantBenedictus.vue")
            ),
          } /* same as Feast 1 */,
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntPotestatemHabeo2.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.lang + "/AntPotestatemHabeo2.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantMagnificat.vue")
            ),
          },
        ],
      },
      {
        arrayOfffice: [
          [
            // Ad Laudes
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntLiberaMe.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntLiberaMe.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps050.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntContumeliasEtTerrores.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntContumeliasEtTerrores.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps063.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntIpsiVeroInVanum2.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntIpsiVeroInVanum2.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps064.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntOmnesInimici.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntOmnesInimici.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/Cant1Sam02.vue")
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAlligaDom.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntAlligaDom.vue")
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/Ps148149150.vue")
              ),
            },
          ],
          [
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntOmniaQuaecumque.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntOmniaQuaecumque.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps134.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntQuoniamInAeternum.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntQuoniamInAeternum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps135.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntHymnumCantate.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntHymnumCantate.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps136.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntInConspectuAngelorum.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntInConspectuAngelorum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps137.vue")
              ),
            },
          ],
        ],
        arrayCant: [
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntSimonDormis.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.lang + "/AntSimonDormis.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantBenedictus.vue")
            ),
          },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntAncillaDixit.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.lang + "/AntAncillaDixit.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantMagnificat.vue")
            ),
          },
        ],
      },
      {
        arrayOfffice: [
          [
            // Ad Laudes
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntIustificerisDom.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntIustificerisDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps050.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDomTamquam.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntDomTamquam.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps089.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntContritumEst.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntContritumEst.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps035.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntExhortatusEs.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntExhortatusEs.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/CantEx15.vue")
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntOblatusEst.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntOblatusEst.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps146.vue")
              ),
            },
          ],
          [{ antID: 1, ant: " ", antTR: " ", psalmTR: " " }],
        ],
        arrayCant: [
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntTraditorAutem.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.lang + "/AntTraditorAutem.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantBenedictus.vue")
            ),
          },
          { ant: " ", antTR: " ", cant: " " },
        ],
      },
      {
        arrayOfffice: [
          [
            // Ad Laudes
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntProprioFilio.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntProprioFilio.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps050.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAnxiatusEst.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntAnxiatusEst.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps142.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAitLatro.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntAitLatro.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps084.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDumConturbata.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntDumConturbata.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/Cant1Hab03.vue")
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntMementoMei.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntMementoMei.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps147.vue")
              ),
            },
          ],
          [{ antID: 1, ant: " ", antTR: " ", psalmTR: " " }],
        ],
        arrayCant: [
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntPosueruntSuper.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.lang + "/AntPosueruntSuper.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantBenedictus.vue")
            ),
          }, // // Benedcitus same as Cant51
          { ant: " ", antTR: " ", cant: " " },
        ],
      },

      {
        arrayOfffice: [
          [
            // Ad Laudes
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntOMors.vue")
              ),
              antTR: defineAsyncComponent(
                () => import("../components/g50Antiphona/" + props.lang + "/AntOMors.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps050.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntPlangentEum.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntPlangentEum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps091.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAttenditeUniversi.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntAttenditeUniversi.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps063.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAPortaInferi.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntAPortaInferi.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/CantIsaie38.vue")
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntOVosOmnes.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntOVosOmnes.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps150.vue")
              ),
            },
          ],
          [{ antID: 1, ant: " ", antTR: " ", psalmTR: " " }],
        ],
        arrayCant: [
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntMulieresSedentes.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.lang + "/AntMulieresSedentes.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantBenedictus.vue")
            ),
          }, // Benedictus same as 5th feast                                                                    // Benedictus same as 5th feast
          { ant: " ", antTR: " ", cant: " " },
        ],
      },
      {
        arrayOfffice: [
          [
            // Ad Laudes
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAngelusAutem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntAngelusAutem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps092.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEtEcceTerraemotus.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntEtEcceTerraemotus.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps099.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEratAutem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntEratAutem.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps062.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntPraeTimore.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntPraeTimore.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g65Psalmodia/" + props.lang + "/CantTriumPuerorum.vue"
                  )
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntRespondensAutem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntRespondensAutem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.lang + "/Ps148149150.vue")
              ),
            },
          ],
          [
            {
              antID: 1,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAngelusAutem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntAngelusAutem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps109.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEtEcceTerraemotus.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.lang +
                      "/AntEtEcceTerraemotus.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps110.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEratAutem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.lang + "/AntEratAutem.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps111.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntRespondensAutem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.lang + "/AntRespondensAutem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.lang + "/Ps112.vue")
              ),
            },
          ],
        ],
        arrayCant: [
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntEtValdeMane.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.lang + "/AntEtValdeMane.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantBenedictus.vue")
            ),
          },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntEtRespicientes.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.lang + "/AntEtRespicientes.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.lang + "/CantMagnificat.vue")
            ),
          },
        ],
      },
    ];
    const feastNum = +props.feast;
    const officeNum = +props.office;
    const feastCurrent = arrayFeasts[feastNum - 1]; // Feast is 1,2,... while index in table is 0,1,...
    const officeAnt = feastCurrent.arrayOfffice[officeNum - 1];
    const officeCant = feastCurrent.arrayCant[officeNum - 1];
    return { officeAnt, officeCant };
  },
});
</script>
