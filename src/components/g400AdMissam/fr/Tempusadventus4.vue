<template>
<!-- - keyCalendar = 14 - keyTitle = 7146 - prev_keyPiece = 7999 - keyType = 1 - officeYear =  - keyText = 8224 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Rorate caeli desuper,<br />
et nubes pluant Iustum;<br />
aperiatur terra,<br />
et germinet salvatorem.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Epanchez, cieux, la rosée d'en haut,<br />
que les nues fassent pleuvoir le Juste<br />
que la terre s’ouvre<br />
et produise le Sauveur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1262 -->Ps. Caeli enarrant gloriam Dei:<br />
et opera manuum eius annuntiat firmamentum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Les cieux racontent la gloire de Dieu,<br />
et le firmament  annonce  l’œuvre  de ses mains.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 14 - keyTitle = 6481 - prev_keyPiece = 7256 - keyType = 2 - officeYear =  - keyText = 7382 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Prope est Dominus omnibus invocantibus eum :<br />
omnibus qui invocant eum in veritate.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le Seigneur est proche pour tous ceux qui l’invoquent :<br />
pour tous ceux qui l’invoquent en vérité.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 5561 -->V./  Laudem Domini loquetur os meum:<br />
et benedicat omnis caro nomen sanctum eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ma bouche dira la louange du Seigneur ;<br />
et que toute chair bénisse son saint nom.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 14 - keyTitle = 8421 - prev_keyPiece = 9428 - keyType = 3 - officeYear =  - keyText = 9660 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Veni, Domine, et noli tardare :<br />
relaxa facinora plebis tuae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Venez, Seigneur, et ne tardez pas :<br />
absolvez de ses méfaits votre peuple.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 14 - keyTitle = 755 - prev_keyPiece = 796 - keyType = 5 - officeYear =  - keyText = 839 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Ave Maria, gratia plena,<br />
Dominus tecum;<br />
benedicta tu in mulieribus,<br />
et <span class="fc">benedictus est</span> fructus ventris tui.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Je vous salue, Marie, pleine de grâce,<br />
le Seigneur est avec vous,<br />
vous êtes bénie entre les femmes,<br />
et le fruit de vos entrailles est béni.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 14 - keyTitle = 2736 - prev_keyPiece = 3059 - keyType = 6 - officeYear =  - keyText = 3099 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Ecce virgo concipiet<br />
et pariet filium et vocabitur nomen eius Emmanuel.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Voici que la Vierge concevra et enfantera un fils,<br />
et on lui donnera le nom d'Emmanuel.</ion-text></ion-col></ion-row></ion-grid>

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