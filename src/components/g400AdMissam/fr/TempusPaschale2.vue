<template>
<!-- - keyCalendar = 84 - keyPiece = 7425 - keyText = 7556 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Quasi modo geniti infantes, alleluia :<br />
rationabiles, sine dolo lac concupiscite.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Comme des enfants nouveaux-nés, alléluia,<br />
en vrais spirituels, soyez avides de lait pur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3725 -->Ps. Exsultate Deo adiutori nostro.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Tressaillez d’allégresse pour Dieu, notre secours.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 5331 --> iubilate Deo Iacob.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubilez pour le Dieu de Jacob.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 4644 - keyText = 4769 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />In die resurrectionis meae,<br />
dicit Dominus,<br />
praecedam vos in Galilaeam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Au jour de la réssurection, dit le Seigneur,<br />
je vous précéderai en Galilée.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 7084 - keyText = 7209 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Post dies octo, ianuis clausis,<br />
stetit Iesus in medio discipulorum suorum,<br />
et dixit : pax vobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Après huit jours, alors que les portes étaient fermées,<br />
Jésus se tint au milieu de ses disciples<br />
et il dit : Paix à vous.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 523 - keyText = 558 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Angelus Domini descendit de caelo,<br />
et dixit mulieribus :<br />
quem quaeritis, surrexit, sicut dixit.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">L'ange du Seigneur descendit du ciel<br />
et dit aux femmes :<br />
Celui que vous cherchez est réssuscité comme il l'a dit.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5949 - keyText = 6067 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Mitte manum tuam,<br />
et cognosce loca clavorum alleluia :<br />
et noli esse incredulus sed fidelis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Avance ta main<br />
et reconnais les places des clous, alléluia,<br />
et ne sois plus incrédule, mais croyant.</ion-text></ion-col></ion-row></ion-grid>

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