<!-- DEBUG-VIEW START 310 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Suscepimus, Deus,<br />
misericordiam tuam in medio templi tui.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Empfangen haben wir, Gott,<br />
dein Erbarmen inmitten deines Tempels.</ion-text></ion-col> </ion-row></ion-grid> Secundum nomen tuum, Domine (Deus),<br />
ita et laus tua in fines terrae.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Wie dein Name, Herr (Gott),<br />
so reicht dein Ruhm bis an die Enden der Erde.</ion-text></ion-col> </ion-row></ion-grid> Iustitia plena est dextera tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Von Gerechtigkeit erfüllt ist deine Rechte.</ion-text></ion-col> </ion-row></ion-grid>Ps. Magnus Dominus et laudabilis nimis,<br />
in civitate Dei (nostri), in monte sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Groß ist der Herr und hoch zu loben<br />
in der Stadt unseres Gottes, auf seinem heiligen Berg.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Graduale</rubrique><br /><br />
Esto mihi in Deum protectorem,<br />
et in locum refugii,<br />
ut salvum me facias.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Sei mir ein schützender Gott,<br />
und ein Ort der Zuflucht,<br />
um mich zu retten (heil zu machen).</ion-text></ion-col> </ion-row></ion-grid>V./  Deus, in te speravi:<br />
Domine, non confundar in aeternum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Gott, auf dich habe ich gehofft.<br />
Herr, möge ich nicht zuschanden werden in Ewigkeit.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Venite ad me,<br />
omnes qui laboratis,<br />
et onerati estis :<br />
et ego reficiam vos.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kommt alle zu mir,<br />
die ihr euch plagt<br />
und schwere Lasten zu tragen habt.<br />
Ich werde euch erquicken.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B' || annoABC == 'C'"><rubrique>Versus alleluiaticus</rubrique><br /><br />
Magnus Dominus et laudabilis nimis,<br />
in civitate Dei (nostri), in monte sancto eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Groß ist der Herr und hoch zu loben<br />
in der Stadt unseres Gottes, auf seinem heiligen Berg.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Offertorium</rubrique><br /><br />
Populum humilem salvum facies, Domine,<br />
et oculos superborum humiliabis :<br />
quoniam quis Deus praeter te, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Du wirst heil machen ein niedriges Volk, Herr,<br />
und die Augen der Stolzen erniedrigen.<br />
Denn: Wer ist Gott außer dir, Herr?</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Communio</rubrique><br /><br />
Gustate et videte, quoniam suavis est Dominus.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kostet und seht, wie gütig der Herr ist.</ion-text></ion-col> </ion-row></ion-grid> Beatus vir qui sperat in eo.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig der Mensch, der auf ihn seine Hoffnung setzt.</ion-text></ion-col> </ion-row></ion-grid>	
<br />
</template>
<script>
  export default {
    props: {
      annoABC: {
        type: String,    
      }
    }
  }
</script>	

<!-- DEBUG-VIEW ENDED 310 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
