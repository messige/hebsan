<!-- DEBUG-VIEW START 304 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
<template>

<rubrique>Introitus</rubrique><br /><br />
Venite, adoremus Deum<br />
et procidamus ante Dominum :<br />
ploremus ante eum, qui fecit nos :<br />
quia ipse est Dominus Deus noster.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kommt, lasst uns Gott anbeten,<br />
und vor dem Herrn niederfallen,<br />
lasst uns weinen vor ihm, der uns geschaffen,<br />
denn er ist der Herr, unser Gott.</ion-text></ion-col> </ion-row></ion-grid>Ps. Venite, exsultemus Domino :<br />
iubilemus Deo salutari nostro.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Kommt, lasst uns jauchzen dem Herrn,<br />
lasst uns jubeln zu Gott, unserem Heil.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Graduale</rubrique><br /><br />
Dispersit, dedit pauperibus;<br />
iustitia eius manet in saeculum saeculi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Er streute aus, er gab den Armen,<br />
seine Gerechtigkeit bleibt in alle Ewigkeit.</ion-text></ion-col> </ion-row></ion-grid>V./  Potens in terra erit semen eius,<br />
generatio rectorum benedicetur.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Mächtig auf Erden wird seine Nachkommenschaft sein,<br />
das Geschlecht der Redlichen wird gesegnet.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Graduale</rubrique><br /><br />
Tollite hostias et introite in atria eius :<br />
adorate Dominum in aula sancta eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nehmt Opfergaben und tretet ein in sein Heiligtum!<br />
Betet den Herrn an in seiner heiligen Halle.</ion-text></ion-col> </ion-row></ion-grid>V./  Revelavit Dominus condensa,<br />
et in templo eius omnes dicent gloriam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr hat die Wälder gelichtet<br />
und in seinem Tempel sprechen alle von seiner Herrlichkeit.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Graduale</rubrique><br /><br />
Tollite hostias et introite in atria eius :<br />
adorate Dominum in aula sancta eius.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Nehmt Opfergaben und tretet ein in sein Heiligtum!<br />
Betet den Herrn an in seiner heiligen Halle.</ion-text></ion-col> </ion-row></ion-grid>V./  Revelavit Dominus condensa,<br />
et in templo eius omnes dicent gloriam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Der Herr hat die Wälder gelichtet<br />
und in seinem Tempel sprechen alle von seiner Herrlichkeit.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<rubrique>Versus alleluiaticus</rubrique><br /><br />
Laudate Dominum, omnes gentes.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Lobt den Herrn, alle Völker!</ion-text></ion-col> </ion-row></ion-grid> Et collaudate eum, omnes populi.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Und lobpreist ihn, alle Völker.</ion-text></ion-col> </ion-row></ion-grid>	
<rubrique>Offertorium</rubrique><br /><br />
Perfice gressus meos in semitis tuis,<br />
ut non moveantur vestigia mea :<br />
inclina aurem tuam,<br />
et exaudi verba mea :<br />
mirifica misericordias tuas,<br />
qui salvos facis sperantes in te, Domine.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Festige meine Schritte auf deinen Wegen,<br />
damit meine Füße nicht wanken auf deinen Pfaden.<br />
Neige dein Ohr mir zu,<br />
und erhöre meine Worte!<br />
Wunderbar erweise deine Barmherzigkeit,<br />
der du heil machst, die auf dich hoffen, Herr!</ion-text></ion-col> </ion-row></ion-grid>V./  Exaudi Domine iustitiam meam:<br />
intende deprecationem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Höre, Herr, die gerechte Sache,<br />
achte auf mein Flehen!</ion-text></ion-col> </ion-row></ion-grid>V./  Auribus percipe orationem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Vernimm mit deinen Ohren mein Gebet.</ion-text></ion-col> </ion-row></ion-grid>V./  Custodi me, Domine, ut pupillam oculi :<br />
sub umbra alarum tuarum protege me:<br />
eripe me Domine, ab impio.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Behüte mich, Herr, wie den Stern des Auges!<br />
Unter dem Schatten deiner Flügel beschütze mich,<br />
befreie mich Herr, vor dem Gottlosen.</ion-text></ion-col> </ion-row></ion-grid>V./  Ego autem cum iustitia apparebo in conspectu tuo :<br />
satiabor, dum manifestabitur gloria tua.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Ich aber, in Gerechtigkeit werde ich vor deinem Angesicht erscheinen,<br />
ich werde gesättigt werden, wenn mir deine Herrlichkeit sich offenbaren wird.</ion-text></ion-col> </ion-row></ion-grid>	
<template v-if="annoABC == 'A'"><rubrique>Communio</rubrique><br /><br />
Introibo ad altare Dei, ad Deum<br />
qui laetificat iuventutem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zum Altar Gottes will ich treten, zu Gott,<br />
der meine Jugend erfreut.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'B'"><rubrique>Communio</rubrique><br /><br />
Multitudo languentium,<br />
et qui vexabantur a spiritibus immundis,<br />
veniebant ad eum :<br />
quia virtus de illo exibat,<br />
et sanabat omnes.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Eine große Zahl von Leidenden<br />
und von unreinen Geistern Gequälte<br />
kamen zu ihm;<br />
denn es ging eine Kraft von ihm aus<br />
und sie heilte alle.</ion-text></ion-col> </ion-row></ion-grid></template>
	
<template v-if="annoABC == 'C'"><rubrique>Communio</rubrique><br /><br />
Introibo ad altare Dei, ad Deum<br />
qui laetificat iuventutem meam.<ion-grid> <ion-row><ion-col>&nbsp;</ion-col><ion-col size="11"><ion-text color="tertiary">Zum Altar Gottes will ich treten, zu Gott,<br />
der meine Jugend erfreut.</ion-text></ion-col> </ion-row></ion-grid></template>
	
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

<!-- DEBUG-VIEW ENDED 304 APPPATH/Config/../Views/pages/calendar_piece_vue.php -->
