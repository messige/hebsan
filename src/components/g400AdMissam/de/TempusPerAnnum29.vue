<template>
<!-- - keyCalendar = 166 - keyPiece = 3095 - keyText = 3136 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Ego clamavi, quoniam exaudisti me, Deus :<br />
inclina aurem tuam, et exaudi verba mea :<br />
custodi me, Domine, ut pupillam oculi :<br />
sub umbra alarum tuarum protege me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich schreie, denn du erhörst mich, Gott.<br />
Neige dein Ohr und erhöre meine Worte.<br />
Behüte mich, Herr, wie den Augenstern,<br />
unter dem Schatten deiner Flügel birg mich.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3631 -->Ps. Exaudi Domine iustitiam meam:<br />
intende deprecationem meam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Höre, Herr, die gerechte Sache,<br />
achte auf mein Flehen!</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 8083 - keyText = 8304 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Salvum fac populum tuum, Domine :<br />
et benedic hereditati tuae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Rette dein Volk, Herr,<br />
und segne dein Erbe.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 184 -->V./  Ad te, Domine, clamavi:<br />
Deus meus, ne sileas a me,<br />
et ero similis descendentibus in lacum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zu dir, Herr, habe ich gerufen;<br />
mein Gott, wende dich nicht schweigend ab von mir,<br />
sonst werde ich denen gleich, die niedersteigen zur Grube.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 5424 - keyText = 5522 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Lauda anima mea Dominum:<br />
laudabo Dominum in vita mea :<br />
psallam Deo meo, quamdiu ero.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Lobe den Herrn, meine Seele!<br />
Ich will den Herrn loben, solange ich lebe,<br />
und meinem Gott lobsingen, solange ich bin.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5787 - keyText = 5896 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Meditabor in mandatis tuis<br />
quae dilexi valde :<br />
et levabo manus meas ad mandata tua<br />
quae dilexi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich sinne nach über deine Gebote,<br />
ich liebe sie von Herzen.<br />
Ich erhebe meine Hände zu deinen Geboten,<br />
die ich liebe.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 2549 - keyText = 2608 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Domine Dominus noster,<br />
quam admirabile est nomen tuum in universa terra.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herr, unser Herrscher,<br />
wie wunderbar ist dein Name auf der ganzen Erde!</ion-text></ion-col></ion-row></ion-grid>

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