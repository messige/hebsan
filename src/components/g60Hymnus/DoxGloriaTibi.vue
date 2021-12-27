<template>
Glória tibi Dómine,<br />
Qui surrexísti a mórtuis,<br />
cum Patre et Sancto Spíritu,<br />
in sempitérna sǽcula. Amen.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Gloire à Vous, Seigneur,<br />
        ressuscité d’entre les morts ;<br />
        avec le Père et l’Esprit bienfaisant,<br />
        dans les siècles éternels. Ainsi soit-il.
    </template>
    <template v-if="lang == 'de'">
        Ehre sei dir, o Herr,<br />
        der du von den Toten erstanden bist;<br />
        mit dem Vater und dem Heiligen Geist<br />
        in alle Ewigkeit.
    </template>
</ion-text></ion-col> </ion-row></ion-grid>
</template>
<script setup lang="ts">
let lang = "fr";
const language = localStorage.getItem("lang");
if (language) {
  lang = language;
}
</script>

