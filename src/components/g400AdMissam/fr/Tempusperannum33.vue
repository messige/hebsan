<template>
<!-- - keyCalendar = 170 - keyTitle = 2037 - prev_keyPiece = 2254 - keyType = 1 - officeYear =  - keyText = 2304 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Dicit Dominus :<br />
ego cogito cogitationes pacis,<br />
et non afflictionis :<br />
invocabitis me,<br />
et ego exaudiam vos :<br />
et reducam captivitatem vestram<br />
de cunctis locis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Le Seigneur dit :<br />
Mes pensées sont des pensées de paix et non d’affliction :<br />
vous m’invoquerez,<br />
et moi, je vous exaucerai :<br />
et je vous ramènerai de captivité,<br />
de tout lieu.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1218 -->Ps. Benedixisti, Domine, terram tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez-béni, Seigneur, votre terre.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 872 -->Ps. Avertisti captivitatem Iacob.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vous avez révoqué la captivité de Jacob.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 170 - keyTitle = 4951 - prev_keyPiece = 5551 - keyType = 2 - officeYear =  - keyText = 5656 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Liberasti nos, Domine,<br />
ex affligentibus nos :<br />
et eos qui nos oderunt, confudisti.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Vous nous avez délivrés, Seigneur,<br />
de ceux qui nous affligeaient :<br />
et ceux qui nous haïssaient, vous les avez couverts de confusion.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 4761 -->V./  In Deo laudabimur tota die,<br />
et nomini tuo confitebimur in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">En Dieu nous serons glorifiés tout au long du jour :<br />
et nous acclamerons votre nom à jamais.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 170 - keyTitle = 1862 - prev_keyPiece = 2058 - keyType = 3 - officeYear =  - keyText = 2090 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />De profundis clamavi ad te, Domine :<br />
Domine, exaudi vocem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du fond de l’abîme j’ai crié vers
vous, Seigneur;<br />
Seigneur,exaucez ma voix.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 170 - keyTitle = 9086 - prev_keyPiece = 2060 - keyType = 5 - officeYear =  - keyText = 10846 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />De profundis clamavi ad te, Domine :<br />
Domine, exaudi orationem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du fond de l’abîme j’ai crié vers
vous, Seigneur;<br />
Seigneur, exaucez ma prière.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 170 - keyTitle = 2350 - prev_keyPiece = 2620 - keyType = 6 - officeYear = A - keyText = 2678 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Domine, quinque talenta tradidisti mihi:<br />
ecce alia quinque <span class="fc">superlucratus sum</span>.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seigneur, vous m’avez confié cinq talents ;<br />
voici que j’en ai gagné de plus cinq autres.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 3566 --> Euge serve fidelis<br />
quia in pauca fuisti fidelis,<br />
supra (super) multa te constituam,<br />
intra in gaudium Domini tui.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">C'est bien, serviteur bon et fidèle,<br />
en peu de choses tu as été fidèle,<br />
sur beaucoup je t'établirai;<br />
entre dans la joie de ton Seigneur.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!--  - keyCalendar = 170 - keyTitle = 450 - prev_keyPiece = 461 - keyType = 6 - officeYear = C - keyText = 494 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Amen dico vobis,<br />
quidquid orantes petitis,<br />
credite quia accipietis,<br />
et fiet vobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Amen, je vous le dis,<br />
tout ce que vous demandez en priant,<br />
croyez que vous le recevrez,<br />
et cela vous arrivera.</ion-text></ion-col></ion-row></ion-grid>

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