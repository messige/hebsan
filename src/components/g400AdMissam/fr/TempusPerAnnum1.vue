<template>
<!-- - keyCalendar = 134 - keyPiece = 4664 - keyText = 4791 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />In excelso throno vidi sedere virum,<br />
quem adorat multitudo angelorum,<br />
psallentes in unum :<br />
ecce cuius imperium permanet in aeternum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Sur un trône élevé, je vis siéger un homme,<br />
qu'une multitude d'Anges adore,<br />
en psalmodiant d'une même voix :<br />
voici celui dont le règne demeure pour l'éternité.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 5336 -->Ps. Iubilate Deo omnis terra<br />
servite Domino in laetitia.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubilez pour Dieu, toute la terre :<br />
servez le Seigneur dans la joie !</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 1163 - keyText = 1184 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Benedictus Dominus Deus Israel,<br />
qui facit mirabilia magna solus a saeculo.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Béni soit le Seigneur, Dieu d’Israël,<br />
qui seul fait de grandes merveilles depuis toujours.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9133 -->V./  Suscipiant montes pacem populo tuo,<br />
et colles iustitiam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Que les montagnes reçoivent la paix pour votre peuple,<br />
et les collines la justice.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5188 - keyText = 5336 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Iubilate Deo omnis terra<br />
servite Domino in laetitia.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jubilez pour Dieu, toute la terre :<br />
servez le Seigneur dans la joie !</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5187 - keyText = 5334 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Iubilate Deo omnis terra<br />
iubilate Deo omnis terra<br />
servite Domino in laetitia<br />
intrate in conspectu eius in exsultatione<br />
quia Dominus ipse est Deus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Jubilez pour Dieu, toute la terre :<br />
Jubilez pour Dieu, toute la terre :<br />
servez le Seigneur dans la joie !<br />
Entrez en sa présence avec tressaillement d’allégresse<br />
car le Seigneur est bien Dieu.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 6294 - keyText = 10845 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Notas mihi fecisti vias vitae:<br />
adimplebis me laetitia cum vultu tuo, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous m’avez fait connaître les voies de la vie :<br />
vous me comblerez de joie avec votre visage, Seigneur.</ion-text></ion-col></ion-row></ion-grid>

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