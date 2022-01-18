<template>
<!-- - keyCalendar = 159 - keyTitle = 5256 - prev_keyPiece = 5894 - keyType = 1 - officeYear =  - keyText = 6004 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Miserere mihi Domine,<br />
quoniam ad te clamavi tota die :<br />
quia tu Domine suavis ac mitis es,<br />
et copiosus in misericordia<br />
omnibus invocantibus te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Sei mir gnädig, o Herr;<br />
denn zu dir rufe ich den ganzen Tag!<br />
Denn du, Herr, bist gütig und bereit, zu verzeihen;<br />
und du bist reich an Gnade<br />
für alle, die dich anrufen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 4981 -->Ps. Inclina, Domine, aurem tuam,<br />
et exaudi me :<br />
quoniam inops, et pauper sum ego.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Neige dein Ohr, Herr,<br />
und erhöre mich,<br />
denn ich bin elend und arm.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 159 - keyTitle = 8121 - prev_keyPiece = 9086 - keyType = 2 - officeYear =  - keyText = 9295 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Timebunt gentes nomen tuum, Domine :<br />
et omnes reges terrae gloriam tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Fürchten werden die Heiden deinen Namen, Herr:<br />
und alle Könige der Erde deine Herrlichkeit.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 7913 -->V./  Quoniam aedificavit Dominus Sion,<br />
et videbitur in maiestate sua.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Denn der Herr hat Zion aufgebaut<br />
und er wird erscheinen in seiner Herrlichkeit.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 159 - keyTitle = 1176 - prev_keyPiece = 1290 - keyType = 3 - officeYear =  - keyText = 1309 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Cantate Domino canticum novum :<br />
quia mirabilia fecit Dominus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Singt dem Herrn ein neues Lied,<br />
denn Wunderbares hat der Herr getan.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 159 - keyTitle = 2312 - prev_keyPiece = 2575 - keyType = 5 - officeYear =  - keyText = 2632 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Domine, in auxilium meum respice :<br />
confundantur et revereantur,<br />
qui quaerunt animam meam, ut auferant eam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, hab acht auf meine Hilfe.<br />
Zuschanden sollen werden und beschämt werden,<br />
die mir nach der Seele trachten, um sie zu entreißen.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 159 - keyTitle = 6774 - prev_keyPiece = 7594 - keyType = 6 - officeYear = A - keyText = 7750 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Qui vult venire post me,<br />
abneget semetipsum<br />
et tollat crucem suam,<br />
et sequatur me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wer mir nachkommen will,<br />
der verleugne sich selbst<br />
und nehme sein Kreuz auf sich<br />
und folge mir nach!</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 159 - keyTitle = 2320 - prev_keyPiece = 2586 - keyType = 6 - officeYear = C - keyText = 2641 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Domine, memorabor iustitiae tuae solius :<br />
Deus, docuisti me a iuventute mea,<br />
et usque in senectam et senium,<br />
Deus, ne derelinquas me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, deiner Gerechtigkeit allein will ich gedenken:<br />
Mein Gott, du hast mich gelehrt von meiner Jugend an,<br />
und bis ins Alter und ich in Jahren bin,<br />
mein Gott, verlass mich nicht.</ion-text></ion-col></ion-row></ion-grid>

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