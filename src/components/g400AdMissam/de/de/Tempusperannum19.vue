<!-- DEBUG-VIEW START 306 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>
<rubrique>Introitus</rubrique><br /><br />
Respice, Domine, in testamentum tuum,<br />
et animas pauperum tuorum ne derelinquas in finem :<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Schau hin, Herr, auf deinen Bund,<br />
und vergiss das Leben deiner Elenden nicht für immer!</ion-text></ion-col> </ion-row></ion-grid> Exsurge Domine, et iudica causam tuam:<br />
et ne obliviscaris voces quaerentium te.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Steh auf, Herr, und richte deine Sache!<br />
Und vergiss nicht die Stimmer derer, die dich suchen!</ion-text></ion-col> </ion-row></ion-grid>Ps. Ut quid Deus repulisti in finem :<br />
<span class="fc">iratus est</span> furor tuus super oves pascuae tuae?<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Warum, o Gott, hast du [uns] für immer verworfen,<br />
warum raucht dein Zorn gegen die Schafe deiner Weide?</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Ostende nobis, Domine, misericordiam tuam :<br />
et salutare tuum da nobis.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zeige uns, Herr, deine Erbarmen<br />
und schenke uns dein Heil.</ion-text></ion-col> </ion-row></ion-grid> Benedixisti, Domine, terram tuam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Einst hast du, Herr, dein Land begnadet.</ion-text></ion-col> </ion-row></ion-grid> Avertisti captivitatem Iacob.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und Jakobs Unglück gewendet.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Respice, Domine, in testamentum tuum,<br />
et animas pauperum tuorum ne derelinquas in finem :<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Schau hin, Herr, auf deinen Bund,<br />
und vergiss das Leben deiner Elenden nicht für immer!</ion-text></ion-col> </ion-row></ion-grid>V./  Exsurge Domine,<br />
et iudica causam tuam:<br />
memor esto opprobrii servorum tuorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Steh auf, Herr,<br />
und führe deine Sache,<br />
erinnere dich der Schmach deiner Knechte.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Beata gens cuius est Dominus Deus eorum :<br />
populus quem elegit Dominus in hereditatem sibi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Selig das Volk, dessen Gott der Herr ist,<br />
das Volk, das er sich zum Erbe erwählt.</ion-text></ion-col> </ion-row></ion-grid>V./  Verbo Domini caeli <span class="fc">firmati sunt</span><br />
et spiritu oris eius omnis virtus eorum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Durch das Wort des Herrn wurden die Himmel geschaffen,<br />
ihr ganzes Heer durch den Hauch seines Mundes.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Domine, refugium <span class="fc">factus es</span> nobis<br />
a generatione et progenie.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Herr, Zuflucht warst du uns<br />
von Geschlecht zu Geschlecht!</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
In te speravi, Domine:<br />
dixi: tu es Deus meus,<br />
in manibus tuis tempora mea.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Auf dich habe ich meine Hoffnung gesetzt.<br />
Ich sprach: Du bist mein Gott.<br />
In deinen Händen liegt mein Geschick [meine Zeit].</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A' || annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Panis,<br />
quem ego dedero,<br />
caro mea est pro saeculi vita.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Das Brot,<br />
das ich geben werde,<br />
ist mein Fleisch für das Leben der Welt.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Beatus servus quem cum venerit Dominus<br />
invenerit vigilantem:<br />
amen dico vobis,<br />
super omnia bona sua constituet eum.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Glücklich der Knecht, den der Herr, wenn er kommt,<br />
wachend finden wird.<br />
Wahrlich, ich sage euch:<br />
über alle seine Güter wird er ihn einsetzen.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 306 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
