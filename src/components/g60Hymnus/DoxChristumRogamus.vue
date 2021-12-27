<template>
Christum rogamus et Patrem,<br />
Christi Patrisque Spiritum;<br />
unum potens per omnia,<br />
fove precantes, Trinitas.
<ion-grid> <ion-row><ion-col>&nbsp;</ion-col>
<ion-col size="11"><ion-text color="tertiary">
    <template v-if="lang == 'fr'">
        Implorons le Christ et le Père<br />
        et l´Esprit du Père et du Christ :<br />
        ô Trinité, une et puissante<br />
        daigne écouter ceux qui te prient.
    </template>
    <template v-if="lang == 'de'">
        Christus bitten wir, und den Vater,<br />
        und Christi und des Vaters Geist; <br />
        du eine, mächtig in allem, <br />
        Dreieinigkeit, halte umarmt, die dich bitten.    
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
