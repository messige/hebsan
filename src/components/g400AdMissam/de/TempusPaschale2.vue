<template>
<!-- - keyCalendar = 84 - keyPiece = 7425 - keyText = 7556 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Quasi modo geniti infantes, alleluia :<br />
rationabiles, sine dolo lac concupiscite.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Wie neugeborene Kinder, Halleluja:<br />
Voll EInsicht,  ohne Hinterlist, verlangt nach der Milch.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3725 -->Ps. Exsultate Deo adiutori nostro.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jubelt Gott zu, er ist unsere Hilfe.</ion-text></ion-col></ion-row></ion-grid>
 <!-- textType = P keyText = 5331 --> iubilate Deo Iacob.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Jauchzt dem Gott Jakobs zu!</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyPiece = 4644 - keyText = 4769 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />In die resurrectionis meae,<br />
dicit Dominus,<br />
praecedam vos in Galilaeam.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Am Tag meiner Auferstehung,<br />
spricht der Herr,<br />
werde ich euch vorangehen nach Galiläa.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 7084 - keyText = 7209 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Post dies octo, ianuis clausis,<br />
stetit Iesus in medio discipulorum suorum,<br />
et dixit : pax vobis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Acht Tage darauf, bei verschlossenen Türen,<br />
stand Jesus in der Mitte seine Jünger<br />
und sagte: Friede sei mit euch!</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 523 - keyText = 558 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />Angelus Domini descendit de caelo,<br />
et dixit mulieribus :<br />
quem quaeritis, surrexit, sicut dixit.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Ein Engel des Herrn stieg vom Himmel herab,<br />
und sagte zu den Frauen:<br />
Den ihr sucht [Jesus], er ist auferstanden, wie er gesagt hat.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyPiece = 5949 - keyText = 6067 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Mitte manum tuam,<br />
et cognosce loca clavorum alleluia :<br />
et noli esse incredulus sed fidelis.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Streck deine Hand aus<br />
und erkenne die Orte der Nägel, Halleluja,<br />
und sei nicht ungläubig, sondern gläubig.</ion-text></ion-col></ion-row></ion-grid>

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