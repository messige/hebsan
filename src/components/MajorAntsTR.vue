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
    language: { type: String, required: true },
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
                    "../components/g50Antiphona/" + props.language + "/AntRegnumTuum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps144.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntLaudaboDeum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps145.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDeoNostro.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntDeoNostro.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps146.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntLaudaIerusalem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps147.vue")
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
                import("../components/g50Antiphona/" + props.language + "/AntPaterIuste.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue")
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
                      props.language +
                      "/AntDomDeusAuxiliator.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps050.vue")
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
                      props.language +
                      "/AntCircumdantesCircumdederunt.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps117.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntIudicaCausam.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps062.vue")
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
                      props.language +
                      "/AntCumAngelisEtPueris.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g65Psalmodia/" + props.language + "/CantTriumPuerorum.vue"
                  )
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" +
                      props.language +
                      "/AntConfundanturQuiMe.vue"
                  )
              ),
              antTR: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntConfundanturQuiMe.vue")
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.language + "/Ps148149150.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntDixitDomDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps109.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntMagnaOperaDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps110.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntQuiTimetDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps111.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntSitNomenDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps112.vue")
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
                import("../components/g50Antiphona/" + props.language + "/AntTurbaMulta.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue")
            ),
          },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntScriptumEstEnim.vue")
            ), // ant. Ad Magnificat Ad Vesperas
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntScriptumEstEnim.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntFaciemMeam.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps050.vue")
              ),
            },
            {
              antID: 2,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntFramea2.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntFramea2.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps005.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntAppenderunt.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps035.vue")
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
                      props.language +
                      "/AntInundaveruntAquae.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.language + "/CantIsaie12.vue")
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
                      props.language +
                      "/AntLabiaInsurgentibus.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.language + "/Ps148149150.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntNosQuiVivimus.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps113.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntInclinavitDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps114.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntCredidiPropter.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.language + "/Ps115-116.vue")
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
                      props.language +
                      "/AntSaepeExpungaverunt.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps128.vue")
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
                import("../components/g50Antiphona/" + props.language + "/AntClarificaMe.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue")
            ),
          },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntNonHaberes.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import("../components/g50Antiphona/" + props.language + "/AntNonHaberes.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue")
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
                      props.language +
                      "/AntVideDomEtConsidera.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps050.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntDiscerneCausam.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps042.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntDumTribularer.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps056.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntDomVim.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntDomVim.vue")
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g65Psalmodia/" + props.language + "/CantTriumPuerorum.vue"
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
                    "../components/g50Antiphona/" + props.language + "/AntDixeruntImpii.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.language + "/Ps148149150.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntDeProfundis.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps129.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntSperetIsrael.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps130.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEtOmnis.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntEtOmnis.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps131.vue")
              ),
            },
            {
              antID: 4,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEcceQuam.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntEcceQuam.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps132.vue")
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
                  "../components/g50Antiphona/" + props.language + "/AntAnteDiemPaschae.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue")
            ),
          } /* same as Feast 1 */,
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntPotestatemHabeo2.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntPotestatemHabeo2.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue")
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
                  import("../components/g50Antiphona/" + props.language + "/AntLiberaMe.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps050.vue")
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
                      props.language +
                      "/AntContumeliasEtTerrores.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps063.vue")
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
                      props.language +
                      "/AntIpsiVeroInVanum2.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps064.vue")
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
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAlligaDom.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntAlligaDom.vue")
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.language + "/Ps148149150.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntOmniaQuaecumque.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps134.vue")
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
                      props.language +
                      "/AntQuoniamInAeternum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps135.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntHymnumCantate.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps136.vue")
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
                      props.language +
                      "/AntInConspectuAngelorum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps137.vue")
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
                import("../components/g50Antiphona/" + props.language + "/AntSimonDormis.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue")
            ),
          },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntAncillaDixit.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntAncillaDixit.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntIustificerisDom.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps050.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntDomTamquam.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps089.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntContritumEst.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps035.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntExhortatusEs.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/CantEx15.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntOblatusEst.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps146.vue")
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
                  "../components/g50Antiphona/" + props.language + "/AntTraditorAutem.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntProprioFilio.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps050.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntAnxiatusEst.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps142.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntAitLatro.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntAitLatro.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps084.vue")
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
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntMementoMei.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g50Antiphona/" + props.language + "/AntMementoMei.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps147.vue")
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
                  "../components/g50Antiphona/" + props.language + "/AntPosueruntSuper.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue")
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
                () => import("../components/g50Antiphona/" + props.language + "/AntOMors.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps050.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntPlangentEum.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps091.vue")
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
                      props.language +
                      "/AntAttenditeUniversi.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps063.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntAPortaInferi.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.language + "/CantIsaie38.vue")
              ),
            },
            {
              antID: 5,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntOVosOmnes.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntOVosOmnes.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps150.vue")
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
                  "../components/g50Antiphona/" + props.language + "/AntMulieresSedentes.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntAngelusAutem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps092.vue")
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
                      props.language +
                      "/AntEtEcceTerraemotus.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps099.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEratAutem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntEratAutem.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps062.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntPraeTimore.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import(
                    "../components/g65Psalmodia/" + props.language + "/CantTriumPuerorum.vue"
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
                    "../components/g50Antiphona/" + props.language + "/AntRespondensAutem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () =>
                  import("../components/g65Psalmodia/" + props.language + "/Ps148149150.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntAngelusAutem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps109.vue")
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
                      props.language +
                      "/AntEtEcceTerraemotus.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps110.vue")
              ),
            },
            {
              antID: 3,
              ant: defineAsyncComponent(
                () => import("../components/g50Antiphona/AntEratAutem.vue")
              ),
              antTR: defineAsyncComponent(
                () =>
                  import("../components/g50Antiphona/" + props.language + "/AntEratAutem.vue")
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps111.vue")
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
                    "../components/g50Antiphona/" + props.language + "/AntRespondensAutem.vue"
                  )
              ),
              psalmTR: defineAsyncComponent(
                () => import("../components/g65Psalmodia/" + props.language + "/Ps112.vue")
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
                import("../components/g50Antiphona/" + props.language + "/AntEtValdeMane.vue")
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantBenedictus.vue")
            ),
          },
          {
            ant: defineAsyncComponent(
              () => import("../components/g50Antiphona/AntEtRespicientes.vue")
            ),
            antTR: defineAsyncComponent(
              () =>
                import(
                  "../components/g50Antiphona/" + props.language + "/AntEtRespicientes.vue"
                )
            ),
            cant: defineAsyncComponent(
              () =>
                import("../components/g65Psalmodia/" + props.language + "/CantMagnificat.vue")
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
