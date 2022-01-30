<template>
<!-- - keyCalendar = 6 - keyTitle = 6314 - prev_keyPiece = 7067 - keyType = 1 - officeYear =  - keyText = 7187 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Populus Sion,<br />
ecce Dominus veniet ad salvandas gentes :<br />
et auditam faciet Dominus gloriam vocis suae,<br />
in laetitia cordis vestri.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du Volk auf dem (Berg) Zion,<br />
Sieh, der Herr wird kommen, um die Völker zu retten;<br />
und hören lässt der Herr die Herrlichkeit seiner Stimme<br />
in der Freude eures Herzens.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 7713 -->Ps. Qui regis Israel, intende :<br />
qui deducis velut ovem Ioseph.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Du Israel weidest, höre,<br />
der Du Josef hütest wie ein Schaf.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 6 - keyTitle = 3083 - prev_keyPiece = 3441 - keyType = 2 - officeYear =  - keyText = 3599 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Ex Sion species decoris eius :<br />
Deus (noster) manifeste veniet.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vom Zion her, der Krone seiner Schönheit,<br />
geht (unser) Gott strahlend auf.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 1653 -->V./  Congregate illi sanctos eius,<br />
qui ordinaverunt testamentum eius super sacrificia.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Versammelt ihm seine Frommen,<br />
die seinen Bund mit ihm schlossen beim Opfer.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 6 - keyTitle = 4803 - prev_keyPiece = 5384 - keyType = 3 - officeYear =  - keyText = 5485 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br /><span class="fc">Laetatus sum</span> in his quae dicta sunt mihi :<br />
in domum Domini ibimus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich freute mich, als man mir sagte:<br />
„Zum Haus des Herrn wollen wir pilgern".</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 6 - keyTitle = 2010 - prev_keyPiece = 2222 - keyType = 5 - officeYear =  - keyText = 2262 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Deus, tu convertens vivificabis nos,<br />
et plebs tua laetabitur in te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gott, willst Du uns denn nicht wieder beleben,<br />
so dass Dein Volk an Dir sich freuen kann?</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 6911 --> Ostende nobis, Domine, misericordiam tuam :<br />
et salutare tuum da nobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zeige uns, Herr, deine Erbarmen<br />
und schenke uns dein Heil.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!--  - keyCalendar = 6 - keyTitle = 4033 - prev_keyPiece = 4514 - keyType = 6 - officeYear =  - keyText = 4626 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ierusalem surge,<br />
et sta in excelso :<br />
et vide iucunditatem<br />
quae veniet tibi a Deo tuo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jerusalem, steh auf,<br />
steig auf den Berg<br />
und schau die Freude,<br />
die von deinem Gott zu dir kommen wird.</ion-text></ion-col></ion-row></ion-grid>

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