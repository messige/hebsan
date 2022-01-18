<template>
<!-- - keyCalendar = 166 - keyTitle = 2768 - prev_keyPiece = 3095 - keyType = 1 - officeYear =  - keyText = 3136 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Ego clamavi, quoniam exaudisti me, Deus :<br />
inclina aurem tuam, et exaudi verba mea :<br />
custodi me, Domine, ut pupillam oculi :<br />
sub umbra alarum tuarum protege me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Moi, j’ai lancé mon appel, car vous m’avez exaucé, mon Dieu :<br />
prêtez-moi l’oreille, et exaucez mes paroles :<br />
gardez-moi, Seigneur, comme la prunelle de l’œil :<br />
à l’ombre de vos ailes protégez-moi.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3631 -->Ps. Exaudi Domine iustitiam meam:<br />
intende deprecationem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Écoutez, Seigneur, ma juste cause :<br />
soyez attentif à ma supplication.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 166 - keyTitle = 7220 - prev_keyPiece = 8083 - keyType = 2 - officeYear =  - keyText = 8304 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Salvum fac populum tuum, Domine :<br />
et benedic hereditati tuae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Sauvez votre peuple, Seigneur,<br />
et bénissez votre héritage.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 184 -->V./  Ad te, Domine, clamavi:<br />
Deus meus, ne sileas a me,<br />
et ero similis descendentibus in lacum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">J’ai crié vers vous, Seigneur ;<br />
ne gardez pas le silence à mon égard, ô mon Dieu,<br />
de peur que je ne ressemble à ceux qui descendent dans la fosse. </ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 166 - keyTitle = 4835 - prev_keyPiece = 5424 - keyType = 3 - officeYear =  - keyText = 5522 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Lauda anima mea Dominum:<br />
laudabo Dominum in vita mea :<br />
psallam Deo meo, quamdiu ero.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Loue, mon âme, le Seigneur ;<br />
je louerai le Seigneur durant ma vie :<br />
je psalmodierai pour mon Dieu aussi longtemps que je serai.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 166 - keyTitle = 5163 - prev_keyPiece = 5787 - keyType = 5 - officeYear =  - keyText = 5896 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Meditabor in mandatis tuis<br />
quae dilexi valde :<br />
et levabo manus meas ad mandata tua<br />
quae dilexi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Je méditerai vos préceptes,<br />
que j’ai beaucoup aimés ;<br />
et je lèverai mes mains vers vos commandements,<br />
car je les ai aimés</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 166 - keyTitle = 2292 - prev_keyPiece = 2549 - keyType = 6 - officeYear =  - keyText = 2608 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Seigneur, notre Seigneur,<br />
qu’il est admirable votre nom, sur la terre entière !</ion-text></ion-col></ion-row></ion-grid>

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