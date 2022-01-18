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
<ion-text color="tertiary">So spricht der Herr:<br />
Ich sinne Pläne des Friedens<br />
und nicht des Unheils.<br />
Wenn ihr mich anruft,<br />
so werde ich euch erhören<br />
und euch zurückführen aus eurer Gefangenschaft<br />
von allen Orten.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1218 -->Ps. Benedixisti, Domine, terram tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Einst hast du, Herr, dein Land begnadet.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 872 -->Ps. Avertisti captivitatem Iacob.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und Jakobs Unglück gewendet.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 170 - keyTitle = 4951 - prev_keyPiece = 5551 - keyType = 2 - officeYear =  - keyText = 5656 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Liberasti nos, Domine,<br />
ex affligentibus nos :<br />
et eos qui nos oderunt, confudisti.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Du hast uns befreit, Herr,<br />
von denen, die uns bedrängen;<br />
und die uns hassen,  hast du zuschanden gemacht.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 4761 -->V./  In Deo laudabimur tota die,<br />
et nomini tuo confitebimur in saecula.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wir rühmen uns Gottes den ganzen Tag<br />
und preisen Deinen Namen auf ewig.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 170 - keyTitle = 1862 - prev_keyPiece = 2058 - keyType = 3 - officeYear =  - keyText = 2090 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />De profundis clamavi ad te, Domine :<br />
Domine, exaudi vocem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Aus der Tiefe rufe ich, Herr, zu dir,<br />
Herr, höre meine Stimme.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 170 - keyTitle = 9086 - prev_keyPiece = 2060 - keyType = 5 - officeYear =  - keyText = 10846 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />De profundis clamavi ad te, Domine :<br />
Domine, exaudi orationem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Aus der Tiefe rufe ich, Herr, zu dir,<br />
Herr, höre mein Gebet.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 170 - keyTitle = 2350 - prev_keyPiece = 2620 - keyType = 6 - officeYear = A - keyText = 2678 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Domine, quinque talenta tradidisti mihi:<br />
ecce alia quinque <span class="fc">superlucratus sum</span>.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, fünf Talente hast du mir gegeben.<br />
Sieh: Fünf weitere habe ich dazuverdient.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 3566 --> Euge serve fidelis<br />
quia in pauca fuisti fidelis,<br />
supra (super) multa te constituam,<br />
intra in gaudium Domini tui.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sehr gut, du bist ein treuer Diener.<br />
Weil du über Weniges treu gewesen bist,<br />
will ich dich über Vieles einsetzen,<br />
geh ein in die Freude deines Herrn.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!--  - keyCalendar = 170 - keyTitle = 450 - prev_keyPiece = 461 - keyType = 6 - officeYear = C - keyText = 494 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Amen dico vobis,<br />
quidquid orantes petitis,<br />
credite quia accipietis,<br />
et fiet vobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Amen, das sage ich euch:<br />
Um was immer ihr betet und bittet,<br />
- glaubt nur, dass ihr es schon erhalten habt, -<br />
und es wird euch zuteil werden.</ion-text></ion-col></ion-row></ion-grid>

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