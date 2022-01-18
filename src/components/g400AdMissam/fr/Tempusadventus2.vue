<template>
<!-- - keyCalendar = 6 - keyTitle = 6314 - prev_keyPiece = 7067 - keyType = 1 - officeYear =  - keyText = 7187 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Populus Sion,<br />
ecce Dominus veniet ad salvandas gentes :<br />
et auditam faciet Dominus gloriam vocis suae,<br />
in laetitia cordis vestri.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Peuple de Sion,<br />
voici que le Seigneur va venir pour sauver les nations :<br />
et le Seigneur fera entendre la gloire de sa voix<br />
dans la joie de votre coeur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 7713 -->Ps. Qui regis Israel, intende :<br />
qui deducis velut ovem Ioseph.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous qui gouvernez Israël, prêtez l’oreille :<br />
vous qui conduisez Joseph comme une brebis.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 6 - keyTitle = 3083 - prev_keyPiece = 3441 - keyType = 2 - officeYear =  - keyText = 3599 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Ex Sion species decoris eius :<br />
Deus (noster) manifeste veniet.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">De Sion, l’éclat de sa beauté :<br />
Dieu  paraîtra  au  grand  jour.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 1653 -->V./  Congregate illi sanctos eius,<br />
qui ordinaverunt testamentum eius super sacrificia.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Rassemblez pour lui ses saints :<br />
eux qui ont scellé son alliance par des sacrifices.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 6 - keyTitle = 4803 - prev_keyPiece = 5384 - keyType = 3 - officeYear =  - keyText = 5485 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br /><span class="fc">Laetatus sum</span> in his quae dicta sunt mihi :<br />
in domum Domini ibimus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Je me suis réjoui de ces paroles qui m’ont été dites :<br />
Nous irons dans la maison du Seigneur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 8940 --> Stantes erant pedes nostri in atriis tuis Ierusalem
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nos pieds étaient bien campés, dans tes parvis, Jérusalem.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 6 - keyTitle = 2010 - prev_keyPiece = 2222 - keyType = 5 - officeYear =  - keyText = 2262 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Deus, tu convertens vivificabis nos,<br />
et plebs tua laetabitur in te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Dieu, c’est vous qui, vous tournant vers nous, nous vivifierez :<br />
et votre peuple se réjouira en vous.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 6911 --> Ostende nobis, Domine, misericordiam tuam :<br />
et salutare tuum da nobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Montrez-nous, Seigneur, votre miséricorde :<br />
et donnez-nous votre salut.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!--  - keyCalendar = 6 - keyTitle = 4033 - prev_keyPiece = 4514 - keyType = 6 - officeYear =  - keyText = 4626 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ierusalem surge,<br />
et sta in excelso :<br />
et vide iucunditatem<br />
quae veniet tibi a Deo tuo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jérusalem, debout !<br />
et tiens-toi sur les hauteurs,<br />
et vois la joie<br />
qui te viendra de ton Dieu.</ion-text></ion-col></ion-row></ion-grid>

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