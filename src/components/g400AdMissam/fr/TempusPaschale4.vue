<template>
<!-- - keyCalendar = 103 - keyPiece = 5906 - keyText = 6018 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Misericordia Domini plena est terra, alleluia :<br />
verbo Dei caeli <span class="fc">firmati sunt</span>.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">La terre est remplie de la miséricorde du Seigneur, alléluia :<br />
c’est par le verbe de Dieu que les cieux ont été affermis.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3727 -->Ps. Exsultate iusti in Domino,<br />
rectos decet collaudatio.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Exultez, vous les justes, dans le Seigneur :<br />
aux hommes droits il appartient de le chanter en chœur !</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 7766 - keyText = 7995 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Redemptionem misit Dominus in populo suo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le Seigneur a envoyé la rédemption à son peuple.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 3138 - keyText = 3184 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Ego sum pastor bonus,<br />
et cognosco oves meas,<br />
et cognoscunt me meae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">C'est moi qui suis le bon pasteur;<br />
et je connais mes brebis,<br />
et mes brebis me connaissent.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 2160 - keyText = 2194 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Deus, Deus meus, ad te de luce vigilo :<br />
et in nomine tuo levabo manus meas.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Dieu, mon Dieu, vers vous je veille dès l’aurore :<br />
et en votre nom j’élèverai mes mains.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 3139 - keyText = 3184 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ego sum pastor bonus,<br />
et cognosco oves meas,<br />
et cognoscunt me meae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">C'est moi qui suis le bon pasteur;<br />
et je connais mes brebis,<br />
et mes brebis me connaissent.</ion-text></ion-col></ion-row></ion-grid>

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