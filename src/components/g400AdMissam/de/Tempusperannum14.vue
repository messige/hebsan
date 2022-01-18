<template>
<!-- - keyCalendar = 151 - keyTitle = 7966 - prev_keyPiece = 8911 - keyType = 1 - officeYear =  - keyText = 9121 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Suscepimus, Deus,<br />
misericordiam tuam in medio templi tui.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Empfangen haben wir, Gott,<br />
dein Erbarmen inmitten deines Tempels.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 8586 --> Secundum nomen tuum, Domine (Deus),<br />
ita et laus tua in fines terrae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie dein Name, Herr (Gott),<br />
so reicht dein Ruhm bis an die Enden der Erde.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = C keyText = 5413 --> Iustitia plena est dextera tua.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Von Gerechtigkeit erfüllt ist deine Rechte.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 5777 -->Ps. Magnus Dominus et laudabilis nimis,<br />
in civitate Dei (nostri), in monte sancto eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Groß ist der Herr und hoch zu loben<br />
in der Stadt unseres Gottes, auf seinem heiligen Berg.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 151 - keyTitle = 2976 - prev_keyPiece = 3327 - keyType = 2 - officeYear =  - keyText = 3376 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Esto mihi in Deum protectorem,<br />
et in locum refugii,<br />
ut salvum me facias.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Sei mir ein schützender Gott,<br />
und ein Ort der Zuflucht,<br />
um mich zu retten (heil zu machen).</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 2215 -->V./  Deus, in te speravi:<br />
Domine, non confundar in aeternum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott, auf dich habe ich gehofft.<br />
Herr, möge ich nicht zuschanden werden in Ewigkeit.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 151 - keyTitle = 8466 - prev_keyPiece = 9479 - keyType = 3 - officeYear = A - keyText = 9710 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Venite ad me,<br />
omnes qui laboratis,<br />
et onerati estis :<br />
et ego reficiam vos.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Kommt alle zu mir,<br />
die ihr euch plagt<br />
und schwere Lasten zu tragen habt.<br />
Ich werde euch erquicken.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 151 - keyTitle = 5059 - prev_keyPiece = 5670 - keyType = 3 - officeYear = C - keyText = 5777 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Magnus Dominus et laudabilis nimis,<br />
in civitate Dei (nostri), in monte sancto eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Groß ist der Herr und hoch zu loben<br />
in der Stadt unseres Gottes, auf seinem heiligen Berg.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 151 - keyTitle = 6308 - prev_keyPiece = 7060 - keyType = 5 - officeYear =  - keyText = 7181 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Populum humilem salvum facies, Domine,<br />
et oculos superborum humiliabis :<br />
quoniam quis Deus praeter te, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du wirst heil machen ein niedriges Volk, Herr,<br />
und die Augen der Stolzen erniedrigen.<br />
Denn: Wer ist Gott außer dir, Herr?</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 151 - keyTitle = 3633 - prev_keyPiece = 4070 - keyType = 6 - officeYear =  - keyText = 4203 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Gustate et videte, quoniam suavis est Dominus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Kostet und seht, wie gütig der Herr ist.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 1092 --> Beatus vir qui sperat in eo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig der Mensch, der auf ihn seine Hoffnung setzt.</ion-text></ion-col></ion-row></ion-grid>
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