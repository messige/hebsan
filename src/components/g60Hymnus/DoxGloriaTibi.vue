<template>
Glória tibi Dómine,<br />
Qui surrexísti a mórtuis,<br />
cum Patre et Sancto Spíritu,<br />
in sempitérna sǽcula. Amen.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="state.language == 'fr'">
        Gloire à Vous, Seigneur,<br />
        ressuscité d’entre les morts ;<br />
        avec le Père et l’Esprit bienfaisant,<br />
        dans les siècles éternels. Ainsi soit-il.
    </template>
    <template v-if="state.language == 'de'">
        Ehre sei dir, o Herr,<br />
        der du von den Toten erstanden bist;<br />
        mit dem Vater und dem Heiligen Geist<br />
        in alle Ewigkeit.
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
