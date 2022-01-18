<template>
<!-- - keyCalendar = 148 - keyTitle = 3112 - prev_keyPiece = 3475 - keyType = 1 - officeYear =  - keyText = 3635 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Exaudi, Domine,vocem meam,<br />
qua clamavi ad te :<br />
adiutor meus esto,<br />
ne derelinquas me,<br />
neque despicias me,<br />
Deus salutaris meus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Exaucez, Seigneur, ma voix<br />
qui a lancé vers vous son appel :<br />
soyez mon secours,<br />
ne m’abandonnez pas,<br />
et ne me regardez pas avec dédain,<br />
Dieu, mon sauveur.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 2746 -->Ps. Dominus illuminatio mea et salus mea :<br />
quem timebo ?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Le Seigneur est la lumière qui m’inonde, et mon salut,<br />
qui craindrai-je ?</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 148 - keyTitle = 6506 - prev_keyPiece = 7287 - keyType = 2 - officeYear =  - keyText = 7412 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Protector noster aspice, Deus,<br />
et respice super servos tuos.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Dieu notre protecteur, jetez un regard :<br />
et posez le regard sur vos serviteurs.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 2602 -->V./  Domine Deus virtutum,<br />
exaudi preces servorum tuorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Seigneur, Dieu des puissances,<br />exaucez les prières de vos serviteurs.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 148 - keyTitle = 2316 - prev_keyPiece = 2580 - keyType = 3 - officeYear =  - keyText = 2636 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Domine, in virtute tua laetabitur rex :<br />
et super salutare tuum exsultabit vehementer.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seigneur, en votre force le roi se réjouira :<br />
et en raison de votre salut, il tressaillira d’allégresse, intensément.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 148 - keyTitle = 1003 - prev_keyPiece = 1084 - keyType = 5 - officeYear =  - keyText = 1111 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Benedicam Domino qui mihi tribuit intellectum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Je bénirai le Seigneur qui m’a accordé de comprendre.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7417 --> Providebam Deum in conspectu meo semper :<br />
quoniam a dextris est mihi ne commovear.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Je mets le Seigneur constamment sous mes yeux ;<br />il se tient à ma droite, pour que je ne sois pas ébranlé.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!--  - keyCalendar = 148 - keyTitle = 8313 - prev_keyPiece = 9315 - keyType = 6 - officeYear =  - keyText = 9524 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Unam petii a Domino,<br />
hanc requiram :<br />
ut inhabitem in domo Domini.

<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">J’ai demandé une seule chose au Seigneur,<br />
c’est elle que je rechercherai :<br />
habiter dans la maison du Seigneur.</ion-text></ion-col></ion-row></ion-grid>

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