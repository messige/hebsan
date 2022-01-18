<template>
<!-- - keyCalendar = 103 - keyTitle = 5267 - prev_keyPiece = 5906 - keyType = 1 - officeYear =  - keyText = 6018 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Misericordia Domini plena est terra, alleluia :<br />
verbo Dei caeli <span class="fc">firmati sunt</span>.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Voll der Huld des Herrn ist die Erde, Halleluja.<br />
Durch das Wort des Herrn wurden die Himmel geschaffen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3727 -->Ps. Exsultate iusti in Domino,<br />
rectos decet collaudatio.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubelt, ihr Gerechten, im Herrn.<br />
Für die Redlichen ziemt sich der Lobpreis.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 103 - keyTitle = 6935 - prev_keyPiece = 7766 - keyType = 3 - officeYear =  - keyText = 7995 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Redemptionem misit Dominus in populo suo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Erlösung hat der Herr seinem Volk gesandt.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 103 - keyTitle = 2807 - prev_keyPiece = 3138 - keyType = 3 - officeYear =  - keyText = 3184 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Ego sum pastor bonus,<br />
et cognosco oves meas,<br />
et cognoscunt me meae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich bin der gute Hirte,<br />
ich kenne meine Schafe<br />
und sie kennen mich.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 103 - keyTitle = 1954 - prev_keyPiece = 2160 - keyType = 5 - officeYear =  - keyText = 2194 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Deus, Deus meus, ad te de luce vigilo :<br />
et in nomine tuo levabo manus meas.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gott, mein Gott, zu dir wache ich vom Werden des Lichtes,<br />
und in deinem Namen will ich meine Hände erheben.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 103 - keyTitle = 2807 - prev_keyPiece = 3139 - keyType = 6 - officeYear =  - keyText = 3184 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ego sum pastor bonus,<br />
et cognosco oves meas,<br />
et cognoscunt me meae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich bin der gute Hirte,<br />
ich kenne meine Schafe<br />
und sie kennen mich.</ion-text></ion-col></ion-row></ion-grid>

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