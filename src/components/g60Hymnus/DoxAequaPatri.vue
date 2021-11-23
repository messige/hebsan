<template>
Aequa Patri Filioque,<br />
inclito Paraclito,<br />
sempiterna sit beatae <br />
Trinitati gloria,<br />
cuius alma nos redemit<br />
atque servat gratia.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Au Père et à son Fils,<br />
        à l'illustre Consolateur,<br />
        à l'heureuse Trinité,<br />
        gloire égale et éternelle,<br />
        car sa grâce bienfaisante <br />
        nous rachète et nous sauve.
    </template>
    <template v-if="state.language == 'de'">
        Dem Vater und dem Sohn, <br>dem ruhmreichen Tröster,<br>
        der heiligen Dreieinigkeit,<br>
        sei gleiche und ewige Herrlichkeit,<br>
        deren wohltätige Gnade<br>
        uns erlöst und errettet.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
</template>
<script>
    import { useState }         from '../../store/store';
    export default {
        setup ( ) {
            const state         = useState ( ) ;
            return { state }
    }
  }
</script>
