<template>
<!-- - keyCalendar = 14 - keyPiece = 7999 - keyText = 8224 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Rorate caeli desuper,<br />
et nubes pluant Iustum;<br />
aperiatur terra,<br />
et germinet salvatorem.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Tauet, ihr Himmel, aus der Höhe<br />
und ihr Wolken, lasst regnen den Gerechten.<br />
Es öffne sich die Erde<br />
und spriesse hervor den Heiland.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1262 -->Ps. Caeli enarrant gloriam Dei:<br />
et opera manuum eius annuntiat firmamentum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Die Himmel erzählen die Herrlichkeit Gottes,<br />
und vom Werk seiner Hände kündet das Firmament.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 7256 - keyText = 7382 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Prope est Dominus omnibus invocantibus eum :<br />
omnibus qui invocant eum in veritate.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Der Herr ist allen, die ihn anrufen, nahe,<br />
allen, die zu ihm aufrichtig rufen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 5561 -->V./  Laudem Domini loquetur os meum:<br />
et benedicat omnis caro nomen sanctum eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mein Mund verkünde das Lob des Herrn.<br />
Alles was lebt, preise seinen heiligen Namen.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9428 - keyText = 9660 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Veni, Domine, et noli tardare :<br />
relaxa facinora plebis tuae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Komm, Herr, und zögere nicht.<br />
Vergib die Sünden Deines Volkes.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 796 - keyText = 839 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Ave Maria, gratia plena,<br />
Dominus tecum;<br />
benedicta tu in mulieribus,<br />
et <span class="fc">benedictus est</span> fructus ventris tui.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gegrüßet seist Du, Maria, voll der Gnade,<br />
der Herr ist mit Dir.<br />
Du bist gepriesen unter den Frauen,<br />
und gepriesen ist die Frucht Deines Leibes.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 3059 - keyText = 3099 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ecce virgo concipiet<br />
et pariet filium et vocabitur nomen eius Emmanuel.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seht, die Jungfrau wird empfangen<br />
und einen Sohn gebären. Und genannt wird er: Emmanuel – Gott mit uns.</ion-text></ion-col></ion-row></ion-grid>

</template>
 <br /></template>
 <script lang="ts">
 export default {
 props: {
 annoABC: {
 type: String,
 }
 }
 }
 </script>