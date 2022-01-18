<template>
<!-- - keyCalendar = 222 - keyTitle = 3468 - prev_keyPiece = 3880 - keyType = 1 - officeYear =  - keyText = 4043 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Gaudens gaudebo in Domino,<br />
et exsultabit anima mea in Deo meo :<br />
quia induit me vestimentis salutis,<br />
et indumento iustitiae circumdedit me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ich freue mich sehr in dem Herrn,<br />
und es jauchzt meine Seele in meinem Gott;<br />
denn er hat mir die Kleider des Heils angezogen,<br />
mit dem Mantel der Gerechtigkeit mich bekleidet.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7561 --> Quasi sponsam ornatam monilibus suis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie eine Braut sich mit ihrem Geschmeide schmückt.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 3607 -->Ps. Exaltabo te Domine,<br />
quoniam suscepisti me,<br />
nec delectasti inimicos meos super me.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Erheben will ich dich, Herr,<br />
denn du nahmst mich auf<br />
und ließest meine Feinde nicht frohlocken über mich.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 222 - keyTitle = 1047 - prev_keyPiece = 1135 - keyType = 2 - officeYear =  - keyText = 1160 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Benedicta es tu, Virgo Maria,<br />
a Domino Deo excelso,<br />
prae omnibus mulieribus super terram..
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gesegnet bist du, Jungfrau Maria,<br />
von Gott dem Allerhöchsten,<br />
vor allen anderen Frauen auf der Erde.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9418 -->V./  Tu gloria Ierusalem,<br />
tu laetitia Israel,<br />
tu honorificentia populi nostri
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du bist der Ruhm Jerusalems,<br />
du die Freude Israels,<br />
du bist der Stolz unseres Volkes.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 222 - keyTitle = 8142 - prev_keyPiece = 9116 - keyType = 3 - officeYear =  - keyText = 9323 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Tota pulchra es, Maria:<br />
et macula originalis non est in te.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Schön bist du, Maria, in allem,<br />
und der Makel des Anfangs [Erbsünde] ist nicht an dir!</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 222 - keyTitle = 754 - prev_keyPiece = 792 - keyType = 5 - officeYear =  - keyText = 838 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Ave Maria, gratia plena,<br />
Dominus tecum;<br />
benedicta tu in mulieribus.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gegrüßet seist Du, Maria, voll der Gnade,<br />
der Herr ist mit Dir.<br />
Du bist gepriesen unter den Frauen.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 222 - keyTitle = 3561 - prev_keyPiece = 3992 - keyType = 6 - officeYear =  - keyText = 4128 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Gloriosa dicta sunt de te, Maria,<br />
quia fecit magna qui potens est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Herrliches ist gesagt von dir, Maria,<br />
denn Großes hat an dir getan, der da mächtig ist.</ion-text></ion-col></ion-row></ion-grid>

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