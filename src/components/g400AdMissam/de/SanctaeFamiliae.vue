<template>
<!-- - keyCalendar = 25 - keyTitle = 1966 - prev_keyPiece = 2174 - keyType = 1 - officeYear =  - keyText = 2211 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Introitus</rubrique><br /><br />Deus in loco sancto suo :<br />
Deus, qui inhabitare facit unanimes in domo :<br />
ipse dabit virtutem et fortitudinem plebi suae.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Gott an seinem heiligen Ort!<br />
Gott, der Einmütige wohnen lässt in seinem Haus,<br />
er selbst wird geben Macht und Stärke seinem Volk.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = P keyText = 3747 -->Ps. Exsurgat Deus, et dissipentur inimici eius :<br />
et fugiant, qui oderunt eum a facie eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott steht auf, seine Feinde zerstieben;<br />
die ihn hassen, fliehen vor seinem Angesicht.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 25 - keyTitle = 8313 - prev_keyPiece = 9314 - keyType = 2 - officeYear =  - keyText = 9524 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Graduale</rubrique><br /><br />Unam petii a Domino,<br />
hanc requiram :<br />
ut inhabitem in domo Domini.

<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nur eines erbitte ich vom Herrn,<br />
danach verlangt mich:<br />
Im Haus des Herrn zu wohnen<br />
alle Tage meines Lebens.</ion-text></ion-col></ion-row></ion-grid>

 <!-- textType = V keyText = 9610 -->V./  Ut videam voluptatem Domini:<br />
et protegar a templo sancto eius.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Um die Freundlichkeit des Herrn zu schauen<br />
und Zuflucht zu finden in seinem heiligen Tempel.</ion-text></ion-col></ion-row></ion-grid>
</template>
<!-- - keyCalendar = 25 - keyTitle = 3484 - prev_keyPiece = 3899 - keyType = 3 - officeYear =  - keyText = 4063 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Versus alleluiaticus</rubrique><br /><br />Gaudete iusti in Domino :<br />
rectos decet collaudatio.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Freut euch, ihr Gerechten, im Herrn!<br />
Den Aufrichtigen ziemt Lobgesang.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 25 - keyTitle = 4293 - prev_keyPiece = 4804 - keyType = 5 - officeYear =  - keyText = 4935 -->
 <template v-if=" annoABC == 'A' ||  annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Offertorium</rubrique><br /><br />In te speravi, Domine:<br />
dixi: tu es Deus meus,<br />
in manibus tuis tempora mea.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Auf dich habe ich meine Hoffnung gesetzt.<br />
Ich sprach: Du bist mein Gott.<br />
In deinen Händen liegt mein Geschick [meine Zeit].</ion-text></ion-col></ion-row></ion-grid>

</template>
<!-- - keyCalendar = 25 - keyTitle = 8131 - prev_keyPiece = 9099 - keyType = 6 - officeYear = A - keyText = 9306 -->
 <template v-if=" annoABC == 'A'">
<rubrique>Communio</rubrique><br /><br />Tolle puerum et matrem eius,<br />
et vade in terram Iuda:<br />
<span class="fc">defuncti sunt</span> enim, qui quaerebant animam pueri.
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Nimm den Knaben und seine Mutter<br />
und zieh in das Land Juda;<br />
denn die dem Kind nach dem Leben getrachtet haben, sind tot.</ion-text></ion-col></ion-row></ion-grid>

</template>
<!--  - keyCalendar = 25 - keyTitle = 3331 - prev_keyPiece = 3727 - keyType = 6 - officeYear = C - keyText = 3889 -->
 <template v-if=" annoABC == 'B' ||  annoABC == 'C'">
<rubrique>Communio</rubrique><br /><br />Fili, quid fecisti nobis sic?<br />
Ego et pater tuus dolentes quaerebamus te.<br />
Quid est quod me quaerebatis?<br />
Nesciebatis quia in his quae Patris mei sunt oportet me esse?
<ion-grid><ion-row><ion-col>&nbsp;</ion-col><ion-col size="11">
<ion-text color="tertiary">Kind, warum hast du uns das getan?<br />
Ich und dein Vater haben dich mit Schmerzen gesucht!<br />
Warum habt ihr mich gesucht?<br />
Wusstet ihr nicht, dass ich in dem sein muß, was meines Vaters ist?</ion-text></ion-col></ion-row></ion-grid>

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