<template>
<!-- - keyCalendar = 91 - keyPiece = 5186 - keyText = 5333 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Iubilate Deo omnis terra, alleluia :<br />
psalmum dicite nomini eius, alleluia <br />
date gloriam laudi eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jubilez pour Dieu, toute de la terre, alléluia :<br />
dites un psaume à l’honneur de son nom, alléluia<br />
rendez gloire à sa louange !</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2318 -->Ps. Dicite Deo,<br />
quam terribilia sunt opera tua, Domine,<br />
in multitudine virtutis tuae<br />(mentientur tibi inimici tui)
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Dites à Dieu :<br />
Que vos œuvres sont impressionnantes, Seigneur !<br />
dans l’abondance de votre puissance<br />(vos ennemis seront réduits à mentir contre vous).</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1523 - keyText = 1550 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Cognoverunt discipuli Dominum Iesum in fractione panis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Les disciples reconnurent le Seigneur Jésus à la fraction du pain.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 6709 - keyText = 6839 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Oportebat pati Christum<br />
et resurgere a mortuis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Il fallait que le Christ souffrît<br />
et ressuscitât d’entre les morts.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 3480 --> Et ita intrare in gloriam suam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">et entrât ainsi dans sa gloire.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5425 - keyText = 5522 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Lauda anima mea Dominum:<br />
laudabo Dominum in vita mea :<br />
psallam Deo meo, quamdiu ero.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Loue, mon âme, le Seigneur ;<br />
je louerai le Seigneur durant ma vie :<br />
je psalmodierai pour mon Dieu aussi longtemps que je serai.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 8891 - keyText = 9103 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Surrexit Dominus,<br />
et apparuit Petro.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le Seigneur est ressuscité,<br />
il est apparu à Pierre.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 1294 - keyText = 1312 -->
 <template v-if=" annoABC == 'B'">
<rubrique>Communio</rubrique><br /><br />Cantate Domino, alleluia :<br />Cantate Domino,  benedicite nomen eius :<br />
bene nuntiate de die in diem salutare eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Chantez au Seigneur, alléluia :<br />Chantez au Seigneur, bénissez son nom :<br />
annoncez bien de jour en jour son salut.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 8587 - keyText = 8805 -->
 <template v-if=" annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Simon Ioannis, diligis me plus his?<br />
Domine, tu omnia nosti :<br />
tu scis, Domine, quia amo te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Simon, fils de Jean, m'aimes-tu plus que ceux-ci?<br />
Seigneur, tu connais tout:<br />
 tu sais bien, Seigneur, que je t'aime.</ion-text></ion-col></ion-row></ion-grid>

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