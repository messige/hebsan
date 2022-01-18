<template>
<!-- - keyCalendar = 144 - keyTitle = 2314 - prev_keyPiece = 2578 - keyType = 1 - officeYear =  - keyText = 2634 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Domine, in tua misericordia speravi :<br />
exsultavit cor meum in salutari tuo :<br />
cantabo Domino, qui bona tribuit mihi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seigneur, j’ai mis mon espérance en votre miséricorde :<br />
mon cœur a tressailli d’allégresse en votre salut :<br />
je chanterai pour le Seigneur qui m’a comblé de biens.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 9559 -->Ps. Usquequo Domine oblivisceris me in finem ?<br />
usquequo avertis faciem tuam a me ?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jusques à quand, Seigneur, m’oublierez-vous sans cesse?<br />
Jusques à quand détournez-vous de moi votre face ?</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 144 - keyTitle = 2773 - prev_keyPiece = 3102 - keyType = 2 - officeYear =  - keyText = 3144 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Ego dixi: Domine, miserere mei.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Moi, j’ai dit : Seigneur, ayez pitié de moi.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 10848 --> Sana animam meam, quoniam peccavi tibi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Guérissez mon âme, car j’ai péché contre vous.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = V keyText = 1067 -->V./  Beatus qui intelligit super egenum et pauperem:<br />
in die mala liberabit eum Dominus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Heureux qui pense au pauvre 
et au malheureux :<br />
au jour de l’épreuve, le Seigneur le sauvera.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 144 - keyTitle = 9087 - prev_keyPiece = 9523 - keyType = 3 - officeYear =  - keyText = 10849 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Verba mea auribus percipe, Domine :<br />
intellige clamorem meum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">A mes paroles prêtez l’oreille, Seigneur :<br />
entendez mon appel.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 144 - keyTitle = 4431 - prev_keyPiece = 4949 - keyType = 5 - officeYear =  - keyText = 5094 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Intende voci orationis meae,<br />
rex meus, et Deus meus :<br />
quoniam ad te orabo, Domine.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Soyez attentif à la voix de ma prière,<br />
mon Roi et mon Dieu :<br />
car c’est vers vous que je prierai : Seigneur.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 144 - keyTitle = 5413 - prev_keyPiece = 6065 - keyType = 6 - officeYear =  - keyText = 6187 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Narrabo omnia mirabilia tua:<br />
laetabor et exsultabo in te:<br />
psallam nomini tuo, Altissime.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Je raconterai toutes vos merveilles :<br />
je me réjouirai et je tressaillirai d’allégresse en vous :<br />
je psalmodierai pour votre nom, Très-Haut.</ion-text></ion-col></ion-row></ion-grid>

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