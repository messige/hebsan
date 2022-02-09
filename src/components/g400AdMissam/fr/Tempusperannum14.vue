<template>
<!-- - keyCalendar = 151 - keyPiece = 8911 - keyText = 9121 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Suscepimus, Deus,<br />
misericordiam tuam in medio templi tui.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nous avons reçu, Dieu,<br />
votre miséricorde, au milieu de votre temple.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 8586 --> Secundum nomen tuum, Domine (Deus),<br />
ita et laus tua in fines terrae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Comme votre nom, Seigneur (Dieu),<br />
telle aussi votre louange jusqu’aux confins de la terre.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 5413 --> Iustitia plena est dextera tua.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Votre droite est remplie de justice.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 5777 -->Ps. Magnus Dominus et laudabilis valde (nimis),<br />
in civitate Dei (nostri), in monte sancto eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Grand est le Seigneur, et digne de louange infiniment,<br />
dans la cité de (notre) Dieu, sur sa montagne sainte.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 3327 - keyText = 3376 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Esto mihi in Deum protectorem,<br />
et in locum refugii,<br />
ut salvum me facias.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Soyez pour moi un Dieu protecteur,<br />
et un lieu fortifié :<br />
qu’ainsi vous me sauviez.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 2215 -->V./  Deus, in te speravi:<br />
Domine, non confundar in aeternum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dieu, en vous j’ai mis mon espérance :<br />
Seigneur, je ne serai pas confondu à jamais.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 9479 - keyText = 9710 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Venite ad me,<br />
omnes qui laboratis,<br />
et onerati estis :<br />
et ego reficiam vos.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Venez à moi, vous tous qui peinez<br />
et ployez sous le fardeau,<br />
et moi je vous soulagerai.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5670 - keyText = 5777 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Magnus Dominus et laudabilis valde (nimis),<br />
in civitate Dei (nostri), in monte sancto eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Grand est le Seigneur, et digne de louange infiniment,<br />
dans la cité de (notre) Dieu, sur sa montagne sainte.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 7060 - keyText = 7181 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Populum humilem salvum facies, Domine,<br />
et oculos superborum humiliabis :<br />
quoniam quis Deus praeter te, Domine ?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous sauverez le peuple humble, Seigneur,<br />
et les regards des orgueilleux, vous les abaisserez :<br />
car qui est Dieu, à part vous, Seigneur ?</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 4070 - keyText = 4203 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Gustate et videte, quoniam suavis est Dominus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Goûtez et voyez combien le Seigneur est doux.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 1092 --> Beatus vir qui sperat in eo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heureux l’homme qui met son espérance en lui.</ion-text></ion-col></ion-row></ion-grid>
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