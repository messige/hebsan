<template>
<!-- - keyCalendar = 210 - keyTitle = 3460 - prev_keyPiece = 3873 - keyType = 1 - officeYear =  - keyText = 4034 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Gaudeamus omnes in Domino,<br />
diem festum celebrantes sub honore Mariae Virginis :<br />
de cuius assumptione gaudent angeli,<br />
et collaudant Filium Dei.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Freuen wir uns alle im Herrn,<br />
feiern wir den festlichen Tag zu Ehren der Jungfrau Maria.<br />
An deren Aufnahme freuen sich [mit uns] die Engel<br />
und loben Gottes Sohn.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3355 -->Ps. Eructavit cor meum verbum bonum :<br />
dico ego opera mea regi.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mein Herz brachte ein gutes Wort hervor,<br />
ich sage meine Werke dem König.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 210 - keyTitle = 7671 - prev_keyPiece = 8564 - keyType = 1 - officeYear =  - keyText = 8786 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Signum magnum apparuit in caelo.<br />
mulier amicta sole<br />
et luna sub pedibus eius<br />
et in capite eius corona duodecim stellarum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ein großes Zeichen erschien im Himmel:<br />
Eine Frau, mit der Sonne bekleidet,<br />
und der Mond unter ihren Füßen,<br />
und auf ihrem Haupt eine Krone mit zwölf Sternen.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 1308 -->Ps. Cantate Domino canticum novum :<br />
quia mirabilia fecit.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Singt dem Herrn ein neues Lied!<br />
Denn er hat Wunderbares getan.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 210 - keyTitle = 692 - prev_keyPiece = 727 - keyType = 2 - officeYear =  - keyText = 769 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Audi filia et vide<br />
et inclina aurem tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Höre, Tochter, und sieh,<br />
und neige dein Ohr.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = C keyText = 7754 --> Quia concupivit rex speciem tuam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Denn der König verlangt nach deiner Schönheit.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = V keyText = 8861 -->V./  Specie tua, et pulchritudine tua <br />
intende, prospere procede, et regna.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">In deiner Anmut und deiner Schönheit,<br />
spanne an, fahre glücklich und sei König.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 210 - keyTitle = 655 - prev_keyPiece = 690 - keyType = 3 - officeYear =  - keyText = 726 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br /><span class="fc">Assumpta est</span> Maria in caelum,<br />
gaudet exercitus angelorum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Aufgenommen wurde Maria in den Himmel,<br />
es freut sich die Schar der Engel.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 210 - keyTitle = 654 - prev_keyPiece = 688 - keyType = 5 - officeYear =  - keyText = 725 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br /><span class="fc">Assumpta est</span> Maria in caelum,<br />
gaudent angeli, laudantes (collaudantes) benedicunt Dominum.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Aufgenommen wurde Maria in den Himmel,<br />
es freuen sich die Engel, sie loben (miteinander) und preisen den Herrn.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 210 - keyTitle = 822 - prev_keyPiece = 871 - keyType = 6 - officeYear =  - keyText = 914 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Beatam me dicent omnes generationes :<br />
quia fecit mihi magna qui potens est.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Selig werden mich preisen alle Geschlechter!<br />
Denn Großes hat an mir getan, der mächtig ist.</ion-text></ion-col></ion-row></ion-grid>

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